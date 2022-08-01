import passport from 'passport'

import {strategy} from "./jwt_config";

passport.use(strategy)

export default passport