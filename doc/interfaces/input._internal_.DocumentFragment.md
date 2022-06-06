[Droom Google Location Plugin - v1.0.6](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / DocumentFragment

# Interface: DocumentFragment

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).DocumentFragment

A minimal document object that has no parent. It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is that because the document fragment isn't part of the active document tree structure, changes made to the fragment don't affect the document, cause reflow, or incur any performance impact that can occur when changes are made.

## Hierarchy

- [`Node`](../modules/input._internal_.md#node)

- [`NonElementParentNode`](input._internal_.NonElementParentNode.md)

- [`ParentNode`](input._internal_.ParentNode.md)

  ↳ **`DocumentFragment`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](input._internal_.DocumentFragment.md#attribute_node)
- [CDATA\_SECTION\_NODE](input._internal_.DocumentFragment.md#cdata_section_node)
- [COMMENT\_NODE](input._internal_.DocumentFragment.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](input._internal_.DocumentFragment.md#document_fragment_node)
- [DOCUMENT\_NODE](input._internal_.DocumentFragment.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](input._internal_.DocumentFragment.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](input._internal_.DocumentFragment.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](input._internal_.DocumentFragment.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](input._internal_.DocumentFragment.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](input._internal_.DocumentFragment.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](input._internal_.DocumentFragment.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](input._internal_.DocumentFragment.md#document_type_node)
- [ELEMENT\_NODE](input._internal_.DocumentFragment.md#element_node)
- [ENTITY\_NODE](input._internal_.DocumentFragment.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](input._internal_.DocumentFragment.md#entity_reference_node)
- [NOTATION\_NODE](input._internal_.DocumentFragment.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](input._internal_.DocumentFragment.md#processing_instruction_node)
- [TEXT\_NODE](input._internal_.DocumentFragment.md#text_node)
- [baseURI](input._internal_.DocumentFragment.md#baseuri)
- [childElementCount](input._internal_.DocumentFragment.md#childelementcount)
- [childNodes](input._internal_.DocumentFragment.md#childnodes)
- [children](input._internal_.DocumentFragment.md#children)
- [firstChild](input._internal_.DocumentFragment.md#firstchild)
- [firstElementChild](input._internal_.DocumentFragment.md#firstelementchild)
- [isConnected](input._internal_.DocumentFragment.md#isconnected)
- [lastChild](input._internal_.DocumentFragment.md#lastchild)
- [lastElementChild](input._internal_.DocumentFragment.md#lastelementchild)
- [nextSibling](input._internal_.DocumentFragment.md#nextsibling)
- [nodeName](input._internal_.DocumentFragment.md#nodename)
- [nodeType](input._internal_.DocumentFragment.md#nodetype)
- [nodeValue](input._internal_.DocumentFragment.md#nodevalue)
- [ownerDocument](input._internal_.DocumentFragment.md#ownerdocument)
- [parentElement](input._internal_.DocumentFragment.md#parentelement)
- [parentNode](input._internal_.DocumentFragment.md#parentnode)
- [previousSibling](input._internal_.DocumentFragment.md#previoussibling)
- [textContent](input._internal_.DocumentFragment.md#textcontent)

### Methods

- [addEventListener](input._internal_.DocumentFragment.md#addeventlistener)
- [append](input._internal_.DocumentFragment.md#append)
- [appendChild](input._internal_.DocumentFragment.md#appendchild)
- [cloneNode](input._internal_.DocumentFragment.md#clonenode)
- [compareDocumentPosition](input._internal_.DocumentFragment.md#comparedocumentposition)
- [contains](input._internal_.DocumentFragment.md#contains)
- [dispatchEvent](input._internal_.DocumentFragment.md#dispatchevent)
- [getElementById](input._internal_.DocumentFragment.md#getelementbyid)
- [getRootNode](input._internal_.DocumentFragment.md#getrootnode)
- [hasChildNodes](input._internal_.DocumentFragment.md#haschildnodes)
- [insertBefore](input._internal_.DocumentFragment.md#insertbefore)
- [isDefaultNamespace](input._internal_.DocumentFragment.md#isdefaultnamespace)
- [isEqualNode](input._internal_.DocumentFragment.md#isequalnode)
- [isSameNode](input._internal_.DocumentFragment.md#issamenode)
- [lookupNamespaceURI](input._internal_.DocumentFragment.md#lookupnamespaceuri)
- [lookupPrefix](input._internal_.DocumentFragment.md#lookupprefix)
- [normalize](input._internal_.DocumentFragment.md#normalize)
- [prepend](input._internal_.DocumentFragment.md#prepend)
- [querySelector](input._internal_.DocumentFragment.md#queryselector)
- [querySelectorAll](input._internal_.DocumentFragment.md#queryselectorall)
- [removeChild](input._internal_.DocumentFragment.md#removechild)
- [removeEventListener](input._internal_.DocumentFragment.md#removeeventlistener)
- [replaceChild](input._internal_.DocumentFragment.md#replacechild)
- [replaceChildren](input._internal_.DocumentFragment.md#replacechildren)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[ATTRIBUTE_NODE](input._internal_.ParentNode.md#attribute_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10089

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[CDATA_SECTION_NODE](input._internal_.ParentNode.md#cdata_section_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10091

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[COMMENT_NODE](input._internal_.ParentNode.md#comment_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10093

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[DOCUMENT_FRAGMENT_NODE](input._internal_.ParentNode.md#document_fragment_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10095

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[DOCUMENT_NODE](input._internal_.ParentNode.md#document_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10097

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[DOCUMENT_POSITION_CONTAINED_BY](input._internal_.ParentNode.md#document_position_contained_by)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10099

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[DOCUMENT_POSITION_CONTAINS](input._internal_.ParentNode.md#document_position_contains)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10101

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[DOCUMENT_POSITION_DISCONNECTED](input._internal_.ParentNode.md#document_position_disconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10103

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[DOCUMENT_POSITION_FOLLOWING](input._internal_.ParentNode.md#document_position_following)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10105

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC](input._internal_.ParentNode.md#document_position_implementation_specific)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10106

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[DOCUMENT_POSITION_PRECEDING](input._internal_.ParentNode.md#document_position_preceding)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10108

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[DOCUMENT_TYPE_NODE](input._internal_.ParentNode.md#document_type_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10110

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[ELEMENT_NODE](input._internal_.ParentNode.md#element_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10112

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[ENTITY_NODE](input._internal_.ParentNode.md#entity_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10113

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[ENTITY_REFERENCE_NODE](input._internal_.ParentNode.md#entity_reference_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10114

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[NOTATION_NODE](input._internal_.ParentNode.md#notation_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10115

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[PROCESSING_INSTRUCTION_NODE](input._internal_.ParentNode.md#processing_instruction_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10117

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[TEXT_NODE](input._internal_.ParentNode.md#text_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10119

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[baseURI](input._internal_.ParentNode.md#baseuri)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10042

___

### childElementCount

• `Readonly` **childElementCount**: `number`

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[childElementCount](input._internal_.ParentNode.md#childelementcount)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10407

___

### childNodes

• `Readonly` **childNodes**: [`NodeListOf`](input._internal_.NodeListOf.md)<[`ChildNode`](input._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[childNodes](input._internal_.ParentNode.md#childnodes)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10044

___

### children

• `Readonly` **children**: [`HTMLCollection`](../modules/input._internal_.md#htmlcollection)

Returns the child elements.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[children](input._internal_.ParentNode.md#children)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10409

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[firstChild](input._internal_.ParentNode.md#firstchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### firstElementChild

• `Readonly` **firstElementChild**: ``null`` \| [`Element`](../modules/input._internal_.md#element)

Returns the first child that is an element, and null otherwise.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[firstElementChild](input._internal_.ParentNode.md#firstelementchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10411

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[isConnected](input._internal_.ParentNode.md#isconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10048

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[lastChild](input._internal_.ParentNode.md#lastchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10050

___

### lastElementChild

• `Readonly` **lastElementChild**: ``null`` \| [`Element`](../modules/input._internal_.md#element)

Returns the last child that is an element, and null otherwise.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[lastElementChild](input._internal_.ParentNode.md#lastelementchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10413

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[nextSibling](input._internal_.ParentNode.md#nextsibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10052

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[nodeName](input._internal_.ParentNode.md#nodename)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10054

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[nodeType](input._internal_.ParentNode.md#nodetype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10056

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[nodeValue](input._internal_.ParentNode.md#nodevalue)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10057

___

### ownerDocument

• `Readonly` **ownerDocument**: [`Document`](../modules/input._internal_.md#document)

Returns the node document. Returns null for documents.

#### Overrides

[ParentNode](input._internal_.ParentNode.md).[ownerDocument](input._internal_.ParentNode.md#ownerdocument)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4719

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| [`HTMLElement`](../modules/input._internal_.md#htmlelement)

Returns the parent element.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[parentElement](input._internal_.ParentNode.md#parentelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10061

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](input._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[parentNode](input._internal_.ParentNode.md#parentnode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10063

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[previousSibling](input._internal_.ParentNode.md#previoussibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10065

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[textContent](input._internal_.ParentNode.md#textcontent)

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

[ParentNode](input._internal_.ParentNode.md).[addEventListener](input._internal_.ParentNode.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5136

___

### append

▸ **append**(...`nodes`): `void`

Inserts nodes after the last child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/input._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[append](input._internal_.ParentNode.md#append)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10419

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

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[appendChild](input._internal_.ParentNode.md#appendchild)

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

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[cloneNode](input._internal_.ParentNode.md#clonenode)

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

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[compareDocumentPosition](input._internal_.ParentNode.md#comparedocumentposition)

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

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[contains](input._internal_.ParentNode.md#contains)

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

[ParentNode](input._internal_.ParentNode.md).[dispatchEvent](input._internal_.ParentNode.md#dispatchevent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### getElementById

▸ **getElementById**(`elementId`): ``null`` \| [`HTMLElement`](../modules/input._internal_.md#htmlelement)

Returns the first element within node's descendants whose ID is elementId.

#### Parameters

| Name | Type |
| :------ | :------ |
| `elementId` | `string` |

#### Returns

``null`` \| [`HTMLElement`](../modules/input._internal_.md#htmlelement)

#### Overrides

[NonElementParentNode](input._internal_.NonElementParentNode.md).[getElementById](input._internal_.NonElementParentNode.md#getelementbyid)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4720

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

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[getRootNode](input._internal_.ParentNode.md#getrootnode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10075

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[hasChildNodes](input._internal_.ParentNode.md#haschildnodes)

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

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[insertBefore](input._internal_.ParentNode.md#insertbefore)

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

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[isDefaultNamespace](input._internal_.ParentNode.md#isdefaultnamespace)

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

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[isEqualNode](input._internal_.ParentNode.md#isequalnode)

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

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[isSameNode](input._internal_.ParentNode.md#issamenode)

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

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[lookupNamespaceURI](input._internal_.ParentNode.md#lookupnamespaceuri)

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

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[lookupPrefix](input._internal_.ParentNode.md#lookupprefix)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10084

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[normalize](input._internal_.ParentNode.md#normalize)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10086

___

### prepend

▸ **prepend**(...`nodes`): `void`

Inserts nodes before the first child of node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/input._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[prepend](input._internal_.ParentNode.md#prepend)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10425

___

### querySelector

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| [`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md)[`K`]

Returns the first element that is a descendant of node that matches selectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| [`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md)[`K`]

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[querySelector](input._internal_.ParentNode.md#queryselector)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10427

▸ **querySelector**<`K`\>(`selectors`): ``null`` \| [`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md)[`K`]

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

``null`` \| [`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md)[`K`]

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[querySelector](input._internal_.ParentNode.md#queryselector)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10428

▸ **querySelector**<`E`\>(`selectors`): ``null`` \| `E`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](../modules/input._internal_.md#element) = [`Element`](../modules/input._internal_.md#element) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

``null`` \| `E`

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[querySelector](input._internal_.ParentNode.md#queryselector)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10429

___

### querySelectorAll

▸ **querySelectorAll**<`K`\>(`selectors`): [`NodeListOf`](input._internal_.NodeListOf.md)<[`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md)[`K`]\>

Returns all element descendants of node that match selectors.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

[`NodeListOf`](input._internal_.NodeListOf.md)<[`HTMLElementTagNameMap`](input._internal_.HTMLElementTagNameMap.md)[`K`]\>

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[querySelectorAll](input._internal_.ParentNode.md#queryselectorall)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10431

▸ **querySelectorAll**<`K`\>(`selectors`): [`NodeListOf`](input._internal_.NodeListOf.md)<[`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `K` |

#### Returns

[`NodeListOf`](input._internal_.NodeListOf.md)<[`SVGElementTagNameMap`](input._internal_.SVGElementTagNameMap.md)[`K`]\>

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[querySelectorAll](input._internal_.ParentNode.md#queryselectorall)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10432

▸ **querySelectorAll**<`E`\>(`selectors`): [`NodeListOf`](input._internal_.NodeListOf.md)<`E`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `E` | extends [`Element`](../modules/input._internal_.md#element) = [`Element`](../modules/input._internal_.md#element) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `selectors` | `string` |

#### Returns

[`NodeListOf`](input._internal_.NodeListOf.md)<`E`\>

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[querySelectorAll](input._internal_.ParentNode.md#queryselectorall)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10433

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

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[removeChild](input._internal_.ParentNode.md#removechild)

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

[ParentNode](input._internal_.ParentNode.md).[removeEventListener](input._internal_.ParentNode.md#removeeventlistener)

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

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[replaceChild](input._internal_.ParentNode.md#replacechild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10088

___

### replaceChildren

▸ **replaceChildren**(...`nodes`): `void`

Replace all children of node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/input._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

[ParentNode](input._internal_.ParentNode.md).[replaceChildren](input._internal_.ParentNode.md#replacechildren)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10439
