import express, {Request, Response} from "express"

const router = express.Router()

import { apiRouter } from "./api/api_router"

router.get('/', function (req: Request, res: Response) {
    res.json({title: 'Payment Service'})
})

router.use('/api', apiRouter)

export {router as indexRouter}