[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / MIDIOutput

# Interface: MIDIOutput

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).MIDIOutput

Available only in secure contexts.

## Hierarchy

- [`MIDIPort`](../modules/input._internal_.md#midiport)

  ↳ **`MIDIOutput`**

## Table of contents

### Properties

- [connection](input._internal_.MIDIOutput.md#connection)
- [id](input._internal_.MIDIOutput.md#id)
- [manufacturer](input._internal_.MIDIOutput.md#manufacturer)
- [name](input._internal_.MIDIOutput.md#name)
- [onstatechange](input._internal_.MIDIOutput.md#onstatechange)
- [state](input._internal_.MIDIOutput.md#state)
- [type](input._internal_.MIDIOutput.md#type)
- [version](input._internal_.MIDIOutput.md#version)

### Methods

- [addEventListener](input._internal_.MIDIOutput.md#addeventlistener)
- [close](input._internal_.MIDIOutput.md#close)
- [dispatchEvent](input._internal_.MIDIOutput.md#dispatchevent)
- [open](input._internal_.MIDIOutput.md#open)
- [removeEventListener](input._internal_.MIDIOutput.md#removeeventlistener)
- [send](input._internal_.MIDIOutput.md#send)

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
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MIDIOutput`](../modules/input._internal_.md#midioutput), `ev`: [`MIDIPortEventMap`](input._internal_.MIDIPortEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

MIDIPort.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9178

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

node_modules/typescript/lib/lib.dom.d.ts:9179

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
| `K` | extends ``"statechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MIDIOutput`](../modules/input._internal_.md#midioutput), `ev`: [`MIDIPortEventMap`](input._internal_.MIDIPortEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

MIDIPort.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9180

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

node_modules/typescript/lib/lib.dom.d.ts:9181

___

### send

▸ **send**(`data`, `timestamp?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `number`[] |
| `timestamp?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9177
