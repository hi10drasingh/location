[Droom Google Location Plugin - v1.0.8](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / ServiceWorker

# Interface: ServiceWorker

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).ServiceWorker

This ServiceWorker API interface provides a reference to a service worker. Multiple browsing contexts (e.g. pages, workers, etc.) can be associated with the same service worker, each through a unique ServiceWorker object.
Available only in secure contexts.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

- [`AbstractWorker`](input._internal_.AbstractWorker.md)

  ↳ **`ServiceWorker`**

## Table of contents

### Properties

- [onerror](input._internal_.ServiceWorker.md#onerror)
- [onstatechange](input._internal_.ServiceWorker.md#onstatechange)
- [scriptURL](input._internal_.ServiceWorker.md#scripturl)
- [state](input._internal_.ServiceWorker.md#state)

### Methods

- [addEventListener](input._internal_.ServiceWorker.md#addeventlistener)
- [dispatchEvent](input._internal_.ServiceWorker.md#dispatchevent)
- [postMessage](input._internal_.ServiceWorker.md#postmessage)
- [removeEventListener](input._internal_.ServiceWorker.md#removeeventlistener)

## Properties

### onerror

• **onerror**: ``null`` \| (`this`: [`AbstractWorker`](input._internal_.AbstractWorker.md), `ev`: [`ErrorEvent`](../modules/input._internal_.md#errorevent)) => `any`

#### Inherited from

[AbstractWorker](input._internal_.AbstractWorker.md).[onerror](input._internal_.AbstractWorker.md#onerror)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2021

___

### onstatechange

• **onstatechange**: ``null`` \| (`this`: [`ServiceWorker`](../modules/input._internal_.md#serviceworker), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13479

___

### scriptURL

• `Readonly` **scriptURL**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13480

___

### state

• `Readonly` **state**: [`ServiceWorkerState`](../modules/input._internal_.md#serviceworkerstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13481

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`ServiceWorkerEventMap`](input._internal_.ServiceWorkerEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`ServiceWorker`](../modules/input._internal_.md#serviceworker), `ev`: [`ServiceWorkerEventMap`](input._internal_.ServiceWorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[AbstractWorker](input._internal_.AbstractWorker.md).[addEventListener](input._internal_.AbstractWorker.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13484

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

[AbstractWorker](input._internal_.AbstractWorker.md).[addEventListener](input._internal_.AbstractWorker.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13485

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

### postMessage

▸ **postMessage**(`message`, `transfer`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `transfer` | [`Transferable`](../modules/input._internal_.md#transferable)[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13482

▸ **postMessage**(`message`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message` | `any` |
| `options?` | [`StructuredSerializeOptions`](input._internal_.StructuredSerializeOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13483

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`ServiceWorkerEventMap`](input._internal_.ServiceWorkerEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`ServiceWorker`](../modules/input._internal_.md#serviceworker), `ev`: [`ServiceWorkerEventMap`](input._internal_.ServiceWorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

[AbstractWorker](input._internal_.AbstractWorker.md).[removeEventListener](input._internal_.AbstractWorker.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13486

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

[AbstractWorker](input._internal_.AbstractWorker.md).[removeEventListener](input._internal_.AbstractWorker.md#removeeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13487
