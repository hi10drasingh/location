[Droom Google Location Plugin - v1.0.4](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / RemotePlayback

# Interface: RemotePlayback

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).RemotePlayback

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`RemotePlayback`**

## Table of contents

### Properties

- [onconnect](input._internal_.RemotePlayback.md#onconnect)
- [onconnecting](input._internal_.RemotePlayback.md#onconnecting)
- [ondisconnect](input._internal_.RemotePlayback.md#ondisconnect)
- [state](input._internal_.RemotePlayback.md#state)

### Methods

- [addEventListener](input._internal_.RemotePlayback.md#addeventlistener)
- [cancelWatchAvailability](input._internal_.RemotePlayback.md#cancelwatchavailability)
- [dispatchEvent](input._internal_.RemotePlayback.md#dispatchevent)
- [prompt](input._internal_.RemotePlayback.md#prompt)
- [removeEventListener](input._internal_.RemotePlayback.md#removeeventlistener)
- [watchAvailability](input._internal_.RemotePlayback.md#watchavailability)

## Properties

### onconnect

• **onconnect**: ``null`` \| (`this`: [`RemotePlayback`](../modules/input._internal_.md#remoteplayback), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11527

___

### onconnecting

• **onconnecting**: ``null`` \| (`this`: [`RemotePlayback`](../modules/input._internal_.md#remoteplayback), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11528

___

### ondisconnect

• **ondisconnect**: ``null`` \| (`this`: [`RemotePlayback`](../modules/input._internal_.md#remoteplayback), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11529

___

### state

• `Readonly` **state**: [`RemotePlaybackState`](../modules/input._internal_.md#remoteplaybackstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11530

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RemotePlaybackEventMap`](input._internal_.RemotePlaybackEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RemotePlayback`](../modules/input._internal_.md#remoteplayback), `ev`: [`RemotePlaybackEventMap`](input._internal_.RemotePlaybackEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11534

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

node_modules/typescript/lib/lib.dom.d.ts:11535

___

### cancelWatchAvailability

▸ **cancelWatchAvailability**(`id?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `id?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11531

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

### prompt

▸ **prompt**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11532

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`RemotePlaybackEventMap`](input._internal_.RemotePlaybackEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`RemotePlayback`](../modules/input._internal_.md#remoteplayback), `ev`: [`RemotePlaybackEventMap`](input._internal_.RemotePlaybackEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11536

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

node_modules/typescript/lib/lib.dom.d.ts:11537

___

### watchAvailability

▸ **watchAvailability**(`callback`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | [`RemotePlaybackAvailabilityCallback`](input._internal_.RemotePlaybackAvailabilityCallback.md) |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11533
