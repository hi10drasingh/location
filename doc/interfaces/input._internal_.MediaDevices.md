[Droom Google Location Plugin - v1.0.6](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / MediaDevices

# Interface: MediaDevices

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).MediaDevices

Provides access to connected media input devices like cameras and microphones, as well as screen sharing. In essence, it lets you obtain access to any hardware source of media data.
Available only in secure contexts.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`MediaDevices`**

## Table of contents

### Properties

- [ondevicechange](input._internal_.MediaDevices.md#ondevicechange)

### Methods

- [addEventListener](input._internal_.MediaDevices.md#addeventlistener)
- [dispatchEvent](input._internal_.MediaDevices.md#dispatchevent)
- [enumerateDevices](input._internal_.MediaDevices.md#enumeratedevices)
- [getDisplayMedia](input._internal_.MediaDevices.md#getdisplaymedia)
- [getSupportedConstraints](input._internal_.MediaDevices.md#getsupportedconstraints)
- [getUserMedia](input._internal_.MediaDevices.md#getusermedia)
- [removeEventListener](input._internal_.MediaDevices.md#removeeventlistener)

## Properties

### ondevicechange

• **ondevicechange**: ``null`` \| (`this`: [`MediaDevices`](../modules/input._internal_.md#mediadevices), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9277

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"devicechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaDevices`](../modules/input._internal_.md#mediadevices), `ev`: [`MediaDevicesEventMap`](input._internal_.MediaDevicesEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9282

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

node_modules/typescript/lib/lib.dom.d.ts:9283

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

### enumerateDevices

▸ **enumerateDevices**(): `Promise`<[`MediaDeviceInfo`](../modules/input._internal_.md#mediadeviceinfo)[]\>

#### Returns

`Promise`<[`MediaDeviceInfo`](../modules/input._internal_.md#mediadeviceinfo)[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9278

___

### getDisplayMedia

▸ **getDisplayMedia**(`constraints?`): `Promise`<[`MediaStream`](../modules/input._internal_.md#mediastream)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints?` | [`DisplayMediaStreamConstraints`](input._internal_.DisplayMediaStreamConstraints.md) |

#### Returns

`Promise`<[`MediaStream`](../modules/input._internal_.md#mediastream)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9279

___

### getSupportedConstraints

▸ **getSupportedConstraints**(): [`MediaTrackSupportedConstraints`](input._internal_.MediaTrackSupportedConstraints.md)

#### Returns

[`MediaTrackSupportedConstraints`](input._internal_.MediaTrackSupportedConstraints.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9280

___

### getUserMedia

▸ **getUserMedia**(`constraints?`): `Promise`<[`MediaStream`](../modules/input._internal_.md#mediastream)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `constraints?` | [`MediaStreamConstraints`](input._internal_.MediaStreamConstraints.md) |

#### Returns

`Promise`<[`MediaStream`](../modules/input._internal_.md#mediastream)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9281

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"devicechange"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaDevices`](../modules/input._internal_.md#mediadevices), `ev`: [`MediaDevicesEventMap`](input._internal_.MediaDevicesEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9284

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

node_modules/typescript/lib/lib.dom.d.ts:9285
