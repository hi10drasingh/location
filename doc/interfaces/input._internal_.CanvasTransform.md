[Droom Google Location Plugin - v1.0.16](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / CanvasTransform

# Interface: CanvasTransform

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).CanvasTransform

## Hierarchy

- **`CanvasTransform`**

  ↳ [`CanvasRenderingContext2D`](input._internal_.CanvasRenderingContext2D.md)

## Table of contents

### Methods

- [getTransform](input._internal_.CanvasTransform.md#gettransform)
- [resetTransform](input._internal_.CanvasTransform.md#resettransform)
- [rotate](input._internal_.CanvasTransform.md#rotate)
- [scale](input._internal_.CanvasTransform.md#scale)
- [setTransform](input._internal_.CanvasTransform.md#settransform)
- [transform](input._internal_.CanvasTransform.md#transform)
- [translate](input._internal_.CanvasTransform.md#translate)

## Methods

### getTransform

▸ **getTransform**(): [`DOMMatrix`](../modules/input._internal_.md#dommatrix)

#### Returns

[`DOMMatrix`](../modules/input._internal_.md#dommatrix)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3518

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3519

___

### rotate

▸ **rotate**(`angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3520

___

### scale

▸ **scale**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3521

___

### setTransform

▸ **setTransform**(`a`, `b`, `c`, `d`, `e`, `f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `c` | `number` |
| `d` | `number` |
| `e` | `number` |
| `f` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3522

▸ **setTransform**(`transform?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform?` | [`DOMMatrix2DInit`](input._internal_.DOMMatrix2DInit.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3523

___

### transform

▸ **transform**(`a`, `b`, `c`, `d`, `e`, `f`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `a` | `number` |
| `b` | `number` |
| `c` | `number` |
| `d` | `number` |
| `e` | `number` |
| `f` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3524

___

### translate

▸ **translate**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3525
