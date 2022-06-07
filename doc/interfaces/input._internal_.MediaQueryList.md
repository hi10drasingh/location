[Droom Google Location Plugin - v1.0.13](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / MediaQueryList

# Interface: MediaQueryList

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).MediaQueryList

Stores information on a media query applied to a document, and handles sending notifications to listeners when the media query state change (i.e. when the media query test starts or stops evaluating to true).

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`MediaQueryList`**

## Table of contents

### Properties

- [matches](input._internal_.MediaQueryList.md#matches)
- [media](input._internal_.MediaQueryList.md#media)
- [onchange](input._internal_.MediaQueryList.md#onchange)

### Methods

- [addEventListener](input._internal_.MediaQueryList.md#addeventlistener)
- [addListener](input._internal_.MediaQueryList.md#addlistener)
- [dispatchEvent](input._internal_.MediaQueryList.md#dispatchevent)
- [removeEventListener](input._internal_.MediaQueryList.md#removeeventlistener)
- [removeListener](input._internal_.MediaQueryList.md#removelistener)

## Properties

### matches

• `Readonly` **matches**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9456

___

### media

• `Readonly` **media**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9457

___

### onchange

• **onchange**: ``null`` \| (`this`: [`MediaQueryList`](../modules/input._internal_.md#mediaquerylist), `ev`: [`MediaQueryListEvent`](../modules/input._internal_.md#mediaquerylistevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9458

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaQueryList`](../modules/input._internal_.md#mediaquerylist), `ev`: [`MediaQueryListEventMap`](input._internal_.MediaQueryListEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9463

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

node_modules/typescript/lib/lib.dom.d.ts:9464

___

### addListener

▸ **addListener**(`callback`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | ``null`` \| (`this`: [`MediaQueryList`](../modules/input._internal_.md#mediaquerylist), `ev`: [`MediaQueryListEvent`](../modules/input._internal_.md#mediaquerylistevent)) => `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9460

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
| `K` | extends ``"change"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaQueryList`](../modules/input._internal_.md#mediaquerylist), `ev`: [`MediaQueryListEventMap`](input._internal_.MediaQueryListEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9465

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

node_modules/typescript/lib/lib.dom.d.ts:9466

___

### removeListener

▸ **removeListener**(`callback`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | ``null`` \| (`this`: [`MediaQueryList`](../modules/input._internal_.md#mediaquerylist), `ev`: [`MediaQueryListEvent`](../modules/input._internal_.md#mediaquerylistevent)) => `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9462
