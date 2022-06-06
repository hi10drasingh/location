[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / AsyncIterableIterator

# Interface: AsyncIterableIterator<T\>

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).AsyncIterableIterator

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- [`AsyncIterator`](input._internal_.AsyncIterator.md)<`T`\>

  ↳ **`AsyncIterableIterator`**

## Table of contents

### Methods

- [[asyncIterator]](input._internal_.AsyncIterableIterator.md#[asynciterator])
- [next](input._internal_.AsyncIterableIterator.md#next)
- [return](input._internal_.AsyncIterableIterator.md#return)
- [throw](input._internal_.AsyncIterableIterator.md#throw)

## Methods

### [asyncIterator]

▸ **[asyncIterator]**(): [`AsyncIterableIterator`](input._internal_.AsyncIterableIterator.md)<`T`\>

#### Returns

[`AsyncIterableIterator`](input._internal_.AsyncIterableIterator.md)<`T`\>

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:44

___

### next

▸ **next**(...`args`): `Promise`<[`IteratorResult`](../modules/input._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [] \| [`undefined`] |

#### Returns

`Promise`<[`IteratorResult`](../modules/input._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Inherited from

[AsyncIterator](input._internal_.AsyncIterator.md).[next](input._internal_.AsyncIterator.md#next)

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:34

___

### return

▸ `Optional` **return**(`value?`): `Promise`<[`IteratorResult`](../modules/input._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `value?` | `any` |

#### Returns

`Promise`<[`IteratorResult`](../modules/input._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Inherited from

[AsyncIterator](input._internal_.AsyncIterator.md).[return](input._internal_.AsyncIterator.md#return)

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:35

___

### throw

▸ `Optional` **throw**(`e?`): `Promise`<[`IteratorResult`](../modules/input._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `e?` | `any` |

#### Returns

`Promise`<[`IteratorResult`](../modules/input._internal_.md#iteratorresult)<`T`, `any`\>\>

#### Inherited from

[AsyncIterator](input._internal_.AsyncIterator.md).[throw](input._internal_.AsyncIterator.md#throw)

#### Defined in

node_modules/typescript/lib/lib.es2018.asynciterable.d.ts:36
