[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / utils/http

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
| `input` | [`RequestInfo`](input._internal_.md#requestinfo) | Request defination. |
| `init?` | [`RequestInit`](../interfaces/input._internal_.RequestInit.md) | Request init object. |

#### Returns

`Promise`<`T`\>

- Response promise which resolves to object wth provided type T.

#### Defined in

[src/utils/http.ts:9](https://github.com/hitendrarao/location/blob/d9af338/src/utils/http.ts#L9)
