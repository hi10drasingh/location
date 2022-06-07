[Droom Google Location Plugin - v1.0.16](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / HTMLCollectionOf

# Interface: HTMLCollectionOf<T\>

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).HTMLCollectionOf

## Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Element`](../modules/input._internal_.md#element) |

## Hierarchy

- [`HTMLCollectionBase`](input._internal_.HTMLCollectionBase.md)

  ↳ **`HTMLCollectionOf`**

  ↳↳ [`HTMLOptionsCollection`](input._internal_.HTMLOptionsCollection.md)

## Indexable

▪ [index: `number`]: `T`

## Table of contents

### Properties

- [length](input._internal_.HTMLCollectionOf.md#length)

### Methods

- [item](input._internal_.HTMLCollectionOf.md#item)
- [namedItem](input._internal_.HTMLCollectionOf.md#nameditem)

## Properties

### length

• `Readonly` **length**: `number`

Sets or retrieves the number of objects in a collection.

#### Inherited from

[HTMLCollectionBase](input._internal_.HTMLCollectionBase.md).[length](input._internal_.HTMLCollectionBase.md#length)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6188

## Methods

### item

▸ **item**(`index`): ``null`` \| `T`

Retrieves an object from various collections.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `T`

#### Overrides

[HTMLCollectionBase](input._internal_.HTMLCollectionBase.md).[item](input._internal_.HTMLCollectionBase.md#item)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6205

___

### namedItem

▸ **namedItem**(`name`): ``null`` \| `T`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| `T`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6206
