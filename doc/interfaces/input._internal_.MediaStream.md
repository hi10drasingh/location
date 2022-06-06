[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / MediaStream

# Interface: MediaStream

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).MediaStream

A stream of media content. A stream consists of several tracks such as video or audio tracks. Each track is specified as an instance of MediaStreamTrack.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`MediaStream`**

## Table of contents

### Properties

- [active](input._internal_.MediaStream.md#active)
- [id](input._internal_.MediaStream.md#id)
- [onaddtrack](input._internal_.MediaStream.md#onaddtrack)
- [onremovetrack](input._internal_.MediaStream.md#onremovetrack)

### Methods

- [addEventListener](input._internal_.MediaStream.md#addeventlistener)
- [addTrack](input._internal_.MediaStream.md#addtrack)
- [clone](input._internal_.MediaStream.md#clone)
- [dispatchEvent](input._internal_.MediaStream.md#dispatchevent)
- [getAudioTracks](input._internal_.MediaStream.md#getaudiotracks)
- [getTrackById](input._internal_.MediaStream.md#gettrackbyid)
- [getTracks](input._internal_.MediaStream.md#gettracks)
- [getVideoTracks](input._internal_.MediaStream.md#getvideotracks)
- [removeEventListener](input._internal_.MediaStream.md#removeeventlistener)
- [removeTrack](input._internal_.MediaStream.md#removetrack)

## Properties

### active

• `Readonly` **active**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9582

___

### id

• `Readonly` **id**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9583

___

### onaddtrack

• **onaddtrack**: ``null`` \| (`this`: [`MediaStream`](../modules/input._internal_.md#mediastream), `ev`: [`MediaStreamTrackEvent`](../modules/input._internal_.md#mediastreamtrackevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9584

___

### onremovetrack

• **onremovetrack**: ``null`` \| (`this`: [`MediaStream`](../modules/input._internal_.md#mediastream), `ev`: [`MediaStreamTrackEvent`](../modules/input._internal_.md#mediastreamtrackevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9585

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaStreamEventMap`](input._internal_.MediaStreamEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaStream`](../modules/input._internal_.md#mediastream), `ev`: [`MediaStreamEventMap`](input._internal_.MediaStreamEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9593

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

node_modules/typescript/lib/lib.dom.d.ts:9594

___

### addTrack

▸ **addTrack**(`track`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`MediaStreamTrack`](../modules/input._internal_.md#mediastreamtrack) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9586

___

### clone

▸ **clone**(): [`MediaStream`](../modules/input._internal_.md#mediastream)

#### Returns

[`MediaStream`](../modules/input._internal_.md#mediastream)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9587

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

### getAudioTracks

▸ **getAudioTracks**(): [`MediaStreamTrack`](../modules/input._internal_.md#mediastreamtrack)[]

#### Returns

[`MediaStreamTrack`](../modules/input._internal_.md#mediastreamtrack)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9588

___

### getTrackById

▸ **getTrackById**(`trackId`): ``null`` \| [`MediaStreamTrack`](../modules/input._internal_.md#mediastreamtrack)

#### Parameters

| Name | Type |
| :------ | :------ |
| `trackId` | `string` |

#### Returns

``null`` \| [`MediaStreamTrack`](../modules/input._internal_.md#mediastreamtrack)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9589

___

### getTracks

▸ **getTracks**(): [`MediaStreamTrack`](../modules/input._internal_.md#mediastreamtrack)[]

#### Returns

[`MediaStreamTrack`](../modules/input._internal_.md#mediastreamtrack)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9590

___

### getVideoTracks

▸ **getVideoTracks**(): [`MediaStreamTrack`](../modules/input._internal_.md#mediastreamtrack)[]

#### Returns

[`MediaStreamTrack`](../modules/input._internal_.md#mediastreamtrack)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9591

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaStreamEventMap`](input._internal_.MediaStreamEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaStream`](../modules/input._internal_.md#mediastream), `ev`: [`MediaStreamEventMap`](input._internal_.MediaStreamEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9595

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

node_modules/typescript/lib/lib.dom.d.ts:9596

___

### removeTrack

▸ **removeTrack**(`track`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `track` | [`MediaStreamTrack`](../modules/input._internal_.md#mediastreamtrack) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9592
