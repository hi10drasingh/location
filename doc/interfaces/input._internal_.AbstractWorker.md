[Droom Google Location Plugin - v1.0.16](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / AbstractWorker

# Interface: AbstractWorker

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).AbstractWorker

## Hierarchy

- **`AbstractWorker`**

  ↳ [`ServiceWorker`](input._internal_.ServiceWorker.md)

## Table of contents

### Properties

- [onerror](input._internal_.AbstractWorker.md#onerror)

### Methods

- [addEventListener](input._internal_.AbstractWorker.md#addeventlistener)
- [removeEventListener](input._internal_.AbstractWorker.md#removeeventlistener)

## Properties

### onerror

• **onerror**: ``null`` \| (`this`: [`AbstractWorker`](input._internal_.AbstractWorker.md), `ev`: [`ErrorEvent`](../modules/input._internal_.md#errorevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2021

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbstractWorker`](input._internal_.AbstractWorker.md), `ev`: [`AbstractWorkerEventMap`](input._internal_.AbstractWorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2022

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/input._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2023

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"error"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`AbstractWorker`](input._internal_.AbstractWorker.md), `ev`: [`AbstractWorkerEventMap`](input._internal_.AbstractWorkerEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2024

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/input._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2025
