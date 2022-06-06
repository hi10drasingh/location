[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / CanvasFillStrokeStyles

# Interface: CanvasFillStrokeStyles

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).CanvasFillStrokeStyles

## Hierarchy

- **`CanvasFillStrokeStyles`**

  ↳ [`CanvasRenderingContext2D`](input._internal_.CanvasRenderingContext2D.md)

## Table of contents

### Properties

- [fillStyle](input._internal_.CanvasFillStrokeStyles.md#fillstyle)
- [strokeStyle](input._internal_.CanvasFillStrokeStyles.md#strokestyle)

### Methods

- [createConicGradient](input._internal_.CanvasFillStrokeStyles.md#createconicgradient)
- [createLinearGradient](input._internal_.CanvasFillStrokeStyles.md#createlineargradient)
- [createPattern](input._internal_.CanvasFillStrokeStyles.md#createpattern)
- [createRadialGradient](input._internal_.CanvasFillStrokeStyles.md#createradialgradient)

## Properties

### fillStyle

• **fillStyle**: `string` \| [`CanvasGradient`](../modules/input._internal_.md#canvasgradient) \| [`CanvasPattern`](../modules/input._internal_.md#canvaspattern)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3402

___

### strokeStyle

• **strokeStyle**: `string` \| [`CanvasGradient`](../modules/input._internal_.md#canvasgradient) \| [`CanvasPattern`](../modules/input._internal_.md#canvaspattern)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3403

## Methods

### createConicGradient

▸ **createConicGradient**(`startAngle`, `x`, `y`): [`CanvasGradient`](../modules/input._internal_.md#canvasgradient)

#### Parameters

| Name | Type |
| :------ | :------ |
| `startAngle` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

[`CanvasGradient`](../modules/input._internal_.md#canvasgradient)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3404

___

### createLinearGradient

▸ **createLinearGradient**(`x0`, `y0`, `x1`, `y1`): [`CanvasGradient`](../modules/input._internal_.md#canvasgradient)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x0` | `number` |
| `y0` | `number` |
| `x1` | `number` |
| `y1` | `number` |

#### Returns

[`CanvasGradient`](../modules/input._internal_.md#canvasgradient)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3405

___

### createPattern

▸ **createPattern**(`image`, `repetition`): ``null`` \| [`CanvasPattern`](../modules/input._internal_.md#canvaspattern)

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/input._internal_.md#canvasimagesource) |
| `repetition` | ``null`` \| `string` |

#### Returns

``null`` \| [`CanvasPattern`](../modules/input._internal_.md#canvaspattern)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3406

___

### createRadialGradient

▸ **createRadialGradient**(`x0`, `y0`, `r0`, `x1`, `y1`, `r1`): [`CanvasGradient`](../modules/input._internal_.md#canvasgradient)

#### Parameters

| Name | Type |
| :------ | :------ |
| `x0` | `number` |
| `y0` | `number` |
| `r0` | `number` |
| `x1` | `number` |
| `y1` | `number` |
| `r1` | `number` |

#### Returns

[`CanvasGradient`](../modules/input._internal_.md#canvasgradient)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3407
