[my-webpack-project](../README.md) / [Exports](../modules.md) / utils/http

# Module: utils/http

## Table of contents

### Functions

- [default](utils_http.md#default)

## Functions

### default

▸ **default**<`T`\>(`input`, `init?`): `Promise`<`T`\>

Droom Wrapper for fetch api.

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `input` | `RequestInfo` | Request defination. |
| `init?` | `RequestInit` | Request init object. |

#### Returns

`Promise`<`T`\>

- Response promise which resolves to object wth provided type T.

#### Defined in

[utils/http.ts:9](https://github.com/hitendrarao/location/blob/56352cf/src/utils/http.ts#L9)
