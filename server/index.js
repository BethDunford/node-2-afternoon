const express = require("express");
const {create, read, update, deleteMessage} = require("./controllers/messages_controller");
const app = express();

app.use(express.json());
app.use(express.static(__dirname + '/..public/build'));

app.post("/api/messages", create);
app.get("/api/messages", read);
app.put("/api/messages/:id", update);
app.delete("/api/messages/:id", deleteMessage);

app.listen(3001, () => console.log("Listening on port 3001"));