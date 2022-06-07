[Droom Google Location Plugin - v1.0.13](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / CacheStorage

# Interface: CacheStorage

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).CacheStorage

The storage for Cache objects.
Available only in secure contexts.

## Table of contents

### Methods

- [delete](input._internal_.CacheStorage.md#delete)
- [has](input._internal_.CacheStorage.md#has)
- [keys](input._internal_.CacheStorage.md#keys)
- [match](input._internal_.CacheStorage.md#match)
- [open](input._internal_.CacheStorage.md#open)

## Methods

### delete

▸ **delete**(`cacheName`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheName` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3350

___

### has

▸ **has**(`cacheName`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheName` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3351

___

### keys

▸ **keys**(): `Promise`<`string`[]\>

#### Returns

`Promise`<`string`[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3352

___

### match

▸ **match**(`request`, `options?`): `Promise`<`undefined` \| [`Response`](../modules/input._internal_.md#response)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestInfo`](../modules/input._internal_.md#requestinfo) \| `URL` |
| `options?` | [`MultiCacheQueryOptions`](input._internal_.MultiCacheQueryOptions.md) |

#### Returns

`Promise`<`undefined` \| [`Response`](../modules/input._internal_.md#response)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3353

___

### open

▸ **open**(`cacheName`): `Promise`<[`Cache`](../modules/input._internal_.md#cache)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `cacheName` | `string` |

#### Returns

`Promise`<[`Cache`](../modules/input._internal_.md#cache)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3354
