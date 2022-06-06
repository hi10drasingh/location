[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / FontFaceSet

# Interface: FontFaceSet

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).FontFaceSet

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`FontFaceSet`**

## Table of contents

### Properties

- [onloading](input._internal_.FontFaceSet.md#onloading)
- [onloadingdone](input._internal_.FontFaceSet.md#onloadingdone)
- [onloadingerror](input._internal_.FontFaceSet.md#onloadingerror)
- [ready](input._internal_.FontFaceSet.md#ready)
- [status](input._internal_.FontFaceSet.md#status)

### Methods

- [addEventListener](input._internal_.FontFaceSet.md#addeventlistener)
- [check](input._internal_.FontFaceSet.md#check)
- [dispatchEvent](input._internal_.FontFaceSet.md#dispatchevent)
- [forEach](input._internal_.FontFaceSet.md#foreach)
- [load](input._internal_.FontFaceSet.md#load)
- [removeEventListener](input._internal_.FontFaceSet.md#removeeventlistener)

## Properties

### onloading

• **onloading**: ``null`` \| (`this`: [`FontFaceSet`](../modules/input._internal_.md#fontfaceset), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5358

___

### onloadingdone

• **onloadingdone**: ``null`` \| (`this`: [`FontFaceSet`](../modules/input._internal_.md#fontfaceset), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5359

___

### onloadingerror

• **onloadingerror**: ``null`` \| (`this`: [`FontFaceSet`](../modules/input._internal_.md#fontfaceset), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5360

___

### ready

• `Readonly` **ready**: `Promise`<[`FontFaceSet`](../modules/input._internal_.md#fontfaceset)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5361

___

### status

• `Readonly` **status**: [`FontFaceSetLoadStatus`](../modules/input._internal_.md#fontfacesetloadstatus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5362

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`FontFaceSetEventMap`](input._internal_.FontFaceSetEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`FontFaceSet`](../modules/input._internal_.md#fontfaceset), `ev`: [`FontFaceSetEventMap`](input._internal_.FontFaceSetEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5366

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/input._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5367

___

### check

▸ **check**(`font`, `text?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `font` | `string` |
| `text?` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5363

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/input._internal_.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: [`FontFace`](../modules/input._internal_.md#fontface), `key`: [`FontFace`](../modules/input._internal_.md#fontface), `parent`: [`FontFaceSet`](../modules/input._internal_.md#fontfaceset)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5365

___

### load

▸ **load**(`font`, `text?`): `Promise`<[`FontFace`](../modules/input._internal_.md#fontface)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `font` | `string` |
| `text?` | `string` |

#### Returns

`Promise`<[`FontFace`](../modules/input._internal_.md#fontface)[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5364

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`FontFaceSetEventMap`](input._internal_.FontFaceSetEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`FontFaceSet`](../modules/input._internal_.md#fontfaceset), `ev`: [`FontFaceSetEventMap`](input._internal_.FontFaceSetEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5368

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/input._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5369
