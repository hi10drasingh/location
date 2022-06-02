[my-webpack-project](../README.md) / [Exports](../modules.md) / [utils/http](utils_http.md) / <internal\>

# Namespace: <internal\>

[utils/http](utils_http.md).<internal>

## Table of contents

### Interfaces

- [Body](../interfaces/utils_http._internal_.Body.md)
- [Headers](../interfaces/utils_http._internal_.Headers.md)
- [Request](../interfaces/utils_http._internal_.Request.md)
- [RequestInit](../interfaces/utils_http._internal_.RequestInit.md)

### Type Aliases

- [BodyInit](utils_http._internal_.md#bodyinit)
- [HeadersInit](utils_http._internal_.md#headersinit)
- [Record](utils_http._internal_.md#record)
- [RequestCache](utils_http._internal_.md#requestcache)
- [RequestCredentials](utils_http._internal_.md#requestcredentials)
- [RequestDestination](utils_http._internal_.md#requestdestination)
- [RequestInfo](utils_http._internal_.md#requestinfo)
- [RequestMode](utils_http._internal_.md#requestmode)
- [RequestRedirect](utils_http._internal_.md#requestredirect)
- [XMLHttpRequestBodyInit](utils_http._internal_.md#xmlhttprequestbodyinit)

### Variables

- [Headers](utils_http._internal_.md#headers)
- [Request](utils_http._internal_.md#request)

## Type Aliases

### BodyInit

Ƭ **BodyInit**: [`ReadableStream`](input._internal_.md#readablestream) \| [`XMLHttpRequestBodyInit`](utils_http._internal_.md#xmlhttprequestbodyinit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:18110

___

### HeadersInit

Ƭ **HeadersInit**: `string`[][] \| [`Record`](utils_http._internal_.md#record)<`string`, `string`\> \| [`Headers`](utils_http._internal_.md#headers)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:18141

___

### Record

Ƭ **Record**<`K`, `T`\>: { [P in K]: T }

Construct a type with a set of properties K of type T

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof `any` |
| `T` | `T` |

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1565

___

### RequestCache

Ƭ **RequestCache**: ``"default"`` \| ``"force-cache"`` \| ``"no-cache"`` \| ``"no-store"`` \| ``"only-if-cached"`` \| ``"reload"``

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:18291

___

### RequestCredentials

Ƭ **RequestCredentials**: ``"include"`` \| ``"omit"`` \| ``"same-origin"``

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:18292

___

### RequestDestination

Ƭ **RequestDestination**: ``""`` \| ``"audio"`` \| ``"audioworklet"`` \| ``"document"`` \| ``"embed"`` \| ``"font"`` \| ``"frame"`` \| ``"iframe"`` \| ``"image"`` \| ``"manifest"`` \| ``"object"`` \| ``"paintworklet"`` \| ``"report"`` \| ``"script"`` \| ``"sharedworker"`` \| ``"style"`` \| ``"track"`` \| ``"video"`` \| ``"worker"`` \| ``"xslt"``

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:18293

___

### RequestInfo

Ƭ **RequestInfo**: [`Request`](utils_http._internal_.md#request) \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:18158

___

### RequestMode

Ƭ **RequestMode**: ``"cors"`` \| ``"navigate"`` \| ``"no-cors"`` \| ``"same-origin"``

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:18294

___

### RequestRedirect

Ƭ **RequestRedirect**: ``"error"`` \| ``"follow"`` \| ``"manual"``

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:18295

___

### XMLHttpRequestBodyInit

Ƭ **XMLHttpRequestBodyInit**: `Blob` \| [`BufferSource`](input._internal_.md#buffersource) \| [`FormData`](input._internal_.md#formdata) \| `URLSearchParams` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:18167

## Variables

### Headers

• **Headers**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | [`Headers`](utils_http._internal_.md#headers) |

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8415

___

### Request

• **Request**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `prototype` | [`Request`](utils_http._internal_.md#request) |

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11576
