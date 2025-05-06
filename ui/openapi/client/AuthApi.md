# .AuthApi

All URIs are relative to *https://localhost:7208*

Method | HTTP request | Description
------------- | ------------- | -------------
[**apiAuthLoginPost**](AuthApi.md#apiAuthLoginPost) | **POST** /api/Auth/login | 
[**apiAuthRegisterPost**](AuthApi.md#apiAuthRegisterPost) | **POST** /api/Auth/register | 


# **apiAuthLoginPost**
> void apiAuthLoginPost(loginModel)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiApiAuthLoginPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiApiAuthLoginPostRequest = {
  
  loginModel: {
    email: "email_example",
    password: "password_example",
  },
};

const data = await apiInstance.apiAuthLoginPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **loginModel** | **LoginModel**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)

# **apiAuthRegisterPost**
> void apiAuthRegisterPost(registerModel)


### Example


```typescript
import { createConfiguration, AuthApi } from '';
import type { AuthApiApiAuthRegisterPostRequest } from '';

const configuration = createConfiguration();
const apiInstance = new AuthApi(configuration);

const request: AuthApiApiAuthRegisterPostRequest = {
  
  registerModel: {
    email: "email_example",
    password: "password_example",
    firstName: "firstName_example",
    lastName: "lastName_example",
  },
};

const data = await apiInstance.apiAuthRegisterPost(request);
console.log('API called successfully. Returned data:', data);
```


### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registerModel** | **RegisterModel**|  |


### Return type

**void**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/*+json
 - **Accept**: Not defined


### HTTP response details
| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](README.md#documentation-for-api-endpoints) [[Back to Model list]](README.md#documentation-for-models) [[Back to README]](README.md)


