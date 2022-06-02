[my-webpack-project](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / Node

# Interface: Node

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).Node

Node is an interface from which a number of DOM API object types inherit. It allows those types to be treated similarly; for example, inheriting the same set of methods, or being tested in the same way.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`Node`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](input._internal_.Node.md#attribute_node)
- [CDATA\_SECTION\_NODE](input._internal_.Node.md#cdata_section_node)
- [COMMENT\_NODE](input._internal_.Node.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](input._internal_.Node.md#document_fragment_node)
- [DOCUMENT\_NODE](input._internal_.Node.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](input._internal_.Node.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](input._internal_.Node.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](input._internal_.Node.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](input._internal_.Node.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](input._internal_.Node.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](input._internal_.Node.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](input._internal_.Node.md#document_type_node)
- [ELEMENT\_NODE](input._internal_.Node.md#element_node)
- [ENTITY\_NODE](input._internal_.Node.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](input._internal_.Node.md#entity_reference_node)
- [NOTATION\_NODE](input._internal_.Node.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](input._internal_.Node.md#processing_instruction_node)
- [TEXT\_NODE](input._internal_.Node.md#text_node)
- [baseURI](input._internal_.Node.md#baseuri)
- [childNodes](input._internal_.Node.md#childnodes)
- [firstChild](input._internal_.Node.md#firstchild)
- [isConnected](input._internal_.Node.md#isconnected)
- [lastChild](input._internal_.Node.md#lastchild)
- [nextSibling](input._internal_.Node.md#nextsibling)
- [nodeName](input._internal_.Node.md#nodename)
- [nodeType](input._internal_.Node.md#nodetype)
- [nodeValue](input._internal_.Node.md#nodevalue)
- [ownerDocument](input._internal_.Node.md#ownerdocument)
- [parentElement](input._internal_.Node.md#parentelement)
- [parentNode](input._internal_.Node.md#parentnode)
- [previousSibling](input._internal_.Node.md#previoussibling)
- [textContent](input._internal_.Node.md#textcontent)

### Methods

- [addEventListener](input._internal_.Node.md#addeventlistener)
- [appendChild](input._internal_.Node.md#appendchild)
- [cloneNode](input._internal_.Node.md#clonenode)
- [compareDocumentPosition](input._internal_.Node.md#comparedocumentposition)
- [contains](input._internal_.Node.md#contains)
- [dispatchEvent](input._internal_.Node.md#dispatchevent)
- [getRootNode](input._internal_.Node.md#getrootnode)
- [hasChildNodes](input._internal_.Node.md#haschildnodes)
- [insertBefore](input._internal_.Node.md#insertbefore)
- [isDefaultNamespace](input._internal_.Node.md#isdefaultnamespace)
- [isEqualNode](input._internal_.Node.md#isequalnode)
- [isSameNode](input._internal_.Node.md#issamenode)
- [lookupNamespaceURI](input._internal_.Node.md#lookupnamespaceuri)
- [lookupPrefix](input._internal_.Node.md#lookupprefix)
- [normalize](input._internal_.Node.md#normalize)
- [removeChild](input._internal_.Node.md#removechild)
- [removeEventListener](input._internal_.Node.md#removeeventlistener)
- [replaceChild](input._internal_.Node.md#replacechild)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10089

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10091

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10093

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10095

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10097

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10099

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10101

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10103

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10105

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10106

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10108

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10110

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10112

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10113

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10114

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10115

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10117

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10119

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10042

___

### childNodes

• `Readonly` **childNodes**: [`NodeListOf`](input._internal_.NodeListOf.md)<[`ChildNode`](input._internal_.ChildNode.md)\>

Returns the children.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10044

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the first child.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10048

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the last child.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10050

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the next sibling.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10052

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10054

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10056

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10057

___

### ownerDocument

• `Readonly` **ownerDocument**: ``null`` \| [`Document`](../modules/input._internal_.md#document)

Returns the node document. Returns null for documents.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10059

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| [`HTMLElement`](../modules/input._internal_.md#htmlelement)

Returns the parent element.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10061

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](input._internal_.ParentNode.md)

Returns the parent.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10063

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the previous sibling.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10065

___

### textContent

• **textContent**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10066

## Methods

### addEventListener

▸ **addEventListener**(`type`, `callback`, `options?`): `void`

Appends an event listener for events whose type attribute value is type. The callback argument sets the callback that will be invoked when the event is dispatched.

The options argument sets listener-specific options. For compatibility this can be a boolean, in which case the method behaves exactly as if the value was specified as options's capture.

When set to true, options's capture prevents callback from being invoked when the event's eventPhase attribute value is BUBBLING_PHASE. When false (or not present), callback will not be invoked when event's eventPhase attribute value is CAPTURING_PHASE. Either way, callback will be invoked if event's eventPhase attribute value is AT_TARGET.

When set to true, options's passive indicates that the callback will not cancel the event by invoking preventDefault(). This is used to enable performance optimizations described in § 2.8 Observing event listeners.

When set to true, options's once indicates that the callback will only be invoked once after which the event listener will be removed.

If an AbortSignal is passed for options's signal, then the event listener will be removed when signal is aborted.

The event listener is appended to target's event listener list and is not appended if it has the same type, callback, and capture.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| [`EventListenerOrEventListenerObject`](../modules/input._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5136

___

### appendChild

▸ **appendChild**<`T`\>(`node`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/input._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |

#### Returns

`T`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10067

___

### cloneNode

▸ **cloneNode**(`deep?`): [`Node`](../modules/input._internal_.md#node)

Returns a copy of node. If deep is true, the copy also includes the node's descendants.

#### Parameters

| Name | Type |
| :------ | :------ |
| `deep?` | `boolean` |

#### Returns

[`Node`](../modules/input._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10069

___

### compareDocumentPosition

▸ **compareDocumentPosition**(`other`): `number`

Returns a bitmask indicating the position of other relative to node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`Node`](../modules/input._internal_.md#node) |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10071

___

### contains

▸ **contains**(`other`): `boolean`

Returns true if other is an inclusive descendant of node, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | ``null`` \| [`Node`](../modules/input._internal_.md#node) |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10073

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

### getRootNode

▸ **getRootNode**(`options?`): [`Node`](../modules/input._internal_.md#node)

Returns node's root.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`GetRootNodeOptions`](input._internal_.GetRootNodeOptions.md) |

#### Returns

[`Node`](../modules/input._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10075

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10077

___

### insertBefore

▸ **insertBefore**<`T`\>(`node`, `child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/input._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | `T` |
| `child` | ``null`` \| [`Node`](../modules/input._internal_.md#node) |

#### Returns

`T`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10078

___

### isDefaultNamespace

▸ **isDefaultNamespace**(`namespace`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10079

___

### isEqualNode

▸ **isEqualNode**(`otherNode`): `boolean`

Returns whether node and otherNode have the same properties.

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| [`Node`](../modules/input._internal_.md#node) |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10081

___

### isSameNode

▸ **isSameNode**(`otherNode`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `otherNode` | ``null`` \| [`Node`](../modules/input._internal_.md#node) |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10082

___

### lookupNamespaceURI

▸ **lookupNamespaceURI**(`prefix`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | ``null`` \| `string` |

#### Returns

``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10083

___

### lookupPrefix

▸ **lookupPrefix**(`namespace`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |

#### Returns

``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10084

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10086

___

### removeChild

▸ **removeChild**<`T`\>(`child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/input._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `child` | `T` |

#### Returns

`T`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10087

___

### removeEventListener

▸ **removeEventListener**(`type`, `callback`, `options?`): `void`

Removes the event listener in target's event listener list with the same type, callback, and options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `callback` | ``null`` \| [`EventListenerOrEventListenerObject`](../modules/input._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Inherited from

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5140

___

### replaceChild

▸ **replaceChild**<`T`\>(`node`, `child`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends [`Node`](../modules/input._internal_.md#node) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/input._internal_.md#node) |
| `child` | `T` |

#### Returns

`T`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10088
