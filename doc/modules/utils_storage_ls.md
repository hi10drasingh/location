[location-plugin](../README.md) / [Exports](../modules.md) / utils/storage/ls

# Module: utils/storage/ls

## Table of contents

### Functions

- [get](utils_storage_ls.md#get)
- [set](utils_storage_ls.md#set)

## Functions

### get

▸ **get**(`key`): [`Nullable`](global.md#nullable)<`string`\>

Get Value of a key from Local Storage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | LSKey Name. |

#### Returns

[`Nullable`](global.md#nullable)<`string`\>

- LSValue.

#### Defined in

[utils/storage/ls.ts:62](https://github.com/hitendrarao/location/blob/d401e71/src/utils/storage/ls.ts#L62)

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

[utils/storage/ls.ts:46](https://github.com/hitendrarao/location/blob/d401e71/src/utils/storage/ls.ts#L46)
