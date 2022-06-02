[my-webpack-project](../README.md) / [Exports](../modules.md) / utils/storage/ls

# Module: utils/storage/ls

## Table of contents

### Functions

- [get](utils_storage_ls.md#get)
- [set](utils_storage_ls.md#set)

## Functions

### get

▸ **get**(`key`): [`Nullable`](interface_placedata._internal_.md#nullable)<`string`\>

Get Value of a key from Local Storage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | LSKey Name. |

#### Returns

[`Nullable`](interface_placedata._internal_.md#nullable)<`string`\>

- LSValue.

#### Defined in

[src/utils/storage/ls.ts:62](https://github.com/hitendrarao/location/blob/6f44bad/src/utils/storage/ls.ts#L62)

___

### set

▸ **set**(`key`, `val`, `timeInDays`): `void`

Set data in LocalStorage with given key.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | LSKey Name. |
| `val` | `string` | LS Value. |
| `timeInDays` | `number` | Expiry Time in Days. |

#### Returns

`void`

#### Defined in

[src/utils/storage/ls.ts:46](https://github.com/hitendrarao/location/blob/6f44bad/src/utils/storage/ls.ts#L46)
