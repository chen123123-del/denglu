import request from "./request.js";

const onepost = (data) => request.post("/oauth/token", data);

export default onepost;
