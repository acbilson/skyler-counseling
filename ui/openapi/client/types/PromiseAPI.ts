import { ResponseContext, RequestContext, HttpFile, HttpInfo } from '../http/http';
import { Configuration, PromiseConfigurationOptions, wrapOptions } from '../configuration'
import { PromiseMiddleware, Middleware, PromiseMiddlewareWrapper } from '../middleware';

import { LoginModel } from '../models/LoginModel';
import { RegisterModel } from '../models/RegisterModel';
import { ObservableAuthApi } from './ObservableAPI';

import { AuthApiRequestFactory, AuthApiResponseProcessor} from "../apis/AuthApi";
export class PromiseAuthApi {
    private api: ObservableAuthApi

    public constructor(
        configuration: Configuration,
        requestFactory?: AuthApiRequestFactory,
        responseProcessor?: AuthApiResponseProcessor
    ) {
        this.api = new ObservableAuthApi(configuration, requestFactory, responseProcessor);
    }

    /**
     * @param loginModel
     */
    public apiAuthLoginPostWithHttpInfo(loginModel: LoginModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiAuthLoginPostWithHttpInfo(loginModel, observableOptions);
        return result.toPromise();
    }

    /**
     * @param loginModel
     */
    public apiAuthLoginPost(loginModel: LoginModel, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiAuthLoginPost(loginModel, observableOptions);
        return result.toPromise();
    }

    /**
     * @param registerModel
     */
    public apiAuthRegisterPostWithHttpInfo(registerModel: RegisterModel, _options?: PromiseConfigurationOptions): Promise<HttpInfo<void>> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiAuthRegisterPostWithHttpInfo(registerModel, observableOptions);
        return result.toPromise();
    }

    /**
     * @param registerModel
     */
    public apiAuthRegisterPost(registerModel: RegisterModel, _options?: PromiseConfigurationOptions): Promise<void> {
        const observableOptions = wrapOptions(_options);
        const result = this.api.apiAuthRegisterPost(registerModel, observableOptions);
        return result.toPromise();
    }


}



