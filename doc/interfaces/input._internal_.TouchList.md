[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / TouchList

# Interface: TouchList

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).TouchList

A list of contact points on a touch surface. For example, if the user has three fingers on the touch surface (such as a screen or trackpad), the corresponding TouchList object would have one Touch object for each finger, for a total of three entries.

## Indexable

▪ [index: `number`]: [`Touch`](../modules/input._internal_.md#touch)

## Table of contents

### Properties

- [length](input._internal_.TouchList.md#length)

### Methods

- [item](input._internal_.TouchList.md#item)

## Properties

### length

• `Readonly` **length**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14250

## Methods

### item

▸ **item**(`index`): ``null`` \| [`Touch`](../modules/input._internal_.md#touch)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`Touch`](../modules/input._internal_.md#touch)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14251
