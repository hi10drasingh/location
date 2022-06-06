[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / ServiceWorkerContainer

# Interface: ServiceWorkerContainer

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).ServiceWorkerContainer

The ServiceWorkerContainer interface of the ServiceWorker API provides an object representing the service worker as an overall unit in the network ecosystem, including facilities to register, unregister and update service workers, and access the state of service workers and their registrations.
Available only in secure contexts.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`ServiceWorkerContainer`**

## Table of contents

### Properties

- [controller](input._internal_.ServiceWorkerContainer.md#controller)
- [oncontrollerchange](input._internal_.ServiceWorkerContainer.md#oncontrollerchange)
- [onmessage](input._internal_.ServiceWorkerContainer.md#onmessage)
- [onmessageerror](input._internal_.ServiceWorkerContainer.md#onmessageerror)
- [ready](input._internal_.ServiceWorkerContainer.md#ready)

### Methods

- [addEventListener](input._internal_.ServiceWorkerContainer.md#addeventlistener)
- [dispatchEvent](input._internal_.ServiceWorkerContainer.md#dispatchevent)
- [getRegistration](input._internal_.ServiceWorkerContainer.md#getregistration)
- [getRegistrations](input._internal_.ServiceWorkerContainer.md#getregistrations)
- [register](input._internal_.ServiceWorkerContainer.md#register)
- [removeEventListener](input._internal_.ServiceWorkerContainer.md#removeeventlistener)
- [startMessages](input._internal_.ServiceWorkerContainer.md#startmessages)

## Properties

### controller

• `Readonly` **controller**: ``null`` \| [`ServiceWorker`](../modules/input._internal_.md#serviceworker)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13506

___

### oncontrollerchange

• **oncontrollerchange**: ``null`` \| (`this`: [`ServiceWorkerContainer`](../modules/input._internal_.md#serviceworkercontainer), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13507

___

### onmessage

• **onmessage**: ``null`` \| (`this`: [`ServiceWorkerContainer`](../modules/input._internal_.md#serviceworkercontainer), `ev`: [`MessageEvent`](../modules/input._internal_.md#messageevent)<`any`\>) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13508

___

### onmessageerror

• **onmessageerror**: ``null`` \| (`this`: [`ServiceWorkerContainer`](../modules/input._internal_.md#serviceworkercontainer), `ev`: [`MessageEvent`](../modules/input._internal_.md#messageevent)<`any`\>) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13509

___

### ready

• `Readonly` **ready**: `Promise`<[`ServiceWorkerRegistration`](../modules/input._internal_.md#serviceworkerregistration)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13510

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`ServiceWorkerContainerEventMap`](input._internal_.ServiceWorkerContainerEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`ServiceWorkerContainer`](../modules/input._internal_.md#serviceworkercontainer), `ev`: [`ServiceWorkerContainerEventMap`](input._internal_.ServiceWorkerContainerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13515

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

node_modules/typescript/lib/lib.dom.d.ts:13516

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

### getRegistration

▸ **getRegistration**(`clientURL?`): `Promise`<`undefined` \| [`ServiceWorkerRegistration`](../modules/input._internal_.md#serviceworkerregistration)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `clientURL?` | `string` \| `URL` |

#### Returns

`Promise`<`undefined` \| [`ServiceWorkerRegistration`](../modules/input._internal_.md#serviceworkerregistration)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13511

___

### getRegistrations

▸ **getRegistrations**(): `Promise`<readonly [`ServiceWorkerRegistration`](../modules/input._internal_.md#serviceworkerregistration)[]\>

#### Returns

`Promise`<readonly [`ServiceWorkerRegistration`](../modules/input._internal_.md#serviceworkerregistration)[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13512

___

### register

▸ **register**(`scriptURL`, `options?`): `Promise`<[`ServiceWorkerRegistration`](../modules/input._internal_.md#serviceworkerregistration)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `scriptURL` | `string` \| `URL` |
| `options?` | [`RegistrationOptions`](input._internal_.RegistrationOptions.md) |

#### Returns

`Promise`<[`ServiceWorkerRegistration`](../modules/input._internal_.md#serviceworkerregistration)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13513

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`ServiceWorkerContainerEventMap`](input._internal_.ServiceWorkerContainerEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`ServiceWorkerContainer`](../modules/input._internal_.md#serviceworkercontainer), `ev`: [`ServiceWorkerContainerEventMap`](input._internal_.ServiceWorkerContainerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13517

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

node_modules/typescript/lib/lib.dom.d.ts:13518

___

### startMessages

▸ **startMessages**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13514
