[Droom Google Location Plugin - v1.0.6](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / DOMStringList

# Interface: DOMStringList

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).DOMStringList

A type returned by some APIs which contains a list of DOMString (strings).

## Indexable

▪ [index: `number`]: `string`

## Table of contents

### Properties

- [length](input._internal_.DOMStringList.md#length)

### Methods

- [contains](input._internal_.DOMStringList.md#contains)
- [item](input._internal_.DOMStringList.md#item)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of strings in strings.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4074

## Methods

### contains

▸ **contains**(`string`): `boolean`

Returns true if strings contains string, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `string` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4076

___

### item

▸ **item**(`index`): ``null`` \| `string`

Returns the string with index index from strings.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4078
