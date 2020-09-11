import axios from "axios";

export const instance = axios.create({
  baseURL: "https://us-central1-clone-399a8.cloudfunctions.net/api",
  // "http://localhost:5001/clone-399a8/us-central1/api", // API url (cloud function)
});
