[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / interface/storage

# Module: interface/storage

## Table of contents

### Interfaces

- [IStore](../interfaces/interface_storage.IStore.md)

### Type Aliases

- [IStoreGet](interface_storage.md#istoreget)
- [IStoreSet](interface_storage.md#istoreset)

## Type Aliases

### IStoreGet

Ƭ **IStoreGet**: (`key`: `string`) => [`default`](interface_nullable.md#default)<`unknown`\>

#### Type declaration

▸ (`key`): [`default`](interface_nullable.md#default)<`unknown`\>

Get value of key from cache store.

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

##### Returns

[`default`](interface_nullable.md#default)<`unknown`\>

#### Defined in

[src/interface/storage.ts:5](https://github.com/hitendrarao/location/blob/d9af338/src/interface/storage.ts#L5)

___

### IStoreSet

Ƭ **IStoreSet**: (`key`: `string`, `val`: `string`, `timeInDays`: `number`) => `void`

#### Type declaration

▸ (`key`, `val`, `timeInDays`): `void`

Set value to cache store for given key with expiry in days.

##### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `val` | `string` |
| `timeInDays` | `number` |

##### Returns

`void`

#### Defined in

[src/interface/storage.ts:9](https://github.com/hitendrarao/location/blob/d9af338/src/interface/storage.ts#L9)
