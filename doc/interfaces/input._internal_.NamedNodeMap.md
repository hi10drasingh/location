[my-webpack-project](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / NamedNodeMap

# Interface: NamedNodeMap

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).NamedNodeMap

A collection of Attr objects. Objects inside a NamedNodeMap are not in any particular order, unlike NodeList, although they may be accessed by an index as in an array.

## Indexable

▪ [index: `number`]: [`Attr`](../modules/input._internal_.md#attr)

## Table of contents

### Properties

- [length](input._internal_.NamedNodeMap.md#length)

### Methods

- [getNamedItem](input._internal_.NamedNodeMap.md#getnameditem)
- [getNamedItemNS](input._internal_.NamedNodeMap.md#getnameditemns)
- [item](input._internal_.NamedNodeMap.md#item)
- [removeNamedItem](input._internal_.NamedNodeMap.md#removenameditem)
- [removeNamedItemNS](input._internal_.NamedNodeMap.md#removenameditemns)
- [setNamedItem](input._internal_.NamedNodeMap.md#setnameditem)
- [setNamedItemNS](input._internal_.NamedNodeMap.md#setnameditemns)

## Properties

### length

• `Readonly` **length**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9898

## Methods

### getNamedItem

▸ **getNamedItem**(`qualifiedName`): ``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9899

___

### getNamedItemNS

▸ **getNamedItemNS**(`namespace`, `localName`): ``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9900

___

### item

▸ **item**(`index`): ``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9901

___

### removeNamedItem

▸ **removeNamedItem**(`qualifiedName`): [`Attr`](../modules/input._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `qualifiedName` | `string` |

#### Returns

[`Attr`](../modules/input._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9902

___

### removeNamedItemNS

▸ **removeNamedItemNS**(`namespace`, `localName`): [`Attr`](../modules/input._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `namespace` | ``null`` \| `string` |
| `localName` | `string` |

#### Returns

[`Attr`](../modules/input._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9903

___

### setNamedItem

▸ **setNamedItem**(`attr`): ``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/input._internal_.md#attr) |

#### Returns

``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9904

___

### setNamedItemNS

▸ **setNamedItemNS**(`attr`): ``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | [`Attr`](../modules/input._internal_.md#attr) |

#### Returns

``null`` \| [`Attr`](../modules/input._internal_.md#attr)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9905
