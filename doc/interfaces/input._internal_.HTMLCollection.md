[Droom Google Location Plugin - v1.0.16](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / HTMLCollection

# Interface: HTMLCollection

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).HTMLCollection

## Hierarchy

- [`HTMLCollectionBase`](input._internal_.HTMLCollectionBase.md)

  ↳ **`HTMLCollection`**

## Table of contents

### Properties

- [length](input._internal_.HTMLCollection.md#length)

### Methods

- [item](input._internal_.HTMLCollection.md#item)
- [namedItem](input._internal_.HTMLCollection.md#nameditem)

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

▸ **item**(`index`): ``null`` \| [`Element`](../modules/input._internal_.md#element)

Retrieves an object from various collections.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`Element`](../modules/input._internal_.md#element)

#### Inherited from

[HTMLCollectionBase](input._internal_.HTMLCollectionBase.md).[item](input._internal_.HTMLCollectionBase.md#item)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6190

___

### namedItem

▸ **namedItem**(`name`): ``null`` \| [`Element`](../modules/input._internal_.md#element)

Retrieves a select object or an object from an options collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`Element`](../modules/input._internal_.md#element)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6196
