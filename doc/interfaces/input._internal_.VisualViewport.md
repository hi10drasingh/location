[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / VisualViewport

# Interface: VisualViewport

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).VisualViewport

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`VisualViewport`**

## Table of contents

### Properties

- [height](input._internal_.VisualViewport.md#height)
- [offsetLeft](input._internal_.VisualViewport.md#offsetleft)
- [offsetTop](input._internal_.VisualViewport.md#offsettop)
- [onresize](input._internal_.VisualViewport.md#onresize)
- [onscroll](input._internal_.VisualViewport.md#onscroll)
- [pageLeft](input._internal_.VisualViewport.md#pageleft)
- [pageTop](input._internal_.VisualViewport.md#pagetop)
- [scale](input._internal_.VisualViewport.md#scale)
- [width](input._internal_.VisualViewport.md#width)

### Methods

- [addEventListener](input._internal_.VisualViewport.md#addeventlistener)
- [dispatchEvent](input._internal_.VisualViewport.md#dispatchevent)
- [removeEventListener](input._internal_.VisualViewport.md#removeeventlistener)

## Properties

### height

• `Readonly` **height**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14485

___

### offsetLeft

• `Readonly` **offsetLeft**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14486

___

### offsetTop

• `Readonly` **offsetTop**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14487

___

### onresize

• **onresize**: ``null`` \| (`this`: [`VisualViewport`](../modules/input._internal_.md#visualviewport), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14488

___

### onscroll

• **onscroll**: ``null`` \| (`this`: [`VisualViewport`](../modules/input._internal_.md#visualviewport), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14489

___

### pageLeft

• `Readonly` **pageLeft**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14490

___

### pageTop

• `Readonly` **pageTop**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14491

___

### scale

• `Readonly` **scale**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14492

___

### width

• `Readonly` **width**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14493

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`VisualViewportEventMap`](input._internal_.VisualViewportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`VisualViewport`](../modules/input._internal_.md#visualviewport), `ev`: [`VisualViewportEventMap`](input._internal_.VisualViewportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14494

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

node_modules/typescript/lib/lib.dom.d.ts:14495

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
| `K` | extends keyof [`VisualViewportEventMap`](input._internal_.VisualViewportEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`VisualViewport`](../modules/input._internal_.md#visualviewport), `ev`: [`VisualViewportEventMap`](input._internal_.VisualViewportEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14496

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

node_modules/typescript/lib/lib.dom.d.ts:14497
