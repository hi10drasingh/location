[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / HTMLFormControlsCollection

# Interface: HTMLFormControlsCollection

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).HTMLFormControlsCollection

A collection of HTML form control elements.

## Hierarchy

- [`HTMLCollectionBase`](input._internal_.HTMLCollectionBase.md)

  ↳ **`HTMLFormControlsCollection`**

## Table of contents

### Properties

- [length](input._internal_.HTMLFormControlsCollection.md#length)

### Methods

- [item](input._internal_.HTMLFormControlsCollection.md#item)
- [namedItem](input._internal_.HTMLFormControlsCollection.md#nameditem)

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

▸ **namedItem**(`name`): ``null`` \| [`Element`](../modules/input._internal_.md#element) \| [`RadioNodeList`](../modules/input._internal_.md#radionodelist)

Returns the item with ID or name name from the collection.

If there are multiple matching items, then a RadioNodeList object containing all those elements is returned.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`Element`](../modules/input._internal_.md#element) \| [`RadioNodeList`](../modules/input._internal_.md#radionodelist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6469
