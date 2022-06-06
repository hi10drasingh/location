[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / RadioNodeList

# Interface: RadioNodeList

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).RadioNodeList

## Hierarchy

- [`NodeList`](../modules/input._internal_.md#nodelist)

  ↳ **`RadioNodeList`**

## Table of contents

### Properties

- [length](input._internal_.RadioNodeList.md#length)
- [value](input._internal_.RadioNodeList.md#value)

### Methods

- [forEach](input._internal_.RadioNodeList.md#foreach)
- [item](input._internal_.RadioNodeList.md#item)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of nodes in the collection.

#### Inherited from

NodeList.length

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10179

___

### value

• **value**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11424

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

#### Inherited from

NodeList.forEach

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

#### Inherited from

NodeList.item

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10181
