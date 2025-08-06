// Entry point from port

import app from "./app.js";

let port = 8080;
app.listen(port, () => {
    console.log("Server is listening on 8080");
})