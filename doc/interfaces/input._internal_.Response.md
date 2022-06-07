[Droom Google Location Plugin - v1.0.13](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / Response

# Interface: Response

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).Response

This Fetch API interface represents the response to a request.

## Hierarchy

- [`Body`](input._internal_.Body.md)

  ↳ **`Response`**

## Table of contents

### Properties

- [body](input._internal_.Response.md#body)
- [bodyUsed](input._internal_.Response.md#bodyused)
- [headers](input._internal_.Response.md#headers)
- [ok](input._internal_.Response.md#ok)
- [redirected](input._internal_.Response.md#redirected)
- [status](input._internal_.Response.md#status)
- [statusText](input._internal_.Response.md#statustext)
- [type](input._internal_.Response.md#type)
- [url](input._internal_.Response.md#url)

### Methods

- [arrayBuffer](input._internal_.Response.md#arraybuffer)
- [blob](input._internal_.Response.md#blob)
- [clone](input._internal_.Response.md#clone)
- [formData](input._internal_.Response.md#formdata)
- [json](input._internal_.Response.md#json)
- [text](input._internal_.Response.md#text)

## Properties

### body

• `Readonly` **body**: ``null`` \| [`ReadableStream`](../modules/input._internal_.md#readablestream)<`Uint8Array`\>

#### Inherited from

[Body](input._internal_.Body.md).[body](input._internal_.Body.md#body)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2501

___

### bodyUsed

• `Readonly` **bodyUsed**: `boolean`

#### Inherited from

[Body](input._internal_.Body.md).[bodyUsed](input._internal_.Body.md#bodyused)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2502

___

### headers

• `Readonly` **headers**: [`Headers`](../modules/input._internal_.md#headers)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11617

___

### ok

• `Readonly` **ok**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11618

___

### redirected

• `Readonly` **redirected**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11619

___

### status

• `Readonly` **status**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11620

___

### statusText

• `Readonly` **statusText**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11621

___

### type

• `Readonly` **type**: [`ResponseType`](../modules/input._internal_.md#responsetype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11622

___

### url

• `Readonly` **url**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11623

## Methods

### arrayBuffer

▸ **arrayBuffer**(): `Promise`<`ArrayBuffer`\>

#### Returns

`Promise`<`ArrayBuffer`\>

#### Inherited from

[Body](input._internal_.Body.md).[arrayBuffer](input._internal_.Body.md#arraybuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2503

___

### blob

▸ **blob**(): `Promise`<`Blob`\>

#### Returns

`Promise`<`Blob`\>

#### Inherited from

[Body](input._internal_.Body.md).[blob](input._internal_.Body.md#blob)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2504

___

### clone

▸ **clone**(): [`Response`](../modules/input._internal_.md#response)

#### Returns

[`Response`](../modules/input._internal_.md#response)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11624

___

### formData

▸ **formData**(): `Promise`<[`FormData`](../modules/input._internal_.md#formdata)\>

#### Returns

`Promise`<[`FormData`](../modules/input._internal_.md#formdata)\>

#### Inherited from

[Body](input._internal_.Body.md).[formData](input._internal_.Body.md#formdata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2505

___

### json

▸ **json**(): `Promise`<`any`\>

#### Returns

`Promise`<`any`\>

#### Inherited from

[Body](input._internal_.Body.md).[json](input._internal_.Body.md#json)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2506

___

### text

▸ **text**(): `Promise`<`string`\>

#### Returns

`Promise`<`string`\>

#### Inherited from

[Body](input._internal_.Body.md).[text](input._internal_.Body.md#text)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2507
