const open = require("open")
    , express = require("express")
    , app = express();

const PORT = 3001;

app.use(express.static("./"));

app.get("/", function(req, res)
{
    res.sendFile("./Index.html");
});

app.listen(PORT, function()
{
    console.log(`Started server at localhost:${PORT}`);
    open(`http://localhost:${PORT}`, {app: 'chrome'});
});

