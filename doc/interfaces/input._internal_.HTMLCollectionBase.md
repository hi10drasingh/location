[Droom Google Location Plugin - v1.0.8](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / HTMLCollectionBase

# Interface: HTMLCollectionBase

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).HTMLCollectionBase

A generic collection (array-like object similar to arguments) of elements (in document order) and offers methods and properties for selecting from the list.

## Hierarchy

- **`HTMLCollectionBase`**

  ↳ [`HTMLCollection`](input._internal_.HTMLCollection.md)

  ↳ [`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)

  ↳ [`HTMLFormControlsCollection`](input._internal_.HTMLFormControlsCollection.md)

## Indexable

▪ [index: `number`]: [`Element`](../modules/input._internal_.md#element)

## Table of contents

### Properties

- [length](input._internal_.HTMLCollectionBase.md#length)

### Methods

- [item](input._internal_.HTMLCollectionBase.md#item)

## Properties

### length

• `Readonly` **length**: `number`

Sets or retrieves the number of objects in a collection.

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

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6190
