const express = require('express');
const productRoutes = require('./router/productRoutes')
const orderRoutes = require('./router/orderRoutes')
const paymentRoutes = require('./router/paymentRoutes')
const bodyParser = require('body-parser')

const app = express();
const portNumber = 19000;
const ipAddress = "192.168.43.1";
const PORT = 1900;
// 192.168.43.1:19000 make this the port numberof a aport const
app.use(bodyParser.json())
app.use('/products', productRoutes)
app.use('/orders', orderRoutes)
app.use('/payments', paymentRoutes)

app.get('/', (req, res) => {
    res.send("<h2>Hekko</h2>")
})


app.listen(PORT, () => {
    console.log('Api is listening on port', PORT)
})