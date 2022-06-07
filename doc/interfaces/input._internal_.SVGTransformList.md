[Droom Google Location Plugin - v1.0.15](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / SVGTransformList

# Interface: SVGTransformList

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).SVGTransformList

The SVGTransformList defines a list of SVGTransform objects.

## Indexable

▪ [index: `number`]: [`SVGTransform`](../modules/input._internal_.md#svgtransform)

## Table of contents

### Properties

- [length](input._internal_.SVGTransformList.md#length)
- [numberOfItems](input._internal_.SVGTransformList.md#numberofitems)

### Methods

- [appendItem](input._internal_.SVGTransformList.md#appenditem)
- [clear](input._internal_.SVGTransformList.md#clear)
- [consolidate](input._internal_.SVGTransformList.md#consolidate)
- [createSVGTransformFromMatrix](input._internal_.SVGTransformList.md#createsvgtransformfrommatrix)
- [getItem](input._internal_.SVGTransformList.md#getitem)
- [initialize](input._internal_.SVGTransformList.md#initialize)
- [insertItemBefore](input._internal_.SVGTransformList.md#insertitembefore)
- [removeItem](input._internal_.SVGTransformList.md#removeitem)
- [replaceItem](input._internal_.SVGTransformList.md#replaceitem)

## Properties

### length

• `Readonly` **length**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13287

___

### numberOfItems

• `Readonly` **numberOfItems**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13288

## Methods

### appendItem

▸ **appendItem**(`newItem`): [`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newItem` | [`SVGTransform`](../modules/input._internal_.md#svgtransform) |

#### Returns

[`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13289

___

### clear

▸ **clear**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13290

___

### consolidate

▸ **consolidate**(): ``null`` \| [`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Returns

``null`` \| [`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13291

___

### createSVGTransformFromMatrix

▸ **createSVGTransformFromMatrix**(`matrix?`): [`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Parameters

| Name | Type |
| :------ | :------ |
| `matrix?` | [`DOMMatrix2DInit`](input._internal_.DOMMatrix2DInit.md) |

#### Returns

[`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13292

___

### getItem

▸ **getItem**(`index`): [`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13293

___

### initialize

▸ **initialize**(`newItem`): [`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newItem` | [`SVGTransform`](../modules/input._internal_.md#svgtransform) |

#### Returns

[`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13294

___

### insertItemBefore

▸ **insertItemBefore**(`newItem`, `index`): [`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newItem` | [`SVGTransform`](../modules/input._internal_.md#svgtransform) |
| `index` | `number` |

#### Returns

[`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13295

___

### removeItem

▸ **removeItem**(`index`): [`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

[`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13296

___

### replaceItem

▸ **replaceItem**(`newItem`, `index`): [`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Parameters

| Name | Type |
| :------ | :------ |
| `newItem` | [`SVGTransform`](../modules/input._internal_.md#svgtransform) |
| `index` | `number` |

#### Returns

[`SVGTransform`](../modules/input._internal_.md#svgtransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13297
