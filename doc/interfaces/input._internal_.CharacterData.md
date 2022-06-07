[Droom Google Location Plugin - v1.0.15](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / CharacterData

# Interface: CharacterData

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).CharacterData

The CharacterData abstract interface represents a Node object that contains characters. This is an abstract interface, meaning there aren't any object of type CharacterData: it is implemented by other interfaces, like Text, Comment, or ProcessingInstruction which aren't abstract.

## Hierarchy

- [`Node`](../modules/input._internal_.md#node)

- [`ChildNode`](input._internal_.ChildNode.md)

- [`NonDocumentTypeChildNode`](input._internal_.NonDocumentTypeChildNode.md)

  ↳ **`CharacterData`**

## Table of contents

### Properties

- [ATTRIBUTE\_NODE](input._internal_.CharacterData.md#attribute_node)
- [CDATA\_SECTION\_NODE](input._internal_.CharacterData.md#cdata_section_node)
- [COMMENT\_NODE](input._internal_.CharacterData.md#comment_node)
- [DOCUMENT\_FRAGMENT\_NODE](input._internal_.CharacterData.md#document_fragment_node)
- [DOCUMENT\_NODE](input._internal_.CharacterData.md#document_node)
- [DOCUMENT\_POSITION\_CONTAINED\_BY](input._internal_.CharacterData.md#document_position_contained_by)
- [DOCUMENT\_POSITION\_CONTAINS](input._internal_.CharacterData.md#document_position_contains)
- [DOCUMENT\_POSITION\_DISCONNECTED](input._internal_.CharacterData.md#document_position_disconnected)
- [DOCUMENT\_POSITION\_FOLLOWING](input._internal_.CharacterData.md#document_position_following)
- [DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC](input._internal_.CharacterData.md#document_position_implementation_specific)
- [DOCUMENT\_POSITION\_PRECEDING](input._internal_.CharacterData.md#document_position_preceding)
- [DOCUMENT\_TYPE\_NODE](input._internal_.CharacterData.md#document_type_node)
- [ELEMENT\_NODE](input._internal_.CharacterData.md#element_node)
- [ENTITY\_NODE](input._internal_.CharacterData.md#entity_node)
- [ENTITY\_REFERENCE\_NODE](input._internal_.CharacterData.md#entity_reference_node)
- [NOTATION\_NODE](input._internal_.CharacterData.md#notation_node)
- [PROCESSING\_INSTRUCTION\_NODE](input._internal_.CharacterData.md#processing_instruction_node)
- [TEXT\_NODE](input._internal_.CharacterData.md#text_node)
- [baseURI](input._internal_.CharacterData.md#baseuri)
- [childNodes](input._internal_.CharacterData.md#childnodes)
- [data](input._internal_.CharacterData.md#data)
- [firstChild](input._internal_.CharacterData.md#firstchild)
- [isConnected](input._internal_.CharacterData.md#isconnected)
- [lastChild](input._internal_.CharacterData.md#lastchild)
- [length](input._internal_.CharacterData.md#length)
- [nextElementSibling](input._internal_.CharacterData.md#nextelementsibling)
- [nextSibling](input._internal_.CharacterData.md#nextsibling)
- [nodeName](input._internal_.CharacterData.md#nodename)
- [nodeType](input._internal_.CharacterData.md#nodetype)
- [nodeValue](input._internal_.CharacterData.md#nodevalue)
- [ownerDocument](input._internal_.CharacterData.md#ownerdocument)
- [parentElement](input._internal_.CharacterData.md#parentelement)
- [parentNode](input._internal_.CharacterData.md#parentnode)
- [previousElementSibling](input._internal_.CharacterData.md#previouselementsibling)
- [previousSibling](input._internal_.CharacterData.md#previoussibling)
- [textContent](input._internal_.CharacterData.md#textcontent)

### Methods

- [addEventListener](input._internal_.CharacterData.md#addeventlistener)
- [after](input._internal_.CharacterData.md#after)
- [appendChild](input._internal_.CharacterData.md#appendchild)
- [appendData](input._internal_.CharacterData.md#appenddata)
- [before](input._internal_.CharacterData.md#before)
- [cloneNode](input._internal_.CharacterData.md#clonenode)
- [compareDocumentPosition](input._internal_.CharacterData.md#comparedocumentposition)
- [contains](input._internal_.CharacterData.md#contains)
- [deleteData](input._internal_.CharacterData.md#deletedata)
- [dispatchEvent](input._internal_.CharacterData.md#dispatchevent)
- [getRootNode](input._internal_.CharacterData.md#getrootnode)
- [hasChildNodes](input._internal_.CharacterData.md#haschildnodes)
- [insertBefore](input._internal_.CharacterData.md#insertbefore)
- [insertData](input._internal_.CharacterData.md#insertdata)
- [isDefaultNamespace](input._internal_.CharacterData.md#isdefaultnamespace)
- [isEqualNode](input._internal_.CharacterData.md#isequalnode)
- [isSameNode](input._internal_.CharacterData.md#issamenode)
- [lookupNamespaceURI](input._internal_.CharacterData.md#lookupnamespaceuri)
- [lookupPrefix](input._internal_.CharacterData.md#lookupprefix)
- [normalize](input._internal_.CharacterData.md#normalize)
- [remove](input._internal_.CharacterData.md#remove)
- [removeChild](input._internal_.CharacterData.md#removechild)
- [removeEventListener](input._internal_.CharacterData.md#removeeventlistener)
- [replaceChild](input._internal_.CharacterData.md#replacechild)
- [replaceData](input._internal_.CharacterData.md#replacedata)
- [replaceWith](input._internal_.CharacterData.md#replacewith)
- [substringData](input._internal_.CharacterData.md#substringdata)

## Properties

### ATTRIBUTE\_NODE

• `Readonly` **ATTRIBUTE\_NODE**: `number`

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[ATTRIBUTE_NODE](input._internal_.ChildNode.md#attribute_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10089

___

### CDATA\_SECTION\_NODE

• `Readonly` **CDATA\_SECTION\_NODE**: `number`

node is a CDATASection node.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[CDATA_SECTION_NODE](input._internal_.ChildNode.md#cdata_section_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10091

___

### COMMENT\_NODE

• `Readonly` **COMMENT\_NODE**: `number`

node is a Comment node.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[COMMENT_NODE](input._internal_.ChildNode.md#comment_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10093

___

### DOCUMENT\_FRAGMENT\_NODE

• `Readonly` **DOCUMENT\_FRAGMENT\_NODE**: `number`

node is a DocumentFragment node.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[DOCUMENT_FRAGMENT_NODE](input._internal_.ChildNode.md#document_fragment_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10095

___

### DOCUMENT\_NODE

• `Readonly` **DOCUMENT\_NODE**: `number`

node is a document.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[DOCUMENT_NODE](input._internal_.ChildNode.md#document_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10097

___

### DOCUMENT\_POSITION\_CONTAINED\_BY

• `Readonly` **DOCUMENT\_POSITION\_CONTAINED\_BY**: `number`

Set when other is a descendant of node.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[DOCUMENT_POSITION_CONTAINED_BY](input._internal_.ChildNode.md#document_position_contained_by)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10099

___

### DOCUMENT\_POSITION\_CONTAINS

• `Readonly` **DOCUMENT\_POSITION\_CONTAINS**: `number`

Set when other is an ancestor of node.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[DOCUMENT_POSITION_CONTAINS](input._internal_.ChildNode.md#document_position_contains)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10101

___

### DOCUMENT\_POSITION\_DISCONNECTED

• `Readonly` **DOCUMENT\_POSITION\_DISCONNECTED**: `number`

Set when node and other are not in the same tree.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[DOCUMENT_POSITION_DISCONNECTED](input._internal_.ChildNode.md#document_position_disconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10103

___

### DOCUMENT\_POSITION\_FOLLOWING

• `Readonly` **DOCUMENT\_POSITION\_FOLLOWING**: `number`

Set when other is following node.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[DOCUMENT_POSITION_FOLLOWING](input._internal_.ChildNode.md#document_position_following)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10105

___

### DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC

• `Readonly` **DOCUMENT\_POSITION\_IMPLEMENTATION\_SPECIFIC**: `number`

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC](input._internal_.ChildNode.md#document_position_implementation_specific)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10106

___

### DOCUMENT\_POSITION\_PRECEDING

• `Readonly` **DOCUMENT\_POSITION\_PRECEDING**: `number`

Set when other is preceding node.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[DOCUMENT_POSITION_PRECEDING](input._internal_.ChildNode.md#document_position_preceding)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10108

___

### DOCUMENT\_TYPE\_NODE

• `Readonly` **DOCUMENT\_TYPE\_NODE**: `number`

node is a doctype.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[DOCUMENT_TYPE_NODE](input._internal_.ChildNode.md#document_type_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10110

___

### ELEMENT\_NODE

• `Readonly` **ELEMENT\_NODE**: `number`

node is an element.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[ELEMENT_NODE](input._internal_.ChildNode.md#element_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10112

___

### ENTITY\_NODE

• `Readonly` **ENTITY\_NODE**: `number`

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[ENTITY_NODE](input._internal_.ChildNode.md#entity_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10113

___

### ENTITY\_REFERENCE\_NODE

• `Readonly` **ENTITY\_REFERENCE\_NODE**: `number`

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[ENTITY_REFERENCE_NODE](input._internal_.ChildNode.md#entity_reference_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10114

___

### NOTATION\_NODE

• `Readonly` **NOTATION\_NODE**: `number`

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[NOTATION_NODE](input._internal_.ChildNode.md#notation_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10115

___

### PROCESSING\_INSTRUCTION\_NODE

• `Readonly` **PROCESSING\_INSTRUCTION\_NODE**: `number`

node is a ProcessingInstruction node.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[PROCESSING_INSTRUCTION_NODE](input._internal_.ChildNode.md#processing_instruction_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10117

___

### TEXT\_NODE

• `Readonly` **TEXT\_NODE**: `number`

node is a Text node.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[TEXT_NODE](input._internal_.ChildNode.md#text_node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10119

___

### baseURI

• `Readonly` **baseURI**: `string`

Returns node's node document's document base URL.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[baseURI](input._internal_.ChildNode.md#baseuri)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10042

___

### childNodes

• `Readonly` **childNodes**: [`NodeListOf`](input._internal_.NodeListOf.md)<[`ChildNode`](input._internal_.ChildNode.md)\>

Returns the children.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[childNodes](input._internal_.ChildNode.md#childnodes)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10044

___

### data

• **data**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3553

___

### firstChild

• `Readonly` **firstChild**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the first child.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[firstChild](input._internal_.ChildNode.md#firstchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10046

___

### isConnected

• `Readonly` **isConnected**: `boolean`

Returns true if node is connected and false otherwise.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[isConnected](input._internal_.ChildNode.md#isconnected)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10048

___

### lastChild

• `Readonly` **lastChild**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the last child.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[lastChild](input._internal_.ChildNode.md#lastchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10050

___

### length

• `Readonly` **length**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3554

___

### nextElementSibling

• `Readonly` **nextElementSibling**: ``null`` \| [`Element`](../modules/input._internal_.md#element)

Returns the first following sibling that is an element, and null otherwise.

#### Inherited from

[NonDocumentTypeChildNode](input._internal_.NonDocumentTypeChildNode.md).[nextElementSibling](input._internal_.NonDocumentTypeChildNode.md#nextelementsibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10209

___

### nextSibling

• `Readonly` **nextSibling**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the next sibling.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[nextSibling](input._internal_.ChildNode.md#nextsibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10052

___

### nodeName

• `Readonly` **nodeName**: `string`

Returns a string appropriate for the type of node.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[nodeName](input._internal_.ChildNode.md#nodename)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10054

___

### nodeType

• `Readonly` **nodeType**: `number`

Returns the type of node.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[nodeType](input._internal_.ChildNode.md#nodetype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10056

___

### nodeValue

• **nodeValue**: ``null`` \| `string`

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[nodeValue](input._internal_.ChildNode.md#nodevalue)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10057

___

### ownerDocument

• `Readonly` **ownerDocument**: [`Document`](../modules/input._internal_.md#document)

Returns the node document. Returns null for documents.

#### Overrides

[ChildNode](input._internal_.ChildNode.md).[ownerDocument](input._internal_.ChildNode.md#ownerdocument)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3555

___

### parentElement

• `Readonly` **parentElement**: ``null`` \| [`HTMLElement`](../modules/input._internal_.md#htmlelement)

Returns the parent element.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[parentElement](input._internal_.ChildNode.md#parentelement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10061

___

### parentNode

• `Readonly` **parentNode**: ``null`` \| [`ParentNode`](input._internal_.ParentNode.md)

Returns the parent.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[parentNode](input._internal_.ChildNode.md#parentnode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10063

___

### previousElementSibling

• `Readonly` **previousElementSibling**: ``null`` \| [`Element`](../modules/input._internal_.md#element)

Returns the first preceding sibling that is an element, and null otherwise.

#### Inherited from

[NonDocumentTypeChildNode](input._internal_.NonDocumentTypeChildNode.md).[previousElementSibling](input._internal_.NonDocumentTypeChildNode.md#previouselementsibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10211

___

### previousSibling

• `Readonly` **previousSibling**: ``null`` \| [`ChildNode`](input._internal_.ChildNode.md)

Returns the previous sibling.

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[previousSibling](input._internal_.ChildNode.md#previoussibling)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10065

___

### textContent

• **textContent**: ``null`` \| `string`

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[textContent](input._internal_.ChildNode.md#textcontent)

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

[ChildNode](input._internal_.ChildNode.md).[addEventListener](input._internal_.ChildNode.md#addeventlistener)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5136

___

### after

▸ **after**(...`nodes`): `void`

Inserts nodes just after node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/input._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[after](input._internal_.ChildNode.md#after)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3574

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

[ChildNode](input._internal_.ChildNode.md).[appendChild](input._internal_.ChildNode.md#appendchild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10067

___

### appendData

▸ **appendData**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3556

___

### before

▸ **before**(...`nodes`): `void`

Inserts nodes just before node, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/input._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[before](input._internal_.ChildNode.md#before)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3580

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

[ChildNode](input._internal_.ChildNode.md).[cloneNode](input._internal_.ChildNode.md#clonenode)

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

[ChildNode](input._internal_.ChildNode.md).[compareDocumentPosition](input._internal_.ChildNode.md#comparedocumentposition)

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

[ChildNode](input._internal_.ChildNode.md).[contains](input._internal_.ChildNode.md#contains)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10073

___

### deleteData

▸ **deleteData**(`offset`, `count`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3557

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

[ChildNode](input._internal_.ChildNode.md).[dispatchEvent](input._internal_.ChildNode.md#dispatchevent)

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

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[getRootNode](input._internal_.ChildNode.md#getrootnode)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10075

___

### hasChildNodes

▸ **hasChildNodes**(): `boolean`

Returns whether node has children.

#### Returns

`boolean`

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[hasChildNodes](input._internal_.ChildNode.md#haschildnodes)

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

[ChildNode](input._internal_.ChildNode.md).[insertBefore](input._internal_.ChildNode.md#insertbefore)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10078

___

### insertData

▸ **insertData**(`offset`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `data` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3558

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

[ChildNode](input._internal_.ChildNode.md).[isDefaultNamespace](input._internal_.ChildNode.md#isdefaultnamespace)

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

[ChildNode](input._internal_.ChildNode.md).[isEqualNode](input._internal_.ChildNode.md#isequalnode)

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

[ChildNode](input._internal_.ChildNode.md).[isSameNode](input._internal_.ChildNode.md#issamenode)

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

[ChildNode](input._internal_.ChildNode.md).[lookupNamespaceURI](input._internal_.ChildNode.md#lookupnamespaceuri)

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

[ChildNode](input._internal_.ChildNode.md).[lookupPrefix](input._internal_.ChildNode.md#lookupprefix)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10084

___

### normalize

▸ **normalize**(): `void`

Removes empty exclusive Text nodes and concatenates the data of remaining contiguous exclusive Text nodes into the first of their nodes.

#### Returns

`void`

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[normalize](input._internal_.ChildNode.md#normalize)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10086

___

### remove

▸ **remove**(): `void`

Removes node.

#### Returns

`void`

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[remove](input._internal_.ChildNode.md#remove)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3582

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

[ChildNode](input._internal_.ChildNode.md).[removeChild](input._internal_.ChildNode.md#removechild)

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

[ChildNode](input._internal_.ChildNode.md).[removeEventListener](input._internal_.ChildNode.md#removeeventlistener)

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

[ChildNode](input._internal_.ChildNode.md).[replaceChild](input._internal_.ChildNode.md#replacechild)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10088

___

### replaceData

▸ **replaceData**(`offset`, `count`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `count` | `number` |
| `data` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3559

___

### replaceWith

▸ **replaceWith**(...`nodes`): `void`

Replaces node with nodes, while replacing strings in nodes with equivalent Text nodes.

Throws a "HierarchyRequestError" DOMException if the constraints of the node tree are violated.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...nodes` | (`string` \| [`Node`](../modules/input._internal_.md#node))[] |

#### Returns

`void`

#### Inherited from

[ChildNode](input._internal_.ChildNode.md).[replaceWith](input._internal_.ChildNode.md#replacewith)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3588

___

### substringData

▸ **substringData**(`offset`, `count`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `offset` | `number` |
| `count` | `number` |

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3560
