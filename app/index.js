const express = require ('express');
const app = express();
const routes =require('./routers/routes');
app.use (express.json());
app.use('/api',routes);

app.use ('/',(req,res) => {
    res.send('bienvenido a mi api');
});
app.listen(3000,() => {       
    console.log("Servidor el lña url http://localhost:3000");
})
