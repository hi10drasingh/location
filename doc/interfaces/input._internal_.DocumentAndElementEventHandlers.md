[Droom Google Location Plugin - v1.0.13](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / DocumentAndElementEventHandlers

# Interface: DocumentAndElementEventHandlers

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).DocumentAndElementEventHandlers

## Hierarchy

- **`DocumentAndElementEventHandlers`**

  ↳ [`HTMLElement`](input._internal_.HTMLElement.md)

  ↳ [`Document`](input._internal_.Document.md)

  ↳ [`SVGElement`](input._internal_.SVGElement.md)

## Table of contents

### Properties

- [oncopy](input._internal_.DocumentAndElementEventHandlers.md#oncopy)
- [oncut](input._internal_.DocumentAndElementEventHandlers.md#oncut)
- [onpaste](input._internal_.DocumentAndElementEventHandlers.md#onpaste)

### Methods

- [addEventListener](input._internal_.DocumentAndElementEventHandlers.md#addeventlistener)
- [removeEventListener](input._internal_.DocumentAndElementEventHandlers.md#removeeventlistener)

## Properties

### oncopy

• **oncopy**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](input._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/input._internal_.md#clipboardevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4708

___

### oncut

• **oncut**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](input._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/input._internal_.md#clipboardevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4709

___

### onpaste

• **onpaste**: ``null`` \| (`this`: [`DocumentAndElementEventHandlers`](input._internal_.DocumentAndElementEventHandlers.md), `ev`: [`ClipboardEvent`](../modules/input._internal_.md#clipboardevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4710

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DocumentAndElementEventHandlersEventMap`](input._internal_.DocumentAndElementEventHandlersEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`DocumentAndElementEventHandlers`](input._internal_.DocumentAndElementEventHandlers.md), `ev`: [`DocumentAndElementEventHandlersEventMap`](input._internal_.DocumentAndElementEventHandlersEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4711

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

node_modules/typescript/lib/lib.dom.d.ts:4712

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`DocumentAndElementEventHandlersEventMap`](input._internal_.DocumentAndElementEventHandlersEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`DocumentAndElementEventHandlers`](input._internal_.DocumentAndElementEventHandlers.md), `ev`: [`DocumentAndElementEventHandlersEventMap`](input._internal_.DocumentAndElementEventHandlersEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4713

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

node_modules/typescript/lib/lib.dom.d.ts:4714
