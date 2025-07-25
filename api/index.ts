import express, { Request, Response } from "express";
import session from "express-session";
import http from "http";
import mongoose from "mongoose";
import path from "path";
import dotenv from "dotenv";
import cors from "cors";
import logger from "morgan";
import MongoStore from "connect-mongo";
import ExpressMongoSanitize from "express-mongo-sanitize";
import { OK, SERVER_ERROR } from "../server/util";
import generalRouter from "../server/router";

dotenv.config({ quiet: true });

// some constants
const MONGO_URL = process.env.MONGO_SRV;
if (!MONGO_URL) {
  throw new Error("MONGO_SRV is not defined in .env file!");
}

// MongoDB connection using Mongoose
const mongoClient = mongoose
  .connect(MONGO_URL)
  .then((mongo) => {
    console.log("Connected to MongoDB database.");
    return mongo.connection.getClient();
  })
  .catch((error) => {
    console.log(`Error connecting to MongoDB database: ${error}`);
    throw new Error(error.message);
  });

const app = express();

app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use(ExpressMongoSanitize());
app.set("port", process.env.PORT ?? 8000);

// sessions
app.use(
  session({
    secret: process.env.SESSION_SECRET ?? "secret",
    resave: true,
    saveUninitialized: false,
    store: MongoStore.create({
      clientPromise: mongoClient,
      dbName: "sessions",
      autoRemove: "interval",
      autoRemoveInterval: 10,
    }),
  })
);

const API_PREFIX = "/api";
// Add your routers here:
app.use(API_PREFIX, generalRouter);

const buildDir = path.resolve(__dirname, "..", "client", "build");
const indexDir = path.join(buildDir, "index.html");

// Build directory
app.use(express.static(buildDir));

// Serve index.html for all other routes
app.get("*", (req: Request, res: Response) => {
  res.status(OK).sendFile(indexDir);
});

app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack);
  res.status(SERVER_ERROR).send({ error: "Server error" });
});

const server = http.createServer(app);

server.listen(app.get("port"), () => {
  console.log(`Server running on port: ${app.get("port")}`);
});
