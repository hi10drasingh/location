[Droom Google Location Plugin - v1.0.15](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / NodeIterator

# Interface: NodeIterator

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).NodeIterator

An iterator over the members of a list of the nodes in a subtree of the DOM. The nodes will be returned in document order.

## Table of contents

### Properties

- [filter](input._internal_.NodeIterator.md#filter)
- [pointerBeforeReferenceNode](input._internal_.NodeIterator.md#pointerbeforereferencenode)
- [referenceNode](input._internal_.NodeIterator.md#referencenode)
- [root](input._internal_.NodeIterator.md#root)
- [whatToShow](input._internal_.NodeIterator.md#whattoshow)

### Methods

- [detach](input._internal_.NodeIterator.md#detach)
- [nextNode](input._internal_.NodeIterator.md#nextnode)
- [previousNode](input._internal_.NodeIterator.md#previousnode)

## Properties

### filter

• `Readonly` **filter**: ``null`` \| [`NodeFilter`](../modules/input._internal_.md#nodefilter-1)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10160

___

### pointerBeforeReferenceNode

• `Readonly` **pointerBeforeReferenceNode**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10161

___

### referenceNode

• `Readonly` **referenceNode**: [`Node`](../modules/input._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10162

___

### root

• `Readonly` **root**: [`Node`](../modules/input._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10163

___

### whatToShow

• `Readonly` **whatToShow**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10164

## Methods

### detach

▸ **detach**(): `void`

**`deprecated`**

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10166

___

### nextNode

▸ **nextNode**(): ``null`` \| [`Node`](../modules/input._internal_.md#node)

#### Returns

``null`` \| [`Node`](../modules/input._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10167

___

### previousNode

▸ **previousNode**(): ``null`` \| [`Node`](../modules/input._internal_.md#node)

#### Returns

``null`` \| [`Node`](../modules/input._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10168
