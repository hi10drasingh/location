[Droom Google Location Plugin - v1.0.13](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / LockManager

# Interface: LockManager

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).LockManager

Available only in secure contexts.

## Table of contents

### Methods

- [query](input._internal_.LockManager.md#query)
- [request](input._internal_.LockManager.md#request)

## Methods

### query

▸ **query**(): `Promise`<[`LockManagerSnapshot`](input._internal_.LockManagerSnapshot.md)\>

#### Returns

`Promise`<[`LockManagerSnapshot`](input._internal_.LockManagerSnapshot.md)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9096

___

### request

▸ **request**(`name`, `callback`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `callback` | [`LockGrantedCallback`](input._internal_.LockGrantedCallback.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9097

▸ **request**(`name`, `options`, `callback`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options` | [`LockOptions`](input._internal_.LockOptions.md) |
| `callback` | [`LockGrantedCallback`](input._internal_.LockGrantedCallback.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9098
