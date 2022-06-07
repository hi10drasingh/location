[Droom Google Location Plugin - v1.0.13](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / MIDIInput

# Interface: MIDIInput

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).MIDIInput

Available only in secure contexts.

## Hierarchy

- [`MIDIPort`](../modules/input._internal_.md#midiport)

  ↳ **`MIDIInput`**

## Table of contents

### Properties

- [connection](input._internal_.MIDIInput.md#connection)
- [id](input._internal_.MIDIInput.md#id)
- [manufacturer](input._internal_.MIDIInput.md#manufacturer)
- [name](input._internal_.MIDIInput.md#name)
- [onmidimessage](input._internal_.MIDIInput.md#onmidimessage)
- [onstatechange](input._internal_.MIDIInput.md#onstatechange)
- [state](input._internal_.MIDIInput.md#state)
- [type](input._internal_.MIDIInput.md#type)
- [version](input._internal_.MIDIInput.md#version)

### Methods

- [addEventListener](input._internal_.MIDIInput.md#addeventlistener)
- [close](input._internal_.MIDIInput.md#close)
- [dispatchEvent](input._internal_.MIDIInput.md#dispatchevent)
- [open](input._internal_.MIDIInput.md#open)
- [removeEventListener](input._internal_.MIDIInput.md#removeeventlistener)

## Properties

### connection

• `Readonly` **connection**: [`MIDIPortConnectionState`](../modules/input._internal_.md#midiportconnectionstate)

#### Inherited from

MIDIPort.connection

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9205

___

### id

• `Readonly` **id**: `string`

#### Inherited from

MIDIPort.id

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9206

___

### manufacturer

• `Readonly` **manufacturer**: ``null`` \| `string`

#### Inherited from

MIDIPort.manufacturer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9207

___

### name

• `Readonly` **name**: ``null`` \| `string`

#### Inherited from

MIDIPort.name

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9208

___

### onmidimessage

• **onmidimessage**: ``null`` \| (`this`: [`MIDIInput`](../modules/input._internal_.md#midiinput), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9143

___

### onstatechange

• **onstatechange**: ``null`` \| (`this`: [`MIDIPort`](../modules/input._internal_.md#midiport), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Inherited from

MIDIPort.onstatechange

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9209

___

### state

• `Readonly` **state**: [`MIDIPortDeviceState`](../modules/input._internal_.md#midiportdevicestate)

#### Inherited from

MIDIPort.state

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9210

___

### type

• `Readonly` **type**: [`MIDIPortType`](../modules/input._internal_.md#midiporttype)

#### Inherited from

MIDIPort.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9211

___

### version

• `Readonly` **version**: ``null`` \| `string`

#### Inherited from

MIDIPort.version

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9212

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MIDIInputEventMap`](input._internal_.MIDIInputEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MIDIInput`](../modules/input._internal_.md#midiinput), `ev`: [`MIDIInputEventMap`](input._internal_.MIDIInputEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

MIDIPort.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9144

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

MIDIPort.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9145

___

### close

▸ **close**(): `Promise`<[`MIDIPort`](../modules/input._internal_.md#midiport)\>

#### Returns

`Promise`<[`MIDIPort`](../modules/input._internal_.md#midiport)\>

#### Inherited from

MIDIPort.close

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

MIDIPort.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### open

▸ **open**(): `Promise`<[`MIDIPort`](../modules/input._internal_.md#midiport)\>

#### Returns

`Promise`<[`MIDIPort`](../modules/input._internal_.md#midiport)\>

#### Inherited from

MIDIPort.open

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9214

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MIDIInputEventMap`](input._internal_.MIDIInputEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MIDIInput`](../modules/input._internal_.md#midiinput), `ev`: [`MIDIInputEventMap`](input._internal_.MIDIInputEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

MIDIPort.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9146

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

MIDIPort.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9147
