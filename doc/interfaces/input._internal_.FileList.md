[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / FileList

# Interface: FileList

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).FileList

An object of this type is returned by the files property of the HTML <input> element; this lets you access the list of files selected with the <input type="file"> element. It's also used for a list of files dropped into web content when using the drag and drop API; see the DataTransfer object for details on this usage.

## Indexable

▪ [index: `number`]: [`File`](../modules/input._internal_.md#file)

## Table of contents

### Properties

- [length](input._internal_.FileList.md#length)

### Methods

- [item](input._internal_.FileList.md#item)

## Properties

### length

• `Readonly` **length**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5176

## Methods

### item

▸ **item**(`index`): ``null`` \| [`File`](../modules/input._internal_.md#file)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`File`](../modules/input._internal_.md#file)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5177
