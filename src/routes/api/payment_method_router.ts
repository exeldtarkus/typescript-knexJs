import express from "express"
import * as controller from '../../../src/app/http/controllers/payment_method_controller'

const router = express.Router()

router.get('/', controller.index)
router.get('/:bengkelId/payment-methods', controller.index)

export {
    router as paymentMethodRouter
}