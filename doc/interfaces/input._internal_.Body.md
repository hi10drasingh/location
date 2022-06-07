[Droom Google Location Plugin - v1.0.16](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / Body

# Interface: Body

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).Body

## Hierarchy

- **`Body`**

  ↳ [`Response`](input._internal_.Response.md)

  ↳ [`Request`](input._internal_.Request.md)

## Table of contents

### Properties

- [body](input._internal_.Body.md#body)
- [bodyUsed](input._internal_.Body.md#bodyused)

### Methods

- [arrayBuffer](input._internal_.Body.md#arraybuffer)
- [blob](input._internal_.Body.md#blob)
- [formData](input._internal_.Body.md#formdata)
- [json](input._internal_.Body.md#json)
- [text](input._internal_.Body.md#text)

## Properties

### body

• `Readonly` **body**: ``null`` \| [`ReadableStream`](../modules/input._internal_.md#readablestream)<`Uint8Array`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2501

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2502

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2503

___

### blob

▸ **blob**(): `Promise`<`Blob`\>

#### Returns

`Promise`<`Blob`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2504

___

### formData

▸ **formData**(): `Promise`<[`FormData`](../modules/input._internal_.md#formdata)\>

#### Returns

`Promise`<[`FormData`](../modules/input._internal_.md#formdata)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2505

___

### json

▸ **json**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2506

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2507
