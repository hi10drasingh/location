[Droom Google Location Plugin - v1.0.6](../README.md) / [Exports](../modules.md) / utils/storage/ls

# Module: utils/storage/ls

## Table of contents

### Functions

- [get](utils_storage_ls.md#get)
- [set](utils_storage_ls.md#set)

## Functions

### get

▸ **get**(`key`): `unknown`

Get Value of a key from Local Storage.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | LSKey Name. |

#### Returns

`unknown`

- LSValue.

#### Defined in

[src/utils/storage/ls.ts:73](https://github.com/hitendrarao/location/blob/0bcac8f/src/utils/storage/ls.ts#L73)

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

[src/utils/storage/ls.ts:57](https://github.com/hitendrarao/location/blob/0bcac8f/src/utils/storage/ls.ts#L57)
