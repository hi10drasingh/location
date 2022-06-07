[Droom Google Location Plugin - v1.0.16](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / DataTransferItem

# Interface: DataTransferItem

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).DataTransferItem

One drag data item. During a drag operation, each drag event has a dataTransfer property which contains a list of drag data items. Each item in the list is a DataTransferItem object.

## Table of contents

### Properties

- [kind](input._internal_.DataTransferItem.md#kind)
- [type](input._internal_.DataTransferItem.md#type)

### Methods

- [getAsFile](input._internal_.DataTransferItem.md#getasfile)
- [getAsString](input._internal_.DataTransferItem.md#getasstring)
- [webkitGetAsEntry](input._internal_.DataTransferItem.md#webkitgetasentry)

## Properties

### kind

• `Readonly` **kind**: `string`

Returns the drag data item kind, one of: "string", "file".

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4205

___

### type

• `Readonly` **type**: `string`

Returns the drag data item type string.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4207

## Methods

### getAsFile

▸ **getAsFile**(): ``null`` \| [`File`](../modules/input._internal_.md#file)

Returns a File object, if the drag data item kind is File.

#### Returns

``null`` \| [`File`](../modules/input._internal_.md#file)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4209

___

### getAsString

▸ **getAsString**(`callback`): `void`

Invokes the callback with the string data as the argument, if the drag data item kind is text.

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | ``null`` \| [`FunctionStringCallback`](input._internal_.FunctionStringCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4211

___

### webkitGetAsEntry

▸ **webkitGetAsEntry**(): ``null`` \| [`FileSystemEntry`](../modules/input._internal_.md#filesystementry)

#### Returns

``null`` \| [`FileSystemEntry`](../modules/input._internal_.md#filesystementry)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4212
