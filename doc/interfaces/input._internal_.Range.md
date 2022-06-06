[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / Range

# Interface: Range

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).Range

A fragment of a document that can contain nodes and parts of text nodes.

## Hierarchy

- [`AbstractRange`](../modules/input._internal_.md#abstractrange)

  ↳ **`Range`**

## Table of contents

### Properties

- [END\_TO\_END](input._internal_.Range.md#end_to_end)
- [END\_TO\_START](input._internal_.Range.md#end_to_start)
- [START\_TO\_END](input._internal_.Range.md#start_to_end)
- [START\_TO\_START](input._internal_.Range.md#start_to_start)
- [collapsed](input._internal_.Range.md#collapsed)
- [commonAncestorContainer](input._internal_.Range.md#commonancestorcontainer)
- [endContainer](input._internal_.Range.md#endcontainer)
- [endOffset](input._internal_.Range.md#endoffset)
- [startContainer](input._internal_.Range.md#startcontainer)
- [startOffset](input._internal_.Range.md#startoffset)

### Methods

- [cloneContents](input._internal_.Range.md#clonecontents)
- [cloneRange](input._internal_.Range.md#clonerange)
- [collapse](input._internal_.Range.md#collapse)
- [compareBoundaryPoints](input._internal_.Range.md#compareboundarypoints)
- [comparePoint](input._internal_.Range.md#comparepoint)
- [createContextualFragment](input._internal_.Range.md#createcontextualfragment)
- [deleteContents](input._internal_.Range.md#deletecontents)
- [detach](input._internal_.Range.md#detach)
- [extractContents](input._internal_.Range.md#extractcontents)
- [getBoundingClientRect](input._internal_.Range.md#getboundingclientrect)
- [getClientRects](input._internal_.Range.md#getclientrects)
- [insertNode](input._internal_.Range.md#insertnode)
- [intersectsNode](input._internal_.Range.md#intersectsnode)
- [isPointInRange](input._internal_.Range.md#ispointinrange)
- [selectNode](input._internal_.Range.md#selectnode)
- [selectNodeContents](input._internal_.Range.md#selectnodecontents)
- [setEnd](input._internal_.Range.md#setend)
- [setEndAfter](input._internal_.Range.md#setendafter)
- [setEndBefore](input._internal_.Range.md#setendbefore)
- [setStart](input._internal_.Range.md#setstart)
- [setStartAfter](input._internal_.Range.md#setstartafter)
- [setStartBefore](input._internal_.Range.md#setstartbefore)
- [surroundContents](input._internal_.Range.md#surroundcontents)
- [toString](input._internal_.Range.md#tostring)

## Properties

### END\_TO\_END

• `Readonly` **END\_TO\_END**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11462

___

### END\_TO\_START

• `Readonly` **END\_TO\_START**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11463

___

### START\_TO\_END

• `Readonly` **START\_TO\_END**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11464

___

### START\_TO\_START

• `Readonly` **START\_TO\_START**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11465

___

### collapsed

• `Readonly` **collapsed**: `boolean`

Returns true if range is collapsed, and false otherwise.

#### Inherited from

AbstractRange.collapsed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2000

___

### commonAncestorContainer

• `Readonly` **commonAncestorContainer**: [`Node`](../modules/input._internal_.md#node)

Returns the node, furthest away from the document, that is an ancestor of both range's start node and end node.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11435

___

### endContainer

• `Readonly` **endContainer**: [`Node`](../modules/input._internal_.md#node)

Returns range's end node.

#### Inherited from

AbstractRange.endContainer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2002

___

### endOffset

• `Readonly` **endOffset**: `number`

Returns range's end offset.

#### Inherited from

AbstractRange.endOffset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2004

___

### startContainer

• `Readonly` **startContainer**: [`Node`](../modules/input._internal_.md#node)

Returns range's start node.

#### Inherited from

AbstractRange.startContainer

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2006

___

### startOffset

• `Readonly` **startOffset**: `number`

Returns range's start offset.

#### Inherited from

AbstractRange.startOffset

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2008

## Methods

### cloneContents

▸ **cloneContents**(): [`DocumentFragment`](../modules/input._internal_.md#documentfragment)

#### Returns

[`DocumentFragment`](../modules/input._internal_.md#documentfragment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11436

___

### cloneRange

▸ **cloneRange**(): [`Range`](../modules/input._internal_.md#range)

#### Returns

[`Range`](../modules/input._internal_.md#range)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11437

___

### collapse

▸ **collapse**(`toStart?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `toStart?` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11438

___

### compareBoundaryPoints

▸ **compareBoundaryPoints**(`how`, `sourceRange`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `how` | `number` |
| `sourceRange` | [`Range`](../modules/input._internal_.md#range) |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11439

___

### comparePoint

▸ **comparePoint**(`node`, `offset`): `number`

Returns −1 if the point is before the range, 0 if the point is in the range, and 1 if the point is after the range.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/input._internal_.md#node) |
| `offset` | `number` |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11441

___

### createContextualFragment

▸ **createContextualFragment**(`fragment`): [`DocumentFragment`](../modules/input._internal_.md#documentfragment)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fragment` | `string` |

#### Returns

[`DocumentFragment`](../modules/input._internal_.md#documentfragment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11442

___

### deleteContents

▸ **deleteContents**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11443

___

### detach

▸ **detach**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11444

___

### extractContents

▸ **extractContents**(): [`DocumentFragment`](../modules/input._internal_.md#documentfragment)

#### Returns

[`DocumentFragment`](../modules/input._internal_.md#documentfragment)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11445

___

### getBoundingClientRect

▸ **getBoundingClientRect**(): [`DOMRect`](../modules/input._internal_.md#domrect)

#### Returns

[`DOMRect`](../modules/input._internal_.md#domrect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11446

___

### getClientRects

▸ **getClientRects**(): [`DOMRectList`](../modules/input._internal_.md#domrectlist)

#### Returns

[`DOMRectList`](../modules/input._internal_.md#domrectlist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11447

___

### insertNode

▸ **insertNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/input._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11448

___

### intersectsNode

▸ **intersectsNode**(`node`): `boolean`

Returns whether range intersects node.

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/input._internal_.md#node) |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11450

___

### isPointInRange

▸ **isPointInRange**(`node`, `offset`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/input._internal_.md#node) |
| `offset` | `number` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11451

___

### selectNode

▸ **selectNode**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/input._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11452

___

### selectNodeContents

▸ **selectNodeContents**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/input._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11453

___

### setEnd

▸ **setEnd**(`node`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/input._internal_.md#node) |
| `offset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11454

___

### setEndAfter

▸ **setEndAfter**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/input._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11455

___

### setEndBefore

▸ **setEndBefore**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/input._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11456

___

### setStart

▸ **setStart**(`node`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/input._internal_.md#node) |
| `offset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11457

___

### setStartAfter

▸ **setStartAfter**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/input._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11458

___

### setStartBefore

▸ **setStartBefore**(`node`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `node` | [`Node`](../modules/input._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11459

___

### surroundContents

▸ **surroundContents**(`newParent`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `newParent` | [`Node`](../modules/input._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11460

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11461
