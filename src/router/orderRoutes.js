const express = require('express')
const router = express.Router();
const { createOrder, getOrder } = require('../database/orders')
    // const { getAllOrders, getOrderById } = require('../database/orders')

// router.get('/', async(req, res) => {
//     const order = await getAllOrders();
//     console.log(order);
//     res.send({ status: 'OK', data: order })
// })

// router.get('/:orderId', async(req, res) => {
//     try {
//         const order = await getOrderById(req.params.orderId);
//         if (!order) {
//             res.send({ status: 'FAILED', error: 'No Order found' })
//             return
//         }
//         res.send({ status: 'OK', data: order })
//     } catch (e) {
//         res.send({ status: 'FAILED', error: e.message })
//     }
// })

router.get('/:reference', async(req, res) => {
    const order = await getOrder(req.params.reference)
    if (!order) {
        res.status(404).send({ status: 'FAILED', error: 'ORDER NOT FOUND' })
    }
    res.send({ status: 'OK', data: order })
})

//creatinf order POST

router.post('/', async(req, res) => {
    const orderDate = req.body;
    orderDate.ref = (Math.random() + 1).toString(36).substring(7);;

    const newOrder = await createOrder(orderDate)
    res.status(201).send({ status: 'OK', data: newOrder })
})

module.exports = router