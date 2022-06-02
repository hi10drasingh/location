[my-webpack-project](../README.md) / [Exports](../modules.md) / [utils/http](../modules/utils_http.md) / [<internal\>](../modules/utils_http._internal_.md) / Body

# Interface: Body

[utils/http](../modules/utils_http.md).[<internal>](../modules/utils_http._internal_.md).Body

## Hierarchy

- **`Body`**

  ↳ [`Request`](utils_http._internal_.Request.md)

## Table of contents

### Properties

- [body](utils_http._internal_.Body.md#body)
- [bodyUsed](utils_http._internal_.Body.md#bodyused)

### Methods

- [arrayBuffer](utils_http._internal_.Body.md#arraybuffer)
- [blob](utils_http._internal_.Body.md#blob)
- [formData](utils_http._internal_.Body.md#formdata)
- [json](utils_http._internal_.Body.md#json)
- [text](utils_http._internal_.Body.md#text)

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
