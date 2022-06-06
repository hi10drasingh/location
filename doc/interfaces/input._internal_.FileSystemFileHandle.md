[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / FileSystemFileHandle

# Interface: FileSystemFileHandle

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).FileSystemFileHandle

Available only in secure contexts.

## Hierarchy

- [`FileSystemHandle`](../modules/input._internal_.md#filesystemhandle)

  ↳ **`FileSystemFileHandle`**

## Table of contents

### Properties

- [kind](input._internal_.FileSystemFileHandle.md#kind)
- [name](input._internal_.FileSystemFileHandle.md#name)

### Methods

- [getFile](input._internal_.FileSystemFileHandle.md#getfile)
- [isSameEntry](input._internal_.FileSystemFileHandle.md#issameentry)

## Properties

### kind

• `Readonly` **kind**: ``"file"``

#### Overrides

FileSystemHandle.kind

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5297

___

### name

• `Readonly` **name**: `string`

#### Inherited from

FileSystemHandle.name

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5309

## Methods

### getFile

▸ **getFile**(): `Promise`<[`File`](../modules/input._internal_.md#file)\>

#### Returns

`Promise`<[`File`](../modules/input._internal_.md#file)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5298

___

### isSameEntry

▸ **isSameEntry**(`other`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`FileSystemHandle`](../modules/input._internal_.md#filesystemhandle) |

#### Returns

`Promise`<`boolean`\>

#### Inherited from

FileSystemHandle.isSameEntry

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5310
