[my-webpack-project](../README.md) / [Exports](../modules.md) / utils/storage/cookie

# Module: utils/storage/cookie

## Table of contents

### Functions

- [get](utils_storage_cookie.md#get)
- [set](utils_storage_cookie.md#set)

## Functions

### get

▸ **get**(`key`): [`Nullable`](interface_placedata._internal_.md#nullable)<`string`\>

Get Value of a key from cookie store.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | CookieKey Name. |

#### Returns

[`Nullable`](interface_placedata._internal_.md#nullable)<`string`\>

- CookieValue.

#### Defined in

[src/utils/storage/cookie.ts:9](https://github.com/hitendrarao/location/blob/6f44bad/src/utils/storage/cookie.ts#L9)

___

### set

▸ **set**(`key`, `val`, `timeInDays`): `void`

Set cookie with given name and value for certain time in days.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | CookieKey Name. |
| `val` | `string` | - |
| `timeInDays` | `number` | Expiry Time in Days. |

#### Returns

`void`

#### Defined in

[src/utils/storage/cookie.ts:38](https://github.com/hitendrarao/location/blob/6f44bad/src/utils/storage/cookie.ts#L38)
