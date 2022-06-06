[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / MIDIPort

# Interface: MIDIPort

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).MIDIPort

Available only in secure contexts.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`MIDIPort`**

## Table of contents

### Properties

- [connection](input._internal_.MIDIPort.md#connection)
- [id](input._internal_.MIDIPort.md#id)
- [manufacturer](input._internal_.MIDIPort.md#manufacturer)
- [name](input._internal_.MIDIPort.md#name)
- [onstatechange](input._internal_.MIDIPort.md#onstatechange)
- [state](input._internal_.MIDIPort.md#state)
- [type](input._internal_.MIDIPort.md#type)
- [version](input._internal_.MIDIPort.md#version)

### Methods

- [addEventListener](input._internal_.MIDIPort.md#addeventlistener)
- [close](input._internal_.MIDIPort.md#close)
- [dispatchEvent](input._internal_.MIDIPort.md#dispatchevent)
- [open](input._internal_.MIDIPort.md#open)
- [removeEventListener](input._internal_.MIDIPort.md#removeeventlistener)

## Properties

### connection

• `Readonly` **connection**: [`MIDIPortConnectionState`](../modules/input._internal_.md#midiportconnectionstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9205

___

### id

• `Readonly` **id**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9206

___

### manufacturer

• `Readonly` **manufacturer**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9207

___

### name

• `Readonly` **name**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9208

___

### onstatechange

• **onstatechange**: ``null`` \| (`this`: [`MIDIPort`](../modules/input._internal_.md#midiport), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9209

___

### state

• `Readonly` **state**: [`MIDIPortDeviceState`](../modules/input._internal_.md#midiportdevicestate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9210

___

### type

• `Readonly` **type**: [`MIDIPortType`](../modules/input._internal_.md#midiporttype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9211

___

### version

• `Readonly` **version**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9212

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MIDIPort`](../modules/input._internal_.md#midiport), `ev`: [`MIDIPortEventMap`](input._internal_.MIDIPortEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9215

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

node_modules/typescript/lib/lib.dom.d.ts:9216

___

### close

▸ **close**(): `Promise`<[`MIDIPort`](../modules/input._internal_.md#midiport)\>

#### Returns

`Promise`<[`MIDIPort`](../modules/input._internal_.md#midiport)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9213

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

### open

▸ **open**(): `Promise`<[`MIDIPort`](../modules/input._internal_.md#midiport)\>

#### Returns

`Promise`<[`MIDIPort`](../modules/input._internal_.md#midiport)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9214

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MIDIPort`](../modules/input._internal_.md#midiport), `ev`: [`MIDIPortEventMap`](input._internal_.MIDIPortEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9217

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

node_modules/typescript/lib/lib.dom.d.ts:9218
