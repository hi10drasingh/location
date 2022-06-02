[my-webpack-project](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / AsyncIterator

# Interface: AsyncIterator<T, TReturn, TNext\>

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).AsyncIterator

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | `T` |
| `TReturn` | `any` |
| `TNext` | `undefined` |

## Hierarchy

- **`AsyncIterator`**

  ↳ [`AsyncIterableIterator`](input._internal_.AsyncIterableIterator.md)

## Table of contents

### Methods

- [next](input._internal_.AsyncIterator.md#next)
- [return](input._internal_.AsyncIterator.md#return)
- [throw](input._internal_.AsyncIterator.md#throw)

## Methods

### next

▸ **next**(...`args`): `Promise`<[`IteratorResult`](../modules/input._internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`TNext`] |

#### Returns

`Promise`<[`IteratorResult`](../modules/input._internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:34

___

### return

▸ `Optional` **return**(`value?`): `Promise`<[`IteratorResult`](../modules/input._internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `TReturn` \| [`PromiseLike`](input._internal_.PromiseLike.md)<`TReturn`\> |

#### Returns

`Promise`<[`IteratorResult`](../modules/input._internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:35

___

### throw

▸ `Optional` **throw**(`e?`): `Promise`<[`IteratorResult`](../modules/input._internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`Promise`<[`IteratorResult`](../modules/input._internal_.md#iteratorresult)<`T`, `TReturn`\>\>

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:36
