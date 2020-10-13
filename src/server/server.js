const express = require("express");

const app = express();
const port = process.env.PORT || "1337";
app.set("port", port);

app.use("/", express.static('public'));
app.use((req, res, next) => {
    res.redirect('/error.html');
});
app.listen(port, () => console.log(`Server running on localhost:${port}`));