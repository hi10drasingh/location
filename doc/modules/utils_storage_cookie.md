[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / utils/storage/cookie

# Module: utils/storage/cookie

## Table of contents

### Functions

- [get](utils_storage_cookie.md#get)
- [set](utils_storage_cookie.md#set)

## Functions

### get

▸ **get**(`key`): `unknown`

Get Value of a key from cookie store.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | CookieKey Name. |

#### Returns

`unknown`

- CookieValue.

#### Defined in

[src/utils/storage/cookie.ts:11](https://github.com/hitendrarao/location/blob/31fbd1f/src/utils/storage/cookie.ts#L11)

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

[src/utils/storage/cookie.ts:40](https://github.com/hitendrarao/location/blob/31fbd1f/src/utils/storage/cookie.ts#L40)
