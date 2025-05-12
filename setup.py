import os
from datetime import datetime

extensions = ".tsx", ".ts", ".json", ".html"
ignore_files = ("Footer.tsx",)


def success(message):
    print(f"\033[92m{message}\033[0m")


def info(message):
    print(f"\033[96m{message}\033[0m")


def find_files():
    files = []
    for root, dirs, filenames in os.walk("."):
        if "node_modules" in root:
            continue
        for filename in filenames:
            if filename.endswith(extensions) and not filename.endswith(ignore_files):
                files.append(os.path.join(root, filename))
    return files


def replace_strings(files, replacements):
    for file in files:
        with open(file, "r+") as f:
            content = f.read()
            for cur, sub in replacements:
                content = content.replace(cur, sub)
            f.seek(0)
            f.write(content)
            f.truncate()


def get_input(message, endless=True):
    value = None
    while value is None or (endless and not value):
        value = input(message + "\n>>>").strip()
    return value


def replace_mongo_srv(mongo_srv):
    if mongo_srv:
        mongo_srv = "MONGO_SRV=" + mongo_srv
        with open(".env", "r") as env_file:
            content = env_file.read()
            if "MONGO_SRV=" in content:
                return
            if content and content[-1] != "\n":
                mongo_srv = "\n" + mongo_srv

        with open(".env", "a") as env_file:
            env_file.write(mongo_srv)


def main():
    repo_name = (
        get_input("What is the name of your repository?\n(e.g. react-skeleton)")
        .replace(" ", "-")
        .lower()
    )
    project_name = get_input("What is the name of your project?\n(e.g. React Skeleton)")
    description = get_input("What is the description of your project?")
    mongo_srv = get_input(
        "What is your mongo connection URL?\n(e.g. mongodb+srv://user:pass@cluster.abc123.mongodb.net/?retryWrites=true&w=majority)",
        endless=False,
    )
    replace_mongo_srv(mongo_srv)
    replacements = [
        ("vercel-mern-skeleton", repo_name),
        ("Vercel MERN Skeleton", project_name),
        (
            "A skeleton for a React/Express/MongoDB web app that is deployable to Vercel!",
            description,
        ),
    ]

    info(f"Setting up {project_name}...")
    files = find_files()
    replace_strings(files, replacements)
    success("Autoreplaced strings in files!")
    info("Installing npm dependencies...")
    os.system("npm install && cd client && npm install && cd ..")
    success("Installed npm dependencies!")
    info("Cleaning up...")
    os.remove(__file__)
    success("Finished setting up!")
    info("Run `npm run dev` to start the development server.")


if __name__ == "__main__":
    main()
