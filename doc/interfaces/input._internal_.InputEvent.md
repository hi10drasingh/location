[Droom Google Location Plugin - v1.0.4](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / InputEvent

# Interface: InputEvent

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).InputEvent

## Hierarchy

- [`UIEvent`](../modules/input._internal_.md#uievent)

  ↳ **`InputEvent`**

## Table of contents

### Properties

- [AT\_TARGET](input._internal_.InputEvent.md#at_target)
- [BUBBLING\_PHASE](input._internal_.InputEvent.md#bubbling_phase)
- [CAPTURING\_PHASE](input._internal_.InputEvent.md#capturing_phase)
- [NONE](input._internal_.InputEvent.md#none)
- [bubbles](input._internal_.InputEvent.md#bubbles)
- [cancelBubble](input._internal_.InputEvent.md#cancelbubble)
- [cancelable](input._internal_.InputEvent.md#cancelable)
- [composed](input._internal_.InputEvent.md#composed)
- [currentTarget](input._internal_.InputEvent.md#currenttarget)
- [data](input._internal_.InputEvent.md#data)
- [dataTransfer](input._internal_.InputEvent.md#datatransfer)
- [defaultPrevented](input._internal_.InputEvent.md#defaultprevented)
- [detail](input._internal_.InputEvent.md#detail)
- [eventPhase](input._internal_.InputEvent.md#eventphase)
- [inputType](input._internal_.InputEvent.md#inputtype)
- [isComposing](input._internal_.InputEvent.md#iscomposing)
- [isTrusted](input._internal_.InputEvent.md#istrusted)
- [returnValue](input._internal_.InputEvent.md#returnvalue)
- [srcElement](input._internal_.InputEvent.md#srcelement)
- [target](input._internal_.InputEvent.md#target)
- [timeStamp](input._internal_.InputEvent.md#timestamp)
- [type](input._internal_.InputEvent.md#type)
- [view](input._internal_.InputEvent.md#view)
- [which](input._internal_.InputEvent.md#which)

### Methods

- [composedPath](input._internal_.InputEvent.md#composedpath)
- [getTargetRanges](input._internal_.InputEvent.md#gettargetranges)
- [initEvent](input._internal_.InputEvent.md#initevent)
- [initUIEvent](input._internal_.InputEvent.md#inituievent)
- [preventDefault](input._internal_.InputEvent.md#preventdefault)
- [stopImmediatePropagation](input._internal_.InputEvent.md#stopimmediatepropagation)
- [stopPropagation](input._internal_.InputEvent.md#stoppropagation)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

UIEvent.AT\_TARGET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5050

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

UIEvent.BUBBLING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5051

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

UIEvent.CAPTURING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5052

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

UIEvent.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5053

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Inherited from

UIEvent.bubbles

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5016

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

UIEvent.cancelBubble

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5017

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Inherited from

UIEvent.cancelable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5019

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Inherited from

UIEvent.composed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5021

___

### currentTarget

• `Readonly` **currentTarget**: ``null`` \| [`EventTarget`](../modules/input._internal_.md#eventtarget)

Returns the object whose event listener's callback is currently being invoked.

#### Inherited from

UIEvent.currentTarget

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5023

___

### data

• `Readonly` **data**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8915

___

### dataTransfer

• `Readonly` **dataTransfer**: ``null`` \| [`DataTransfer`](../modules/input._internal_.md#datatransfer)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8916

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

UIEvent.defaultPrevented

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5025

___

### detail

• `Readonly` **detail**: `number`

#### Inherited from

UIEvent.detail

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14327

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

UIEvent.eventPhase

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5027

___

### inputType

• `Readonly` **inputType**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8917

___

### isComposing

• `Readonly` **isComposing**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8918

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

UIEvent.isTrusted

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5029

___

### returnValue

• **returnValue**: `boolean`

**`deprecated`**

#### Inherited from

UIEvent.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5031

___

### srcElement

• `Readonly` **srcElement**: ``null`` \| [`EventTarget`](../modules/input._internal_.md#eventtarget)

**`deprecated`**

#### Inherited from

UIEvent.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5033

___

### target

• `Readonly` **target**: ``null`` \| [`EventTarget`](../modules/input._internal_.md#eventtarget)

Returns the object to which event is dispatched (its target).

#### Inherited from

UIEvent.target

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5035

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

UIEvent.timeStamp

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5037

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

UIEvent.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5039

___

### view

• `Readonly` **view**: ``null`` \| [`Window`](../modules/input._internal_.md#window)

#### Inherited from

UIEvent.view

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14328

___

### which

• `Readonly` **which**: `number`

**`deprecated`**

#### Inherited from

UIEvent.which

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14330

## Methods

### composedPath

▸ **composedPath**(): [`EventTarget`](../modules/input._internal_.md#eventtarget)[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

[`EventTarget`](../modules/input._internal_.md#eventtarget)[]

#### Inherited from

UIEvent.composedPath

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5041

___

### getTargetRanges

▸ **getTargetRanges**(): [`StaticRange`](../modules/input._internal_.md#staticrange)[]

#### Returns

[`StaticRange`](../modules/input._internal_.md#staticrange)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8919

___

### initEvent

▸ **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |

#### Returns

`void`

#### Inherited from

UIEvent.initEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5043

___

### initUIEvent

▸ **initUIEvent**(`typeArg`, `bubblesArg?`, `cancelableArg?`, `viewArg?`, `detailArg?`): `void`

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `typeArg` | `string` |
| `bubblesArg?` | `boolean` |
| `cancelableArg?` | `boolean` |
| `viewArg?` | ``null`` \| [`Window`](../modules/input._internal_.md#window) |
| `detailArg?` | `number` |

#### Returns

`void`

#### Inherited from

UIEvent.initUIEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14332

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Inherited from

UIEvent.preventDefault

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5045

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Inherited from

UIEvent.stopImmediatePropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5047

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

UIEvent.stopPropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5049
