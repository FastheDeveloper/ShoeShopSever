const express = require('express')
const router = express.Router();
const stripe = require('stripe')(
    'sk_test_51Mmy8ICMK9tGvZA1QtSSRxjfHZouoSygYskkzmGT0s6StYVoDADAVBsRbcYT3fzzJGCR6m3EoPvlMss3u1Miv9u300vk9TEtTZ');


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