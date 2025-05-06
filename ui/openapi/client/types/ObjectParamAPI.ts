import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, ConfigurationOptions } from '../configuration'
import type { Middleware } from '../middleware';

import { LoginModel } from '../models/LoginModel';
import { RegisterModel } from '../models/RegisterModel';

import { ObservableAuthApi } from "./ObservableAPI";
import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";

export interface AuthApiApiAuthLoginPostRequest {
    /**
     * 
     * @type LoginModel
     * @memberof AuthApiapiAuthLoginPost
     */
    loginModel: LoginModel
}

export interface AuthApiApiAuthRegisterPostRequest {
    /**
     * 
     * @type RegisterModel
     * @memberof AuthApiapiAuthRegisterPost
     */
    registerModel: RegisterModel
}

export class ObjectAuthApi {
    private api: ObservableAuthApi

    public constructor(configuration: Configuration, requestFactory?: AuthApiRequestFactory, responseProcessor?: AuthApiResponseProcessor) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param param the request object
     */
    public apiAuthLoginPostWithHttpInfo(param: AuthApiApiAuthLoginPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiAuthLoginPostWithHttpInfo(param.loginModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiAuthLoginPost(param: AuthApiApiAuthLoginPostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiAuthLoginPost(param.loginModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiAuthRegisterPostWithHttpInfo(param: AuthApiApiAuthRegisterPostRequest, options?: ConfigurationOptions): Promise<HttpInfo<void>> {
        return this.api.apiAuthRegisterPostWithHttpInfo(param.registerModel,  options).toPromise();
    }

    /**
     * @param param the request object
     */
    public apiAuthRegisterPost(param: AuthApiApiAuthRegisterPostRequest, options?: ConfigurationOptions): Promise<void> {
        return this.api.apiAuthRegisterPost(param.registerModel,  options).toPromise();
    }

}
