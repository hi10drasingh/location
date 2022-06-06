[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / TextTrackList

# Interface: TextTrackList

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).TextTrackList

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`TextTrackList`**

## Indexable

▪ [index: `number`]: [`TextTrack`](../modules/input._internal_.md#texttrack)

## Table of contents

### Properties

- [length](input._internal_.TextTrackList.md#length)
- [onaddtrack](input._internal_.TextTrackList.md#onaddtrack)
- [onchange](input._internal_.TextTrackList.md#onchange)
- [onremovetrack](input._internal_.TextTrackList.md#onremovetrack)

### Methods

- [addEventListener](input._internal_.TextTrackList.md#addeventlistener)
- [dispatchEvent](input._internal_.TextTrackList.md#dispatchevent)
- [getTrackById](input._internal_.TextTrackList.md#gettrackbyid)
- [removeEventListener](input._internal_.TextTrackList.md#removeeventlistener)

## Properties

### length

• `Readonly` **length**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14171

___

### onaddtrack

• **onaddtrack**: ``null`` \| (`this`: [`TextTrackList`](../modules/input._internal_.md#texttracklist), `ev`: [`TrackEvent`](../modules/input._internal_.md#trackevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14172

___

### onchange

• **onchange**: ``null`` \| (`this`: [`TextTrackList`](../modules/input._internal_.md#texttracklist), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14173

___

### onremovetrack

• **onremovetrack**: ``null`` \| (`this`: [`TextTrackList`](../modules/input._internal_.md#texttracklist), `ev`: [`TrackEvent`](../modules/input._internal_.md#trackevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14174

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`TextTrackListEventMap`](input._internal_.TextTrackListEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`TextTrackList`](../modules/input._internal_.md#texttracklist), `ev`: [`TextTrackListEventMap`](input._internal_.TextTrackListEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14176

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

node_modules/typescript/lib/lib.dom.d.ts:14177

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

### getTrackById

▸ **getTrackById**(`id`): ``null`` \| [`TextTrack`](../modules/input._internal_.md#texttrack)

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`TextTrack`](../modules/input._internal_.md#texttrack)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14175

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`TextTrackListEventMap`](input._internal_.TextTrackListEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`TextTrackList`](../modules/input._internal_.md#texttracklist), `ev`: [`TextTrackListEventMap`](input._internal_.TextTrackListEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14178

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

node_modules/typescript/lib/lib.dom.d.ts:14179
