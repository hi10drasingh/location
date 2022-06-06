[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / TextTrackCue

# Interface: TextTrackCue

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).TextTrackCue

TextTrackCues represent a string of text that will be displayed for some duration of time on a TextTrack. This includes the start and end times that the cue will be displayed. A TextTrackCue cannot be used directly, instead one of the derived types (e.g. VTTCue) must be used.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`TextTrackCue`**

## Table of contents

### Properties

- [endTime](input._internal_.TextTrackCue.md#endtime)
- [id](input._internal_.TextTrackCue.md#id)
- [onenter](input._internal_.TextTrackCue.md#onenter)
- [onexit](input._internal_.TextTrackCue.md#onexit)
- [pauseOnExit](input._internal_.TextTrackCue.md#pauseonexit)
- [startTime](input._internal_.TextTrackCue.md#starttime)
- [track](input._internal_.TextTrackCue.md#track)

### Methods

- [addEventListener](input._internal_.TextTrackCue.md#addeventlistener)
- [dispatchEvent](input._internal_.TextTrackCue.md#dispatchevent)
- [removeEventListener](input._internal_.TextTrackCue.md#removeeventlistener)

## Properties

### endTime

• **endTime**: `number`

Returns the text track cue end time, in seconds.

Can be set.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14113

___

### id

• **id**: `string`

Returns the text track cue identifier.

Can be set.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14119

___

### onenter

• **onenter**: ``null`` \| (`this`: [`TextTrackCue`](../modules/input._internal_.md#texttrackcue), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14120

___

### onexit

• **onexit**: ``null`` \| (`this`: [`TextTrackCue`](../modules/input._internal_.md#texttrackcue), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14121

___

### pauseOnExit

• **pauseOnExit**: `boolean`

Returns true if the text track cue pause-on-exit flag is set, false otherwise.

Can be set.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14127

___

### startTime

• **startTime**: `number`

Returns the text track cue start time, in seconds.

Can be set.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14133

___

### track

• `Readonly` **track**: ``null`` \| [`TextTrack`](../modules/input._internal_.md#texttrack)

Returns the TextTrack object to which this text track cue belongs, if any, or null otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14135

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`TextTrackCueEventMap`](input._internal_.TextTrackCueEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`TextTrackCue`](../modules/input._internal_.md#texttrackcue), `ev`: [`TextTrackCueEventMap`](input._internal_.TextTrackCueEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14136

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

node_modules/typescript/lib/lib.dom.d.ts:14137

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
| `K` | extends keyof [`TextTrackCueEventMap`](input._internal_.TextTrackCueEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`TextTrackCue`](../modules/input._internal_.md#texttrackcue), `ev`: [`TextTrackCueEventMap`](input._internal_.TextTrackCueEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14138

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

node_modules/typescript/lib/lib.dom.d.ts:14139
