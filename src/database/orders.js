const { ObjectId } = require('mongodb');
const db = require('./db')

// const getAllOrders = async() => {
//     return await db.orders.find().toArray();
// }

// const getOrderById = async(id) => {
//     return await db.orders.findOne({ _id: new ObjectId(id) })
// }

const getOrder = async(ref) => {
    return await db.orders.findOne({ ref })
}

const createOrder = async(order) => {
    const result = await db.orders.insertOne(order);
    return {...order, _id: result.insertedId }
}

module.exports = {
    getOrder,
    createOrder
}