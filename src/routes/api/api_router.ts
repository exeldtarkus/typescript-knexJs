import express from "express"

const router = express.Router()

import {paymentMethodRouter} from './payment_method_router'

router.use('/payment-methods', paymentMethodRouter)

export {router as apiRouter}