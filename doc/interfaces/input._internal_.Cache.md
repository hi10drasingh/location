[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / Cache

# Interface: Cache

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).Cache

Provides a storage mechanism for Request / Response object pairs that are cached, for example as part of the ServiceWorker life cycle. Note that the Cache interface is exposed to windowed scopes as well as workers. You don't have to use it in conjunction with service workers, even though it is defined in the service worker spec.
Available only in secure contexts.

## Table of contents

### Methods

- [add](input._internal_.Cache.md#add)
- [addAll](input._internal_.Cache.md#addall)
- [delete](input._internal_.Cache.md#delete)
- [keys](input._internal_.Cache.md#keys)
- [match](input._internal_.Cache.md#match)
- [matchAll](input._internal_.Cache.md#matchall)
- [put](input._internal_.Cache.md#put)

## Methods

### add

▸ **add**(`request`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestInfo`](../modules/input._internal_.md#requestinfo) \| `URL` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3331

___

### addAll

▸ **addAll**(`requests`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `requests` | [`RequestInfo`](../modules/input._internal_.md#requestinfo)[] |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3332

___

### delete

▸ **delete**(`request`, `options?`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestInfo`](../modules/input._internal_.md#requestinfo) \| `URL` |
| `options?` | [`CacheQueryOptions`](input._internal_.CacheQueryOptions.md) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3333

___

### keys

▸ **keys**(`request?`, `options?`): `Promise`<readonly [`Request`](../modules/input._internal_.md#request)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`RequestInfo`](../modules/input._internal_.md#requestinfo) \| `URL` |
| `options?` | [`CacheQueryOptions`](input._internal_.CacheQueryOptions.md) |

#### Returns

`Promise`<readonly [`Request`](../modules/input._internal_.md#request)[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3334

___

### match

▸ **match**(`request`, `options?`): `Promise`<`undefined` \| [`Response`](../modules/input._internal_.md#response)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestInfo`](../modules/input._internal_.md#requestinfo) \| `URL` |
| `options?` | [`CacheQueryOptions`](input._internal_.CacheQueryOptions.md) |

#### Returns

`Promise`<`undefined` \| [`Response`](../modules/input._internal_.md#response)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3335

___

### matchAll

▸ **matchAll**(`request?`, `options?`): `Promise`<readonly [`Response`](../modules/input._internal_.md#response)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request?` | [`RequestInfo`](../modules/input._internal_.md#requestinfo) \| `URL` |
| `options?` | [`CacheQueryOptions`](input._internal_.CacheQueryOptions.md) |

#### Returns

`Promise`<readonly [`Response`](../modules/input._internal_.md#response)[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3336

___

### put

▸ **put**(`request`, `response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `request` | [`RequestInfo`](../modules/input._internal_.md#requestinfo) \| `URL` |
| `response` | [`Response`](../modules/input._internal_.md#response) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3337
