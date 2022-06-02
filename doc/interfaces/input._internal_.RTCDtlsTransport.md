[my-webpack-project](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / RTCDtlsTransport

# Interface: RTCDtlsTransport

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).RTCDtlsTransport

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`RTCDtlsTransport`**

## Table of contents

### Properties

- [iceTransport](input._internal_.RTCDtlsTransport.md#icetransport)
- [onerror](input._internal_.RTCDtlsTransport.md#onerror)
- [onstatechange](input._internal_.RTCDtlsTransport.md#onstatechange)
- [state](input._internal_.RTCDtlsTransport.md#state)

### Methods

- [addEventListener](input._internal_.RTCDtlsTransport.md#addeventlistener)
- [dispatchEvent](input._internal_.RTCDtlsTransport.md#dispatchevent)
- [getRemoteCertificates](input._internal_.RTCDtlsTransport.md#getremotecertificates)
- [removeEventListener](input._internal_.RTCDtlsTransport.md#removeeventlistener)

## Properties

### iceTransport

• `Readonly` **iceTransport**: [`RTCIceTransport`](../modules/input._internal_.md#rtcicetransport)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11116

___

### onerror

• **onerror**: ``null`` \| (`this`: [`RTCDtlsTransport`](../modules/input._internal_.md#rtcdtlstransport), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11117

___

### onstatechange

• **onstatechange**: ``null`` \| (`this`: [`RTCDtlsTransport`](../modules/input._internal_.md#rtcdtlstransport), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11118

___

### state

• `Readonly` **state**: [`RTCDtlsTransportState`](../modules/input._internal_.md#rtcdtlstransportstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11119

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RTCDtlsTransportEventMap`](input._internal_.RTCDtlsTransportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RTCDtlsTransport`](../modules/input._internal_.md#rtcdtlstransport), `ev`: [`RTCDtlsTransportEventMap`](input._internal_.RTCDtlsTransportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11121

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

node_modules/typescript/lib/lib.dom.d.ts:11122

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

### getRemoteCertificates

▸ **getRemoteCertificates**(): `ArrayBuffer`[]

#### Returns

`ArrayBuffer`[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11120

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RTCDtlsTransportEventMap`](input._internal_.RTCDtlsTransportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RTCDtlsTransport`](../modules/input._internal_.md#rtcdtlstransport), `ev`: [`RTCDtlsTransportEventMap`](input._internal_.RTCDtlsTransportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11123

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

node_modules/typescript/lib/lib.dom.d.ts:11124
