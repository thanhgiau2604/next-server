const express = require("express");
const app = express();
const port = 3001;

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,DELETE,FETCH');
    res.setHeader('Access-Control-Allow-Headers','X-Requested-With,content-type,Authorization,x-access-token');
    next();
  });
app.get("/data",(req,res) => {
    const data = ["Thanh Giau", "Van Hien", "Trong Nhan", "Van Luyen"];
    res.send(data);
})

app.listen(port, () => console.log("App listening on PORT = " + port));