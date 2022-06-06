[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / RTCDTMFSender

# Interface: RTCDTMFSender

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).RTCDTMFSender

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`RTCDTMFSender`**

## Table of contents

### Properties

- [canInsertDTMF](input._internal_.RTCDTMFSender.md#caninsertdtmf)
- [ontonechange](input._internal_.RTCDTMFSender.md#ontonechange)
- [toneBuffer](input._internal_.RTCDTMFSender.md#tonebuffer)

### Methods

- [addEventListener](input._internal_.RTCDTMFSender.md#addeventlistener)
- [dispatchEvent](input._internal_.RTCDTMFSender.md#dispatchevent)
- [insertDTMF](input._internal_.RTCDTMFSender.md#insertdtmf)
- [removeEventListener](input._internal_.RTCDTMFSender.md#removeeventlistener)

## Properties

### canInsertDTMF

• `Readonly` **canInsertDTMF**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11033

___

### ontonechange

• **ontonechange**: ``null`` \| (`this`: [`RTCDTMFSender`](../modules/input._internal_.md#rtcdtmfsender), `ev`: [`RTCDTMFToneChangeEvent`](../modules/input._internal_.md#rtcdtmftonechangeevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11034

___

### toneBuffer

• `Readonly` **toneBuffer**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11035

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"tonechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RTCDTMFSender`](../modules/input._internal_.md#rtcdtmfsender), `ev`: [`RTCDTMFSenderEventMap`](input._internal_.RTCDTMFSenderEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11037

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

node_modules/typescript/lib/lib.dom.d.ts:11038

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

### insertDTMF

▸ **insertDTMF**(`tones`, `duration?`, `interToneGap?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `tones` | `string` |
| `duration?` | `number` |
| `interToneGap?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11036

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"tonechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RTCDTMFSender`](../modules/input._internal_.md#rtcdtmfsender), `ev`: [`RTCDTMFSenderEventMap`](input._internal_.RTCDTMFSenderEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11039

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

node_modules/typescript/lib/lib.dom.d.ts:11040
