[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / FileSystemDirectoryEntry

# Interface: FileSystemDirectoryEntry

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).FileSystemDirectoryEntry

## Hierarchy

- [`FileSystemEntry`](../modules/input._internal_.md#filesystementry)

  ↳ **`FileSystemDirectoryEntry`**

## Table of contents

### Properties

- [filesystem](input._internal_.FileSystemDirectoryEntry.md#filesystem)
- [fullPath](input._internal_.FileSystemDirectoryEntry.md#fullpath)
- [isDirectory](input._internal_.FileSystemDirectoryEntry.md#isdirectory)
- [isFile](input._internal_.FileSystemDirectoryEntry.md#isfile)
- [name](input._internal_.FileSystemDirectoryEntry.md#name)

### Methods

- [createReader](input._internal_.FileSystemDirectoryEntry.md#createreader)
- [getDirectory](input._internal_.FileSystemDirectoryEntry.md#getdirectory)
- [getFile](input._internal_.FileSystemDirectoryEntry.md#getfile)
- [getParent](input._internal_.FileSystemDirectoryEntry.md#getparent)

## Properties

### filesystem

• `Readonly` **filesystem**: [`FileSystem`](../modules/input._internal_.md#filesystem)

#### Inherited from

FileSystemEntry.filesystem

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5273

___

### fullPath

• `Readonly` **fullPath**: `string`

#### Inherited from

FileSystemEntry.fullPath

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5274

___

### isDirectory

• `Readonly` **isDirectory**: `boolean`

#### Inherited from

FileSystemEntry.isDirectory

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5275

___

### isFile

• `Readonly` **isFile**: `boolean`

#### Inherited from

FileSystemEntry.isFile

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5276

___

### name

• `Readonly` **name**: `string`

#### Inherited from

FileSystemEntry.name

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5277

## Methods

### createReader

▸ **createReader**(): [`FileSystemDirectoryReader`](../modules/input._internal_.md#filesystemdirectoryreader)

#### Returns

[`FileSystemDirectoryReader`](../modules/input._internal_.md#filesystemdirectoryreader)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5239

___

### getDirectory

▸ **getDirectory**(`path?`, `options?`, `successCallback?`, `errorCallback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | ``null`` \| `string` |
| `options?` | [`FileSystemFlags`](input._internal_.FileSystemFlags.md) |
| `successCallback?` | [`FileSystemEntryCallback`](input._internal_.FileSystemEntryCallback.md) |
| `errorCallback?` | [`ErrorCallback`](input._internal_.ErrorCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5240

___

### getFile

▸ **getFile**(`path?`, `options?`, `successCallback?`, `errorCallback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path?` | ``null`` \| `string` |
| `options?` | [`FileSystemFlags`](input._internal_.FileSystemFlags.md) |
| `successCallback?` | [`FileSystemEntryCallback`](input._internal_.FileSystemEntryCallback.md) |
| `errorCallback?` | [`ErrorCallback`](input._internal_.ErrorCallback.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5241

___

### getParent

▸ **getParent**(`successCallback?`, `errorCallback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `successCallback?` | [`FileSystemEntryCallback`](input._internal_.FileSystemEntryCallback.md) |
| `errorCallback?` | [`ErrorCallback`](input._internal_.ErrorCallback.md) |

#### Returns

`void`

#### Inherited from

FileSystemEntry.getParent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5278
