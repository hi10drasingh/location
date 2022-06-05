[location-plugin](../README.md) / [Exports](../modules.md) / utils/storage/interface

# Module: utils/storage/interface

## Table of contents

### Interfaces

- [IStore](../interfaces/utils_storage_interface.IStore.md)

### Type Aliases

- [IStoreGet](utils_storage_interface.md#istoreget)
- [IStoreSet](utils_storage_interface.md#istoreset)

## Type Aliases

### IStoreGet

Ƭ **IStoreGet**: (`key`: `string`) => [`Nullable`](global.md#nullable)<`string`\>

#### Type declaration

▸ (`key`): [`Nullable`](global.md#nullable)<`string`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

##### Returns

[`Nullable`](global.md#nullable)<`string`\>

#### Defined in

[utils/storage/interface.ts:1](https://github.com/hitendrarao/location/blob/d401e71/src/utils/storage/interface.ts#L1)

___

### IStoreSet

Ƭ **IStoreSet**: (`key`: `string`, `val`: `string`, `timeInDays`: `number`) => `void`

#### Type declaration

▸ (`key`, `val`, `timeInDays`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `val` | `string` |
| `timeInDays` | `number` |

##### Returns

`void`

#### Defined in

[utils/storage/interface.ts:2](https://github.com/hitendrarao/location/blob/d401e71/src/utils/storage/interface.ts#L2)
