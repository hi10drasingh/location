[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / DataTransferItemList

# Interface: DataTransferItemList

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).DataTransferItemList

A list of DataTransferItem objects representing items being dragged. During a drag operation, each DragEvent has a dataTransfer property and that property is a DataTransferItemList.

## Indexable

▪ [index: `number`]: [`DataTransferItem`](../modules/input._internal_.md#datatransferitem)

## Table of contents

### Properties

- [length](input._internal_.DataTransferItemList.md#length)

### Methods

- [add](input._internal_.DataTransferItemList.md#add)
- [clear](input._internal_.DataTransferItemList.md#clear)
- [remove](input._internal_.DataTransferItemList.md#remove)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of items in the drag data store.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4223

## Methods

### add

▸ **add**(`data`, `type`): ``null`` \| [`DataTransferItem`](../modules/input._internal_.md#datatransferitem)

Adds a new entry for the given data to the drag data store. If the data is plain text then a type string has to be provided also.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |
| `type` | `string` |

#### Returns

``null`` \| [`DataTransferItem`](../modules/input._internal_.md#datatransferitem)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4225

▸ **add**(`data`): ``null`` \| [`DataTransferItem`](../modules/input._internal_.md#datatransferitem)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`File`](../modules/input._internal_.md#file) |

#### Returns

``null`` \| [`DataTransferItem`](../modules/input._internal_.md#datatransferitem)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4226

___

### clear

▸ **clear**(): `void`

Removes all the entries in the drag data store.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4228

___

### remove

▸ **remove**(`index`): `void`

Removes the indexth entry in the drag data store.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4230
