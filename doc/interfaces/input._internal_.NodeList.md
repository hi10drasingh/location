[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / NodeList

# Interface: NodeList

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).NodeList

NodeList objects are collections of nodes, usually returned by properties such as Node.childNodes and methods such as document.querySelectorAll().

## Indexable

▪ [index: `number`]: [`Node`](../modules/input._internal_.md#node)

## Table of contents

### Properties

- [length](input._internal_.NodeList.md#length)

### Methods

- [forEach](input._internal_.NodeList.md#foreach)
- [item](input._internal_.NodeList.md#item)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of nodes in the collection.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10179

## Methods

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each node in an list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: [`Node`](../modules/input._internal_.md#node), `key`: `number`, `parent`: [`NodeList`](../modules/input._internal_.md#nodelist)) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10187

___

### item

▸ **item**(`index`): ``null`` \| [`Node`](../modules/input._internal_.md#node)

Returns the node with index index from the collection. The nodes are sorted in tree order.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`Node`](../modules/input._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10181
