[Droom Google Location Plugin - v1.0.15](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / HTMLAllCollection

# Interface: HTMLAllCollection

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).HTMLAllCollection

## Indexable

▪ [index: `number`]: [`Element`](../modules/input._internal_.md#element)

## Table of contents

### Properties

- [length](input._internal_.HTMLAllCollection.md#length)

### Methods

- [item](input._internal_.HTMLAllCollection.md#item)
- [namedItem](input._internal_.HTMLAllCollection.md#nameditem)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of elements in the collection.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5925

## Methods

### item

▸ **item**(`nameOrIndex?`): ``null`` \| [`Element`](../modules/input._internal_.md#element) \| [`HTMLCollection`](../modules/input._internal_.md#htmlcollection)

Returns the item with index index from the collection (determined by tree order).

#### Parameters

| Name | Type |
| :------ | :------ |
| `nameOrIndex?` | `string` |

#### Returns

``null`` \| [`Element`](../modules/input._internal_.md#element) \| [`HTMLCollection`](../modules/input._internal_.md#htmlcollection)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5927

___

### namedItem

▸ **namedItem**(`name`): ``null`` \| [`Element`](../modules/input._internal_.md#element) \| [`HTMLCollection`](../modules/input._internal_.md#htmlcollection)

Returns the item with ID or name name from the collection.

If there are multiple matching items, then an HTMLCollection object containing all those elements is returned.

Only button, form, iframe, input, map, meta, object, select, and textarea elements can have a name for the purpose of this method; their name is given by the value of their name attribute.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`Element`](../modules/input._internal_.md#element) \| [`HTMLCollection`](../modules/input._internal_.md#htmlcollection)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5935
