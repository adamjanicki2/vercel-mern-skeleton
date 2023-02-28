import qs from "qs";

export async function get(endpoint: string, params: Object = {}) {
  const pathString = endpoint + "?" + qs.stringify(params);
  try {
    const res = await fetch(pathString, { method: "GET" });
    // this will NOT throw error is status is not 200 or 201!
    return res.json();
  } catch (error) {
    // catches error if the response wasn't json parseable
    // or some other network error etc
    // modify this behavior to throw a new error for debugging purposes
    console.log(`GET request to ${pathString} failed!\n${error}`);
    return null;
  }
}

export async function post(endpoint: string, body: Object = {}) {
  try {
    const res = await fetch(endpoint, {
      body: JSON.stringify(body),
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin",
    });
    return res.json();
  } catch (error) {
    console.log(`POST req to ${endpoint} failed:\n${error}`);
    return null;
  }
}
