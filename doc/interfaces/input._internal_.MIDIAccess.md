[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / MIDIAccess

# Interface: MIDIAccess

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).MIDIAccess

Available only in secure contexts.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`MIDIAccess`**

## Table of contents

### Properties

- [inputs](input._internal_.MIDIAccess.md#inputs)
- [onstatechange](input._internal_.MIDIAccess.md#onstatechange)
- [outputs](input._internal_.MIDIAccess.md#outputs)
- [sysexEnabled](input._internal_.MIDIAccess.md#sysexenabled)

### Methods

- [addEventListener](input._internal_.MIDIAccess.md#addeventlistener)
- [dispatchEvent](input._internal_.MIDIAccess.md#dispatchevent)
- [removeEventListener](input._internal_.MIDIAccess.md#removeeventlistener)

## Properties

### inputs

• `Readonly` **inputs**: [`MIDIInputMap`](../modules/input._internal_.md#midiinputmap)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9112

___

### onstatechange

• **onstatechange**: ``null`` \| (`this`: [`MIDIAccess`](../modules/input._internal_.md#midiaccess), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9113

___

### outputs

• `Readonly` **outputs**: [`MIDIOutputMap`](../modules/input._internal_.md#midioutputmap)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9114

___

### sysexEnabled

• `Readonly` **sysexEnabled**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9115

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
| `listener` | (`this`: [`MIDIAccess`](../modules/input._internal_.md#midiaccess), `ev`: [`MIDIAccessEventMap`](input._internal_.MIDIAccessEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9116

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

node_modules/typescript/lib/lib.dom.d.ts:9117

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
| `listener` | (`this`: [`MIDIAccess`](../modules/input._internal_.md#midiaccess), `ev`: [`MIDIAccessEventMap`](input._internal_.MIDIAccessEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9118

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

node_modules/typescript/lib/lib.dom.d.ts:9119
