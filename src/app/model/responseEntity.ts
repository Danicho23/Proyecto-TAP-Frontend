/**
 * Api Documentation
 * Api Documentation
 *
 * OpenAPI spec version: 1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */

export interface ResponseEntity { 
    body?: any;
    statusCode?: ResponseEntity.StatusCodeEnum;
    statusCodeValue?: number;
}
export namespace ResponseEntity {
    export type StatusCodeEnum = '100 CONTINUE' | '101 SWITCHING_PROTOCOLS' | '102 PROCESSING' | '103 CHECKPOINT' | '200 OK' | '201 CREATED' | '202 ACCEPTED' | '203 NON_AUTHORITATIVE_INFORMATION' | '204 NO_CONTENT' | '205 RESET_CONTENT' | '206 PARTIAL_CONTENT' | '207 MULTI_STATUS' | '208 ALREADY_REPORTED' | '226 IM_USED' | '300 MULTIPLE_CHOICES' | '301 MOVED_PERMANENTLY' | '302 FOUND' | '302 MOVED_TEMPORARILY' | '303 SEE_OTHER' | '304 NOT_MODIFIED' | '305 USE_PROXY' | '307 TEMPORARY_REDIRECT' | '308 PERMANENT_REDIRECT' | '400 BAD_REQUEST' | '401 UNAUTHORIZED' | '402 PAYMENT_REQUIRED' | '403 FORBIDDEN' | '404 NOT_FOUND' | '405 METHOD_NOT_ALLOWED' | '406 NOT_ACCEPTABLE' | '407 PROXY_AUTHENTICATION_REQUIRED' | '408 REQUEST_TIMEOUT' | '409 CONFLICT' | '410 GONE' | '411 LENGTH_REQUIRED' | '412 PRECONDITION_FAILED' | '413 PAYLOAD_TOO_LARGE' | '413 REQUEST_ENTITY_TOO_LARGE' | '414 URI_TOO_LONG' | '414 REQUEST_URI_TOO_LONG' | '415 UNSUPPORTED_MEDIA_TYPE' | '416 REQUESTED_RANGE_NOT_SATISFIABLE' | '417 EXPECTATION_FAILED' | '418 I_AM_A_TEAPOT' | '419 INSUFFICIENT_SPACE_ON_RESOURCE' | '420 METHOD_FAILURE' | '421 DESTINATION_LOCKED' | '422 UNPROCESSABLE_ENTITY' | '423 LOCKED' | '424 FAILED_DEPENDENCY' | '425 TOO_EARLY' | '426 UPGRADE_REQUIRED' | '428 PRECONDITION_REQUIRED' | '429 TOO_MANY_REQUESTS' | '431 REQUEST_HEADER_FIELDS_TOO_LARGE' | '451 UNAVAILABLE_FOR_LEGAL_REASONS' | '500 INTERNAL_SERVER_ERROR' | '501 NOT_IMPLEMENTED' | '502 BAD_GATEWAY' | '503 SERVICE_UNAVAILABLE' | '504 GATEWAY_TIMEOUT' | '505 HTTP_VERSION_NOT_SUPPORTED' | '506 VARIANT_ALSO_NEGOTIATES' | '507 INSUFFICIENT_STORAGE' | '508 LOOP_DETECTED' | '509 BANDWIDTH_LIMIT_EXCEEDED' | '510 NOT_EXTENDED' | '511 NETWORK_AUTHENTICATION_REQUIRED';
    export const StatusCodeEnum = {
        _100CONTINUE: '100 CONTINUE' as StatusCodeEnum,
        _101SWITCHINGPROTOCOLS: '101 SWITCHING_PROTOCOLS' as StatusCodeEnum,
        _102PROCESSING: '102 PROCESSING' as StatusCodeEnum,
        _103CHECKPOINT: '103 CHECKPOINT' as StatusCodeEnum,
        _200OK: '200 OK' as StatusCodeEnum,
        _201CREATED: '201 CREATED' as StatusCodeEnum,
        _202ACCEPTED: '202 ACCEPTED' as StatusCodeEnum,
        _203NONAUTHORITATIVEINFORMATION: '203 NON_AUTHORITATIVE_INFORMATION' as StatusCodeEnum,
        _204NOCONTENT: '204 NO_CONTENT' as StatusCodeEnum,
        _205RESETCONTENT: '205 RESET_CONTENT' as StatusCodeEnum,
        _206PARTIALCONTENT: '206 PARTIAL_CONTENT' as StatusCodeEnum,
        _207MULTISTATUS: '207 MULTI_STATUS' as StatusCodeEnum,
        _208ALREADYREPORTED: '208 ALREADY_REPORTED' as StatusCodeEnum,
        _226IMUSED: '226 IM_USED' as StatusCodeEnum,
        _300MULTIPLECHOICES: '300 MULTIPLE_CHOICES' as StatusCodeEnum,
        _301MOVEDPERMANENTLY: '301 MOVED_PERMANENTLY' as StatusCodeEnum,
        _302FOUND: '302 FOUND' as StatusCodeEnum,
        _302MOVEDTEMPORARILY: '302 MOVED_TEMPORARILY' as StatusCodeEnum,
        _303SEEOTHER: '303 SEE_OTHER' as StatusCodeEnum,
        _304NOTMODIFIED: '304 NOT_MODIFIED' as StatusCodeEnum,
        _305USEPROXY: '305 USE_PROXY' as StatusCodeEnum,
        _307TEMPORARYREDIRECT: '307 TEMPORARY_REDIRECT' as StatusCodeEnum,
        _308PERMANENTREDIRECT: '308 PERMANENT_REDIRECT' as StatusCodeEnum,
        _400BADREQUEST: '400 BAD_REQUEST' as StatusCodeEnum,
        _401UNAUTHORIZED: '401 UNAUTHORIZED' as StatusCodeEnum,
        _402PAYMENTREQUIRED: '402 PAYMENT_REQUIRED' as StatusCodeEnum,
        _403FORBIDDEN: '403 FORBIDDEN' as StatusCodeEnum,
        _404NOTFOUND: '404 NOT_FOUND' as StatusCodeEnum,
        _405METHODNOTALLOWED: '405 METHOD_NOT_ALLOWED' as StatusCodeEnum,
        _406NOTACCEPTABLE: '406 NOT_ACCEPTABLE' as StatusCodeEnum,
        _407PROXYAUTHENTICATIONREQUIRED: '407 PROXY_AUTHENTICATION_REQUIRED' as StatusCodeEnum,
        _408REQUESTTIMEOUT: '408 REQUEST_TIMEOUT' as StatusCodeEnum,
        _409CONFLICT: '409 CONFLICT' as StatusCodeEnum,
        _410GONE: '410 GONE' as StatusCodeEnum,
        _411LENGTHREQUIRED: '411 LENGTH_REQUIRED' as StatusCodeEnum,
        _412PRECONDITIONFAILED: '412 PRECONDITION_FAILED' as StatusCodeEnum,
        _413PAYLOADTOOLARGE: '413 PAYLOAD_TOO_LARGE' as StatusCodeEnum,
        _413REQUESTENTITYTOOLARGE: '413 REQUEST_ENTITY_TOO_LARGE' as StatusCodeEnum,
        _414URITOOLONG: '414 URI_TOO_LONG' as StatusCodeEnum,
        _414REQUESTURITOOLONG: '414 REQUEST_URI_TOO_LONG' as StatusCodeEnum,
        _415UNSUPPORTEDMEDIATYPE: '415 UNSUPPORTED_MEDIA_TYPE' as StatusCodeEnum,
        _416REQUESTEDRANGENOTSATISFIABLE: '416 REQUESTED_RANGE_NOT_SATISFIABLE' as StatusCodeEnum,
        _417EXPECTATIONFAILED: '417 EXPECTATION_FAILED' as StatusCodeEnum,
        _418IAMATEAPOT: '418 I_AM_A_TEAPOT' as StatusCodeEnum,
        _419INSUFFICIENTSPACEONRESOURCE: '419 INSUFFICIENT_SPACE_ON_RESOURCE' as StatusCodeEnum,
        _420METHODFAILURE: '420 METHOD_FAILURE' as StatusCodeEnum,
        _421DESTINATIONLOCKED: '421 DESTINATION_LOCKED' as StatusCodeEnum,
        _422UNPROCESSABLEENTITY: '422 UNPROCESSABLE_ENTITY' as StatusCodeEnum,
        _423LOCKED: '423 LOCKED' as StatusCodeEnum,
        _424FAILEDDEPENDENCY: '424 FAILED_DEPENDENCY' as StatusCodeEnum,
        _425TOOEARLY: '425 TOO_EARLY' as StatusCodeEnum,
        _426UPGRADEREQUIRED: '426 UPGRADE_REQUIRED' as StatusCodeEnum,
        _428PRECONDITIONREQUIRED: '428 PRECONDITION_REQUIRED' as StatusCodeEnum,
        _429TOOMANYREQUESTS: '429 TOO_MANY_REQUESTS' as StatusCodeEnum,
        _431REQUESTHEADERFIELDSTOOLARGE: '431 REQUEST_HEADER_FIELDS_TOO_LARGE' as StatusCodeEnum,
        _451UNAVAILABLEFORLEGALREASONS: '451 UNAVAILABLE_FOR_LEGAL_REASONS' as StatusCodeEnum,
        _500INTERNALSERVERERROR: '500 INTERNAL_SERVER_ERROR' as StatusCodeEnum,
        _501NOTIMPLEMENTED: '501 NOT_IMPLEMENTED' as StatusCodeEnum,
        _502BADGATEWAY: '502 BAD_GATEWAY' as StatusCodeEnum,
        _503SERVICEUNAVAILABLE: '503 SERVICE_UNAVAILABLE' as StatusCodeEnum,
        _504GATEWAYTIMEOUT: '504 GATEWAY_TIMEOUT' as StatusCodeEnum,
        _505HTTPVERSIONNOTSUPPORTED: '505 HTTP_VERSION_NOT_SUPPORTED' as StatusCodeEnum,
        _506VARIANTALSONEGOTIATES: '506 VARIANT_ALSO_NEGOTIATES' as StatusCodeEnum,
        _507INSUFFICIENTSTORAGE: '507 INSUFFICIENT_STORAGE' as StatusCodeEnum,
        _508LOOPDETECTED: '508 LOOP_DETECTED' as StatusCodeEnum,
        _509BANDWIDTHLIMITEXCEEDED: '509 BANDWIDTH_LIMIT_EXCEEDED' as StatusCodeEnum,
        _510NOTEXTENDED: '510 NOT_EXTENDED' as StatusCodeEnum,
        _511NETWORKAUTHENTICATIONREQUIRED: '511 NETWORK_AUTHENTICATION_REQUIRED' as StatusCodeEnum
    };
}