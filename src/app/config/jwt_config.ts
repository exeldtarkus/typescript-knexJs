import {Strategy, ExtractJwt, VerifyCallback} from 'passport-jwt'
// const userRepository = require('../../../repositories/user_repository')
import * as jwt from 'jsonwebtoken'
import {StrategyOptions} from "passport-jwt";
import {Request, NextFunction} from "express";

const jwtOptions: StrategyOptions = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.JWT_TOKEN || 'secret',
    passReqToCallback: true
}


const jwtCallback: any = (payload: any, done: any) => {
    // let user = await userRepository.findOne({ uuid: jwtPayload.id })

    // if (user) {
    //     next(null, user)
    // } else {
    //     next(null, false)
    // }
    console.log('jwtPayload', payload)

    let user = {
        name: 'jimmy'
    }

    console.log('jwtPayload.user', user)

    done(null, user)
}

const strategy = new Strategy(jwtOptions, jwtCallback)

const generateToken = (payload: any) => {
    // let token = jwt.sign(payload, jwtOptions.secretOrKey)
    // return token
    return {
        user: payload
    }
}

export {
    strategy,
    generateToken
}