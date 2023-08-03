import {UserSchema} from "../../../../entities/User/index";
import {LoginSchema} from "features/AuthByUsername";

export interface StateSchema {
    user: UserSchema
    loginForm: LoginSchema
}