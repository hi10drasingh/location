[Droom Google Location Plugin - v1.0.8](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / MediaSource

# Interface: MediaSource

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).MediaSource

This Media Source Extensions API interface represents a source of media data for an HTMLMediaElement object. A MediaSource object can be attached to a HTMLMediaElement to be played in the user agent.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`MediaSource`**

## Table of contents

### Properties

- [activeSourceBuffers](input._internal_.MediaSource.md#activesourcebuffers)
- [duration](input._internal_.MediaSource.md#duration)
- [onsourceclose](input._internal_.MediaSource.md#onsourceclose)
- [onsourceended](input._internal_.MediaSource.md#onsourceended)
- [onsourceopen](input._internal_.MediaSource.md#onsourceopen)
- [readyState](input._internal_.MediaSource.md#readystate)
- [sourceBuffers](input._internal_.MediaSource.md#sourcebuffers)

### Methods

- [addEventListener](input._internal_.MediaSource.md#addeventlistener)
- [addSourceBuffer](input._internal_.MediaSource.md#addsourcebuffer)
- [clearLiveSeekableRange](input._internal_.MediaSource.md#clearliveseekablerange)
- [dispatchEvent](input._internal_.MediaSource.md#dispatchevent)
- [endOfStream](input._internal_.MediaSource.md#endofstream)
- [removeEventListener](input._internal_.MediaSource.md#removeeventlistener)
- [removeSourceBuffer](input._internal_.MediaSource.md#removesourcebuffer)
- [setLiveSeekableRange](input._internal_.MediaSource.md#setliveseekablerange)

## Properties

### activeSourceBuffers

• `Readonly` **activeSourceBuffers**: [`SourceBufferList`](../modules/input._internal_.md#sourcebufferlist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9551

___

### duration

• **duration**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9552

___

### onsourceclose

• **onsourceclose**: ``null`` \| (`this`: [`MediaSource`](../modules/input._internal_.md#mediasource), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9553

___

### onsourceended

• **onsourceended**: ``null`` \| (`this`: [`MediaSource`](../modules/input._internal_.md#mediasource), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9554

___

### onsourceopen

• **onsourceopen**: ``null`` \| (`this`: [`MediaSource`](../modules/input._internal_.md#mediasource), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9555

___

### readyState

• `Readonly` **readyState**: [`ReadyState`](../modules/input._internal_.md#readystate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9556

___

### sourceBuffers

• `Readonly` **sourceBuffers**: [`SourceBufferList`](../modules/input._internal_.md#sourcebufferlist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9557

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaSourceEventMap`](input._internal_.MediaSourceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaSource`](../modules/input._internal_.md#mediasource), `ev`: [`MediaSourceEventMap`](input._internal_.MediaSourceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9563

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

node_modules/typescript/lib/lib.dom.d.ts:9564

___

### addSourceBuffer

▸ **addSourceBuffer**(`type`): [`SourceBuffer`](../modules/input._internal_.md#sourcebuffer)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`SourceBuffer`](../modules/input._internal_.md#sourcebuffer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9558

___

### clearLiveSeekableRange

▸ **clearLiveSeekableRange**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9559

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

### endOfStream

▸ **endOfStream**(`error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | [`EndOfStreamError`](../modules/input._internal_.md#endofstreamerror) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9560

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaSourceEventMap`](input._internal_.MediaSourceEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaSource`](../modules/input._internal_.md#mediasource), `ev`: [`MediaSourceEventMap`](input._internal_.MediaSourceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9565

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

node_modules/typescript/lib/lib.dom.d.ts:9566

___

### removeSourceBuffer

▸ **removeSourceBuffer**(`sourceBuffer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `sourceBuffer` | [`SourceBuffer`](../modules/input._internal_.md#sourcebuffer) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9561

___

### setLiveSeekableRange

▸ **setLiveSeekableRange**(`start`, `end`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `start` | `number` |
| `end` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9562
