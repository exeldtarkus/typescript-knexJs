import express from "express"

const router = express.Router()

import {paymentMethodRouter} from './payment_method_router'

router.use('/bengkel', paymentMethodRouter)

export {router as apiRouter}