const express = require('express')
const router = express.Router();
const stripe = require('stripe')(
    'STRIPE SECRET KEY HERE');


//Router Endpoints
router.post('/intents', async(req, res) => {
    try {
        //create payment intent
        const paymentIntent = await stripe.paymentIntents.create({
                amount: req.body.amount, //integer, represented in the lowest denominations (usd->cents,ngn->kobo)
                currency: 'usd',
                automatic_payment_methods: {
                    enabled: true
                },

            })
            //return the secret back to client
        res.json({ paymentIntent: paymentIntent.client_secret });
    } catch (e) {
        res.status(400).json({
            error: e.message
        })
    }


})


module.exports = router;
