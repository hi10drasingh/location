[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / SourceBufferList

# Interface: SourceBufferList

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).SourceBufferList

A simple container list for multiple SourceBuffer objects.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`SourceBufferList`**

## Indexable

▪ [index: `number`]: [`SourceBuffer`](../modules/input._internal_.md#sourcebuffer)

## Table of contents

### Properties

- [length](input._internal_.SourceBufferList.md#length)
- [onaddsourcebuffer](input._internal_.SourceBufferList.md#onaddsourcebuffer)
- [onremovesourcebuffer](input._internal_.SourceBufferList.md#onremovesourcebuffer)

### Methods

- [addEventListener](input._internal_.SourceBufferList.md#addeventlistener)
- [dispatchEvent](input._internal_.SourceBufferList.md#dispatchevent)
- [removeEventListener](input._internal_.SourceBufferList.md#removeeventlistener)

## Properties

### length

• `Readonly` **length**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13641

___

### onaddsourcebuffer

• **onaddsourcebuffer**: ``null`` \| (`this`: [`SourceBufferList`](../modules/input._internal_.md#sourcebufferlist), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13642

___

### onremovesourcebuffer

• **onremovesourcebuffer**: ``null`` \| (`this`: [`SourceBufferList`](../modules/input._internal_.md#sourcebufferlist), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13643

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SourceBufferListEventMap`](input._internal_.SourceBufferListEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SourceBufferList`](../modules/input._internal_.md#sourcebufferlist), `ev`: [`SourceBufferListEventMap`](input._internal_.SourceBufferListEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13644

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

node_modules/typescript/lib/lib.dom.d.ts:13645

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

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SourceBufferListEventMap`](input._internal_.SourceBufferListEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`SourceBufferList`](../modules/input._internal_.md#sourcebufferlist), `ev`: [`SourceBufferListEventMap`](input._internal_.SourceBufferListEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13646

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

node_modules/typescript/lib/lib.dom.d.ts:13647
