[Droom Google Location Plugin - v1.0.16](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / File

# Interface: File

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).File

Provides information about files and allows JavaScript in a web page to access their content.

## Hierarchy

- `Blob`

  ↳ **`File`**

## Table of contents

### Properties

- [lastModified](input._internal_.File.md#lastmodified)
- [name](input._internal_.File.md#name)
- [size](input._internal_.File.md#size)
- [type](input._internal_.File.md#type)
- [webkitRelativePath](input._internal_.File.md#webkitrelativepath)

### Methods

- [arrayBuffer](input._internal_.File.md#arraybuffer)
- [slice](input._internal_.File.md#slice)
- [stream](input._internal_.File.md#stream)
- [text](input._internal_.File.md#text)

## Properties

### lastModified

• `Readonly` **lastModified**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5164

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5165

___

### size

• `Readonly` **size**: `number`

#### Inherited from

Blob.size

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2477

___

### type

• `Readonly` **type**: `string`

#### Inherited from

Blob.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2478

___

### webkitRelativePath

• `Readonly` **webkitRelativePath**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5166

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

Blob.arrayBuffer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2479

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

Blob.arrayBuffer

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:9

___

### slice

▸ **slice**(`start?`, `end?`, `contentType?`): `Blob`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |
| `contentType?` | `string` |

#### Returns

`Blob`

#### Inherited from

Blob.slice

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2480

▸ **slice**(`start?`, `end?`, `contentType?`): `Blob`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start?` | `number` |
| `end?` | `number` |
| `contentType?` | `string` |

#### Returns

`Blob`

#### Inherited from

Blob.slice

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:10

___

### stream

▸ **stream**(): [`ReadableStream`](../modules/input._internal_.md#readablestream)<`Uint8Array`\>

#### Returns

[`ReadableStream`](../modules/input._internal_.md#readablestream)<`Uint8Array`\>

#### Inherited from

Blob.stream

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2481

▸ **stream**(): [`ReadableStream`](input._internal_.ReadableStream-1.md)

#### Returns

[`ReadableStream`](input._internal_.ReadableStream-1.md)

#### Inherited from

Blob.stream

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:11

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

Blob.text

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2482

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

Blob.text

#### Defined in

node_modules/@types/node/stream/consumers.d.ts:12
