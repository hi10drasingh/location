[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / Notification

# Interface: Notification

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).Notification

This Notifications API interface is used to configure and display desktop notifications to the user.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`Notification`**

## Table of contents

### Properties

- [body](input._internal_.Notification.md#body)
- [data](input._internal_.Notification.md#data)
- [dir](input._internal_.Notification.md#dir)
- [icon](input._internal_.Notification.md#icon)
- [lang](input._internal_.Notification.md#lang)
- [onclick](input._internal_.Notification.md#onclick)
- [onclose](input._internal_.Notification.md#onclose)
- [onerror](input._internal_.Notification.md#onerror)
- [onshow](input._internal_.Notification.md#onshow)
- [tag](input._internal_.Notification.md#tag)
- [title](input._internal_.Notification.md#title)

### Methods

- [addEventListener](input._internal_.Notification.md#addeventlistener)
- [close](input._internal_.Notification.md#close)
- [dispatchEvent](input._internal_.Notification.md#dispatchevent)
- [removeEventListener](input._internal_.Notification.md#removeeventlistener)

## Properties

### body

• `Readonly` **body**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10228

___

### data

• `Readonly` **data**: `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10229

___

### dir

• `Readonly` **dir**: [`NotificationDirection`](../modules/input._internal_.md#notificationdirection)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10230

___

### icon

• `Readonly` **icon**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10231

___

### lang

• `Readonly` **lang**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10232

___

### onclick

• **onclick**: ``null`` \| (`this`: [`Notification`](../modules/input._internal_.md#notification), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10233

___

### onclose

• **onclose**: ``null`` \| (`this`: [`Notification`](../modules/input._internal_.md#notification), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10234

___

### onerror

• **onerror**: ``null`` \| (`this`: [`Notification`](../modules/input._internal_.md#notification), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10235

___

### onshow

• **onshow**: ``null`` \| (`this`: [`Notification`](../modules/input._internal_.md#notification), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10236

___

### tag

• `Readonly` **tag**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10237

___

### title

• `Readonly` **title**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10238

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`NotificationEventMap`](input._internal_.NotificationEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Notification`](../modules/input._internal_.md#notification), `ev`: [`NotificationEventMap`](input._internal_.NotificationEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10240

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

node_modules/typescript/lib/lib.dom.d.ts:10241

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10239

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
| `K` | extends keyof [`NotificationEventMap`](input._internal_.NotificationEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Notification`](../modules/input._internal_.md#notification), `ev`: [`NotificationEventMap`](input._internal_.NotificationEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10242

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

node_modules/typescript/lib/lib.dom.d.ts:10243
