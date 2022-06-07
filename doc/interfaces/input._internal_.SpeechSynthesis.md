[Droom Google Location Plugin - v1.0.16](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / SpeechSynthesis

# Interface: SpeechSynthesis

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).SpeechSynthesis

This Web Speech API interface is the controller interface for the speech service; this can be used to retrieve information about the synthesis voices available on the device, start and pause speech, and other commands besides.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`SpeechSynthesis`**

## Table of contents

### Properties

- [onvoiceschanged](input._internal_.SpeechSynthesis.md#onvoiceschanged)
- [paused](input._internal_.SpeechSynthesis.md#paused)
- [pending](input._internal_.SpeechSynthesis.md#pending)
- [speaking](input._internal_.SpeechSynthesis.md#speaking)

### Methods

- [addEventListener](input._internal_.SpeechSynthesis.md#addeventlistener)
- [cancel](input._internal_.SpeechSynthesis.md#cancel)
- [dispatchEvent](input._internal_.SpeechSynthesis.md#dispatchevent)
- [getVoices](input._internal_.SpeechSynthesis.md#getvoices)
- [pause](input._internal_.SpeechSynthesis.md#pause)
- [removeEventListener](input._internal_.SpeechSynthesis.md#removeeventlistener)
- [resume](input._internal_.SpeechSynthesis.md#resume)
- [speak](input._internal_.SpeechSynthesis.md#speak)

## Properties

### onvoiceschanged

• **onvoiceschanged**: ``null`` \| (`this`: [`SpeechSynthesis`](../modules/input._internal_.md#speechsynthesis), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13695

___

### paused

• `Readonly` **paused**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13696

___

### pending

• `Readonly` **pending**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13697

___

### speaking

• `Readonly` **speaking**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13698

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"voiceschanged"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SpeechSynthesis`](../modules/input._internal_.md#speechsynthesis), `ev`: [`SpeechSynthesisEventMap`](input._internal_.SpeechSynthesisEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13704

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

node_modules/typescript/lib/lib.dom.d.ts:13705

___

### cancel

▸ **cancel**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13699

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

### getVoices

▸ **getVoices**(): [`SpeechSynthesisVoice`](../modules/input._internal_.md#speechsynthesisvoice)[]

#### Returns

[`SpeechSynthesisVoice`](../modules/input._internal_.md#speechsynthesisvoice)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13700

___

### pause

▸ **pause**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13701

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"voiceschanged"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SpeechSynthesis`](../modules/input._internal_.md#speechsynthesis), `ev`: [`SpeechSynthesisEventMap`](input._internal_.SpeechSynthesisEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13706

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

node_modules/typescript/lib/lib.dom.d.ts:13707

___

### resume

▸ **resume**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13702

___

### speak

▸ **speak**(`utterance`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `utterance` | [`SpeechSynthesisUtterance`](../modules/input._internal_.md#speechsynthesisutterance) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13703
