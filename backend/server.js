const cors = require('cors');
const express = require('express');
const https = require('https');
const app = express();

app.use(express.json());
app.use(cors());
app.get('/', (req, res) => {
  res.json({ data: 'ok' });
});

app.get("/product", function(req, res){
    https.get('https://fakestoreapi.com/products', "JSON", function(response){
        var data;
        response.on("data", function(chunk) {
          if (!data) {
            data = chunk;
          } else {
            data += chunk;
          }
        });
    
        response.on("end", function() {
            const currency=JSON.parse(data);
            res.json(currency);
        });
    });
});

app.post("/sigleProduct", function(req, res){
  let {id} = req.body;
    https.get(`https://fakestoreapi.com/products/${id}`, "JSON", function(response){
        var data;
        response.on("data", function(chunk) {
          if (!data) {
            data = chunk;
          } else {
            data += chunk;
          }
        });
    
        response.on("end", function() {
            const currency=JSON.parse(data);
            res.json(currency);
        });
    });
});

const sPort = 5000;
app.listen(sPort ,() => {
    console.log("Server is running on "+ sPort);
})
