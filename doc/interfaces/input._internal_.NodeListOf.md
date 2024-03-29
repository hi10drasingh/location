[Droom Google Location Plugin - v1.0.16](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / NodeListOf

# Interface: NodeListOf<TNode\>

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).NodeListOf

## Type parameters

| Name | Type |
| :------ | :------ |
| `TNode` | extends [`Node`](../modules/input._internal_.md#node) |

## Hierarchy

- [`NodeList`](../modules/input._internal_.md#nodelist)

  ↳ **`NodeListOf`**

## Indexable

▪ [index: `number`]: `TNode`

## Table of contents

### Properties

- [length](input._internal_.NodeListOf.md#length)

### Methods

- [forEach](input._internal_.NodeListOf.md#foreach)
- [item](input._internal_.NodeListOf.md#item)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of nodes in the collection.

#### Inherited from

NodeList.length

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10179

## Methods

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

Performs the specified action for each node in an list.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `callbackfn` | (`value`: `TNode`, `key`: `number`, `parent`: [`NodeListOf`](input._internal_.NodeListOf.md)<`TNode`\>) => `void` | A function that accepts up to three arguments. forEach calls the callbackfn function one time for each element in the list. |
| `thisArg?` | `any` | An object to which the this keyword can refer in the callbackfn function. If thisArg is omitted, undefined is used as the this value. |

#### Returns

`void`

#### Overrides

NodeList.forEach

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10203

___

### item

▸ **item**(`index`): `TNode`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`TNode`

#### Overrides

NodeList.item

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10197
