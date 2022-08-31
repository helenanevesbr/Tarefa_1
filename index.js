const app = require("express")();
const bodyParser = require('body-parser');
const ConverterController = require("./controllers/converters/converter-controller");

app.use(bodyParser.urlencoded());
app.set('view engine', 'ejs');

const port = process.env.PORT || 3000

app.get("/", ConverterController.index)
app.post("/", ConverterController.converter)

app.listen(port, () => {
    console.log("listen port:", port)
})