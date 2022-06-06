[Droom Google Location Plugin - v1.0.6](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / FileSystemDirectoryHandle

# Interface: FileSystemDirectoryHandle

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).FileSystemDirectoryHandle

Available only in secure contexts.

## Hierarchy

- [`FileSystemHandle`](../modules/input._internal_.md#filesystemhandle)

  ↳ **`FileSystemDirectoryHandle`**

## Table of contents

### Properties

- [kind](input._internal_.FileSystemDirectoryHandle.md#kind)
- [name](input._internal_.FileSystemDirectoryHandle.md#name)

### Methods

- [getDirectoryHandle](input._internal_.FileSystemDirectoryHandle.md#getdirectoryhandle)
- [getFileHandle](input._internal_.FileSystemDirectoryHandle.md#getfilehandle)
- [isSameEntry](input._internal_.FileSystemDirectoryHandle.md#issameentry)
- [removeEntry](input._internal_.FileSystemDirectoryHandle.md#removeentry)
- [resolve](input._internal_.FileSystemDirectoryHandle.md#resolve)

## Properties

### kind

• `Readonly` **kind**: ``"directory"``

#### Overrides

FileSystemHandle.kind

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5251

___

### name

• `Readonly` **name**: `string`

#### Inherited from

FileSystemHandle.name

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5309

## Methods

### getDirectoryHandle

▸ **getDirectoryHandle**(`name`, `options?`): `Promise`<[`FileSystemDirectoryHandle`](../modules/input._internal_.md#filesystemdirectoryhandle)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | [`FileSystemGetDirectoryOptions`](input._internal_.FileSystemGetDirectoryOptions.md) |

#### Returns

`Promise`<[`FileSystemDirectoryHandle`](../modules/input._internal_.md#filesystemdirectoryhandle)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5252

___

### getFileHandle

▸ **getFileHandle**(`name`, `options?`): `Promise`<[`FileSystemFileHandle`](../modules/input._internal_.md#filesystemfilehandle)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | [`FileSystemGetFileOptions`](input._internal_.FileSystemGetFileOptions.md) |

#### Returns

`Promise`<[`FileSystemFileHandle`](../modules/input._internal_.md#filesystemfilehandle)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5253

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

___

### removeEntry

▸ **removeEntry**(`name`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | [`FileSystemRemoveOptions`](input._internal_.FileSystemRemoveOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5254

___

### resolve

▸ **resolve**(`possibleDescendant`): `Promise`<``null`` \| `string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `possibleDescendant` | [`FileSystemHandle`](../modules/input._internal_.md#filesystemhandle) |

#### Returns

`Promise`<``null`` \| `string`[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5255
