const { MongoClient } = require('mongodb')

const uri =
    'mongodb+srv://farouq:GQOaXKeKdckyruYw@cluster0.215q6r5.mongodb.net/?retryWrites=true&w=majority'

const client = new MongoClient(uri);

const database = client.db('test')

const products = database.collection('products')

const orders = database.collection('orders')

module.exports = {
        products,
        orders
    }
    //the git ignore file should ignoree all package.jsaon and package-lock.json