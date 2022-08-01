import {Request, Response, NextFunction} from 'express';
import passport from '../../config/passport_config'

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {

    passport.authenticate('jwt', {session: false},
        (err, user, info) => {
            try {
                console.log("auth_middleware.info", info)
                if (err) {
                    throw new Error('info!')
                    return next(err)
                }
                if (!user) {
                    console.log("auth_middleware.callback", user)
                    throw new Error('User not found!')
                }
                req.user = user
                next()
            } catch (e) {
                next(e)
            }
        },
    )(req, res, next)

}

export default authMiddleware