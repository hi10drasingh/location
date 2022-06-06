[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / ServiceWorkerRegistration

# Interface: ServiceWorkerRegistration

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).ServiceWorkerRegistration

This ServiceWorker API interface represents the service worker registration. You register a service worker to control one or more pages that share the same origin.
Available only in secure contexts.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`ServiceWorkerRegistration`**

## Table of contents

### Properties

- [active](input._internal_.ServiceWorkerRegistration.md#active)
- [installing](input._internal_.ServiceWorkerRegistration.md#installing)
- [navigationPreload](input._internal_.ServiceWorkerRegistration.md#navigationpreload)
- [onupdatefound](input._internal_.ServiceWorkerRegistration.md#onupdatefound)
- [pushManager](input._internal_.ServiceWorkerRegistration.md#pushmanager)
- [scope](input._internal_.ServiceWorkerRegistration.md#scope)
- [updateViaCache](input._internal_.ServiceWorkerRegistration.md#updateviacache)
- [waiting](input._internal_.ServiceWorkerRegistration.md#waiting)

### Methods

- [addEventListener](input._internal_.ServiceWorkerRegistration.md#addeventlistener)
- [dispatchEvent](input._internal_.ServiceWorkerRegistration.md#dispatchevent)
- [getNotifications](input._internal_.ServiceWorkerRegistration.md#getnotifications)
- [removeEventListener](input._internal_.ServiceWorkerRegistration.md#removeeventlistener)
- [showNotification](input._internal_.ServiceWorkerRegistration.md#shownotification)
- [unregister](input._internal_.ServiceWorkerRegistration.md#unregister)
- [update](input._internal_.ServiceWorkerRegistration.md#update)

## Properties

### active

• `Readonly` **active**: ``null`` \| [`ServiceWorker`](../modules/input._internal_.md#serviceworker)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13535

___

### installing

• `Readonly` **installing**: ``null`` \| [`ServiceWorker`](../modules/input._internal_.md#serviceworker)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13536

___

### navigationPreload

• `Readonly` **navigationPreload**: [`NavigationPreloadManager`](../modules/input._internal_.md#navigationpreloadmanager)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13537

___

### onupdatefound

• **onupdatefound**: ``null`` \| (`this`: [`ServiceWorkerRegistration`](../modules/input._internal_.md#serviceworkerregistration), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13538

___

### pushManager

• `Readonly` **pushManager**: [`PushManager`](../modules/input._internal_.md#pushmanager)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13539

___

### scope

• `Readonly` **scope**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13540

___

### updateViaCache

• `Readonly` **updateViaCache**: [`ServiceWorkerUpdateViaCache`](../modules/input._internal_.md#serviceworkerupdateviacache)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13541

___

### waiting

• `Readonly` **waiting**: ``null`` \| [`ServiceWorker`](../modules/input._internal_.md#serviceworker)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13542

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"updatefound"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`ServiceWorkerRegistration`](../modules/input._internal_.md#serviceworkerregistration), `ev`: [`ServiceWorkerRegistrationEventMap`](input._internal_.ServiceWorkerRegistrationEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13547

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

node_modules/typescript/lib/lib.dom.d.ts:13548

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

### getNotifications

▸ **getNotifications**(`filter?`): `Promise`<[`Notification`](../modules/input._internal_.md#notification)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `filter?` | [`GetNotificationOptions`](input._internal_.GetNotificationOptions.md) |

#### Returns

`Promise`<[`Notification`](../modules/input._internal_.md#notification)[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13543

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"updatefound"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`ServiceWorkerRegistration`](../modules/input._internal_.md#serviceworkerregistration), `ev`: [`ServiceWorkerRegistrationEventMap`](input._internal_.ServiceWorkerRegistrationEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13549

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

node_modules/typescript/lib/lib.dom.d.ts:13550

___

### showNotification

▸ **showNotification**(`title`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `title` | `string` |
| `options?` | [`NotificationOptions`](input._internal_.NotificationOptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13544

___

### unregister

▸ **unregister**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13545

___

### update

▸ **update**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13546
