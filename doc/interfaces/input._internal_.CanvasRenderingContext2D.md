[Droom Google Location Plugin - v1.0.8](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / CanvasRenderingContext2D

# Interface: CanvasRenderingContext2D

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).CanvasRenderingContext2D

The CanvasRenderingContext2D interface, part of the Canvas API, provides the 2D rendering context for the drawing surface of a <canvas> element. It is used for drawing shapes, text, images, and other objects.

## Hierarchy

- [`CanvasCompositing`](input._internal_.CanvasCompositing.md)

- [`CanvasDrawImage`](input._internal_.CanvasDrawImage.md)

- [`CanvasDrawPath`](input._internal_.CanvasDrawPath.md)

- [`CanvasFillStrokeStyles`](input._internal_.CanvasFillStrokeStyles.md)

- [`CanvasFilters`](input._internal_.CanvasFilters.md)

- [`CanvasImageData`](input._internal_.CanvasImageData.md)

- [`CanvasImageSmoothing`](input._internal_.CanvasImageSmoothing.md)

- [`CanvasPath`](input._internal_.CanvasPath.md)

- [`CanvasPathDrawingStyles`](input._internal_.CanvasPathDrawingStyles.md)

- [`CanvasRect`](input._internal_.CanvasRect.md)

- [`CanvasShadowStyles`](input._internal_.CanvasShadowStyles.md)

- [`CanvasState`](input._internal_.CanvasState.md)

- [`CanvasText`](input._internal_.CanvasText.md)

- [`CanvasTextDrawingStyles`](input._internal_.CanvasTextDrawingStyles.md)

- [`CanvasTransform`](input._internal_.CanvasTransform.md)

- [`CanvasUserInterface`](input._internal_.CanvasUserInterface.md)

  ↳ **`CanvasRenderingContext2D`**

## Table of contents

### Properties

- [canvas](input._internal_.CanvasRenderingContext2D.md#canvas)
- [direction](input._internal_.CanvasRenderingContext2D.md#direction)
- [fillStyle](input._internal_.CanvasRenderingContext2D.md#fillstyle)
- [filter](input._internal_.CanvasRenderingContext2D.md#filter)
- [font](input._internal_.CanvasRenderingContext2D.md#font)
- [globalAlpha](input._internal_.CanvasRenderingContext2D.md#globalalpha)
- [globalCompositeOperation](input._internal_.CanvasRenderingContext2D.md#globalcompositeoperation)
- [imageSmoothingEnabled](input._internal_.CanvasRenderingContext2D.md#imagesmoothingenabled)
- [imageSmoothingQuality](input._internal_.CanvasRenderingContext2D.md#imagesmoothingquality)
- [lineCap](input._internal_.CanvasRenderingContext2D.md#linecap)
- [lineDashOffset](input._internal_.CanvasRenderingContext2D.md#linedashoffset)
- [lineJoin](input._internal_.CanvasRenderingContext2D.md#linejoin)
- [lineWidth](input._internal_.CanvasRenderingContext2D.md#linewidth)
- [miterLimit](input._internal_.CanvasRenderingContext2D.md#miterlimit)
- [shadowBlur](input._internal_.CanvasRenderingContext2D.md#shadowblur)
- [shadowColor](input._internal_.CanvasRenderingContext2D.md#shadowcolor)
- [shadowOffsetX](input._internal_.CanvasRenderingContext2D.md#shadowoffsetx)
- [shadowOffsetY](input._internal_.CanvasRenderingContext2D.md#shadowoffsety)
- [strokeStyle](input._internal_.CanvasRenderingContext2D.md#strokestyle)
- [textAlign](input._internal_.CanvasRenderingContext2D.md#textalign)
- [textBaseline](input._internal_.CanvasRenderingContext2D.md#textbaseline)

### Methods

- [arc](input._internal_.CanvasRenderingContext2D.md#arc)
- [arcTo](input._internal_.CanvasRenderingContext2D.md#arcto)
- [beginPath](input._internal_.CanvasRenderingContext2D.md#beginpath)
- [bezierCurveTo](input._internal_.CanvasRenderingContext2D.md#beziercurveto)
- [clearRect](input._internal_.CanvasRenderingContext2D.md#clearrect)
- [clip](input._internal_.CanvasRenderingContext2D.md#clip)
- [closePath](input._internal_.CanvasRenderingContext2D.md#closepath)
- [createConicGradient](input._internal_.CanvasRenderingContext2D.md#createconicgradient)
- [createImageData](input._internal_.CanvasRenderingContext2D.md#createimagedata)
- [createLinearGradient](input._internal_.CanvasRenderingContext2D.md#createlineargradient)
- [createPattern](input._internal_.CanvasRenderingContext2D.md#createpattern)
- [createRadialGradient](input._internal_.CanvasRenderingContext2D.md#createradialgradient)
- [drawFocusIfNeeded](input._internal_.CanvasRenderingContext2D.md#drawfocusifneeded)
- [drawImage](input._internal_.CanvasRenderingContext2D.md#drawimage)
- [ellipse](input._internal_.CanvasRenderingContext2D.md#ellipse)
- [fill](input._internal_.CanvasRenderingContext2D.md#fill)
- [fillRect](input._internal_.CanvasRenderingContext2D.md#fillrect)
- [fillText](input._internal_.CanvasRenderingContext2D.md#filltext)
- [getContextAttributes](input._internal_.CanvasRenderingContext2D.md#getcontextattributes)
- [getImageData](input._internal_.CanvasRenderingContext2D.md#getimagedata)
- [getLineDash](input._internal_.CanvasRenderingContext2D.md#getlinedash)
- [getTransform](input._internal_.CanvasRenderingContext2D.md#gettransform)
- [isPointInPath](input._internal_.CanvasRenderingContext2D.md#ispointinpath)
- [isPointInStroke](input._internal_.CanvasRenderingContext2D.md#ispointinstroke)
- [lineTo](input._internal_.CanvasRenderingContext2D.md#lineto)
- [measureText](input._internal_.CanvasRenderingContext2D.md#measuretext)
- [moveTo](input._internal_.CanvasRenderingContext2D.md#moveto)
- [putImageData](input._internal_.CanvasRenderingContext2D.md#putimagedata)
- [quadraticCurveTo](input._internal_.CanvasRenderingContext2D.md#quadraticcurveto)
- [rect](input._internal_.CanvasRenderingContext2D.md#rect)
- [resetTransform](input._internal_.CanvasRenderingContext2D.md#resettransform)
- [restore](input._internal_.CanvasRenderingContext2D.md#restore)
- [rotate](input._internal_.CanvasRenderingContext2D.md#rotate)
- [save](input._internal_.CanvasRenderingContext2D.md#save)
- [scale](input._internal_.CanvasRenderingContext2D.md#scale)
- [setLineDash](input._internal_.CanvasRenderingContext2D.md#setlinedash)
- [setTransform](input._internal_.CanvasRenderingContext2D.md#settransform)
- [stroke](input._internal_.CanvasRenderingContext2D.md#stroke)
- [strokeRect](input._internal_.CanvasRenderingContext2D.md#strokerect)
- [strokeText](input._internal_.CanvasRenderingContext2D.md#stroketext)
- [transform](input._internal_.CanvasRenderingContext2D.md#transform)
- [translate](input._internal_.CanvasRenderingContext2D.md#translate)

## Properties

### canvas

• `Readonly` **canvas**: [`HTMLCanvasElement`](../modules/input._internal_.md#htmlcanvaselement)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3483

___

### direction

• **direction**: [`CanvasDirection`](../modules/input._internal_.md#canvasdirection)

#### Inherited from

[CanvasTextDrawingStyles](input._internal_.CanvasTextDrawingStyles.md).[direction](input._internal_.CanvasTextDrawingStyles.md#direction)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3511

___

### fillStyle

• **fillStyle**: `string` \| [`CanvasGradient`](../modules/input._internal_.md#canvasgradient) \| [`CanvasPattern`](../modules/input._internal_.md#canvaspattern)

#### Inherited from

[CanvasFillStrokeStyles](input._internal_.CanvasFillStrokeStyles.md).[fillStyle](input._internal_.CanvasFillStrokeStyles.md#fillstyle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3402

___

### filter

• **filter**: `string`

#### Inherited from

[CanvasFilters](input._internal_.CanvasFilters.md).[filter](input._internal_.CanvasFilters.md#filter)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3411

___

### font

• **font**: `string`

#### Inherited from

[CanvasTextDrawingStyles](input._internal_.CanvasTextDrawingStyles.md).[font](input._internal_.CanvasTextDrawingStyles.md#font)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3512

___

### globalAlpha

• **globalAlpha**: `number`

#### Inherited from

[CanvasCompositing](input._internal_.CanvasCompositing.md).[globalAlpha](input._internal_.CanvasCompositing.md#globalalpha)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3377

___

### globalCompositeOperation

• **globalCompositeOperation**: [`GlobalCompositeOperation`](../modules/input._internal_.md#globalcompositeoperation)

#### Inherited from

[CanvasCompositing](input._internal_.CanvasCompositing.md).[globalCompositeOperation](input._internal_.CanvasCompositing.md#globalcompositeoperation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3378

___

### imageSmoothingEnabled

• **imageSmoothingEnabled**: `boolean`

#### Inherited from

[CanvasImageSmoothing](input._internal_.CanvasImageSmoothing.md).[imageSmoothingEnabled](input._internal_.CanvasImageSmoothing.md#imagesmoothingenabled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3438

___

### imageSmoothingQuality

• **imageSmoothingQuality**: [`ImageSmoothingQuality`](../modules/input._internal_.md#imagesmoothingquality)

#### Inherited from

[CanvasImageSmoothing](input._internal_.CanvasImageSmoothing.md).[imageSmoothingQuality](input._internal_.CanvasImageSmoothing.md#imagesmoothingquality)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3439

___

### lineCap

• **lineCap**: [`CanvasLineCap`](../modules/input._internal_.md#canvaslinecap)

#### Inherited from

[CanvasPathDrawingStyles](input._internal_.CanvasPathDrawingStyles.md).[lineCap](input._internal_.CanvasPathDrawingStyles.md#linecap)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3455

___

### lineDashOffset

• **lineDashOffset**: `number`

#### Inherited from

[CanvasPathDrawingStyles](input._internal_.CanvasPathDrawingStyles.md).[lineDashOffset](input._internal_.CanvasPathDrawingStyles.md#linedashoffset)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3456

___

### lineJoin

• **lineJoin**: [`CanvasLineJoin`](../modules/input._internal_.md#canvaslinejoin)

#### Inherited from

[CanvasPathDrawingStyles](input._internal_.CanvasPathDrawingStyles.md).[lineJoin](input._internal_.CanvasPathDrawingStyles.md#linejoin)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3457

___

### lineWidth

• **lineWidth**: `number`

#### Inherited from

[CanvasPathDrawingStyles](input._internal_.CanvasPathDrawingStyles.md).[lineWidth](input._internal_.CanvasPathDrawingStyles.md#linewidth)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3458

___

### miterLimit

• **miterLimit**: `number`

#### Inherited from

[CanvasPathDrawingStyles](input._internal_.CanvasPathDrawingStyles.md).[miterLimit](input._internal_.CanvasPathDrawingStyles.md#miterlimit)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3459

___

### shadowBlur

• **shadowBlur**: `number`

#### Inherited from

[CanvasShadowStyles](input._internal_.CanvasShadowStyles.md).[shadowBlur](input._internal_.CanvasShadowStyles.md#shadowblur)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3493

___

### shadowColor

• **shadowColor**: `string`

#### Inherited from

[CanvasShadowStyles](input._internal_.CanvasShadowStyles.md).[shadowColor](input._internal_.CanvasShadowStyles.md#shadowcolor)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3494

___

### shadowOffsetX

• **shadowOffsetX**: `number`

#### Inherited from

[CanvasShadowStyles](input._internal_.CanvasShadowStyles.md).[shadowOffsetX](input._internal_.CanvasShadowStyles.md#shadowoffsetx)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3495

___

### shadowOffsetY

• **shadowOffsetY**: `number`

#### Inherited from

[CanvasShadowStyles](input._internal_.CanvasShadowStyles.md).[shadowOffsetY](input._internal_.CanvasShadowStyles.md#shadowoffsety)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3496

___

### strokeStyle

• **strokeStyle**: `string` \| [`CanvasGradient`](../modules/input._internal_.md#canvasgradient) \| [`CanvasPattern`](../modules/input._internal_.md#canvaspattern)

#### Inherited from

[CanvasFillStrokeStyles](input._internal_.CanvasFillStrokeStyles.md).[strokeStyle](input._internal_.CanvasFillStrokeStyles.md#strokestyle)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3403

___

### textAlign

• **textAlign**: [`CanvasTextAlign`](../modules/input._internal_.md#canvastextalign)

#### Inherited from

[CanvasTextDrawingStyles](input._internal_.CanvasTextDrawingStyles.md).[textAlign](input._internal_.CanvasTextDrawingStyles.md#textalign)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3513

___

### textBaseline

• **textBaseline**: [`CanvasTextBaseline`](../modules/input._internal_.md#canvastextbaseline)

#### Inherited from

[CanvasTextDrawingStyles](input._internal_.CanvasTextDrawingStyles.md).[textBaseline](input._internal_.CanvasTextDrawingStyles.md#textbaseline)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3514

## Methods

### arc

▸ **arc**(`x`, `y`, `radius`, `startAngle`, `endAngle`, `counterclockwise?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radius` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `counterclockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

[CanvasPath](input._internal_.CanvasPath.md).[arc](input._internal_.CanvasPath.md#arc)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3443

___

### arcTo

▸ **arcTo**(`x1`, `y1`, `x2`, `y2`, `radius`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x1` | `number` |
| `y1` | `number` |
| `x2` | `number` |
| `y2` | `number` |
| `radius` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](input._internal_.CanvasPath.md).[arcTo](input._internal_.CanvasPath.md#arcto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3444

___

### beginPath

▸ **beginPath**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](input._internal_.CanvasDrawPath.md).[beginPath](input._internal_.CanvasDrawPath.md#beginpath)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3388

___

### bezierCurveTo

▸ **bezierCurveTo**(`cp1x`, `cp1y`, `cp2x`, `cp2y`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cp1x` | `number` |
| `cp1y` | `number` |
| `cp2x` | `number` |
| `cp2y` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](input._internal_.CanvasPath.md).[bezierCurveTo](input._internal_.CanvasPath.md#beziercurveto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3445

___

### clearRect

▸ **clearRect**(`x`, `y`, `w`, `h`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasRect](input._internal_.CanvasRect.md).[clearRect](input._internal_.CanvasRect.md#clearrect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3476

___

### clip

▸ **clip**(`fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillRule?` | [`CanvasFillRule`](../modules/input._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](input._internal_.CanvasDrawPath.md).[clip](input._internal_.CanvasDrawPath.md#clip)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3389

▸ **clip**(`path`, `fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/input._internal_.md#path2d) |
| `fillRule?` | [`CanvasFillRule`](../modules/input._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](input._internal_.CanvasDrawPath.md).[clip](input._internal_.CanvasDrawPath.md#clip)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3390

___

### closePath

▸ **closePath**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasPath](input._internal_.CanvasPath.md).[closePath](input._internal_.CanvasPath.md#closepath)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3446

___

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

#### Inherited from

[CanvasFillStrokeStyles](input._internal_.CanvasFillStrokeStyles.md).[createConicGradient](input._internal_.CanvasFillStrokeStyles.md#createconicgradient)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3404

___

### createImageData

▸ **createImageData**(`sw`, `sh`, `settings?`): [`ImageData`](../modules/input._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](input._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/input._internal_.md#imagedata)

#### Inherited from

[CanvasImageData](input._internal_.CanvasImageData.md).[createImageData](input._internal_.CanvasImageData.md#createimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3430

▸ **createImageData**(`imagedata`): [`ImageData`](../modules/input._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/input._internal_.md#imagedata) |

#### Returns

[`ImageData`](../modules/input._internal_.md#imagedata)

#### Inherited from

[CanvasImageData](input._internal_.CanvasImageData.md).[createImageData](input._internal_.CanvasImageData.md#createimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3431

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

#### Inherited from

[CanvasFillStrokeStyles](input._internal_.CanvasFillStrokeStyles.md).[createLinearGradient](input._internal_.CanvasFillStrokeStyles.md#createlineargradient)

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

#### Inherited from

[CanvasFillStrokeStyles](input._internal_.CanvasFillStrokeStyles.md).[createPattern](input._internal_.CanvasFillStrokeStyles.md#createpattern)

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

#### Inherited from

[CanvasFillStrokeStyles](input._internal_.CanvasFillStrokeStyles.md).[createRadialGradient](input._internal_.CanvasFillStrokeStyles.md#createradialgradient)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3407

___

### drawFocusIfNeeded

▸ **drawFocusIfNeeded**(`element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`Element`](../modules/input._internal_.md#element) |

#### Returns

`void`

#### Inherited from

[CanvasUserInterface](input._internal_.CanvasUserInterface.md).[drawFocusIfNeeded](input._internal_.CanvasUserInterface.md#drawfocusifneeded)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3529

▸ **drawFocusIfNeeded**(`path`, `element`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/input._internal_.md#path2d) |
| `element` | [`Element`](../modules/input._internal_.md#element) |

#### Returns

`void`

#### Inherited from

[CanvasUserInterface](input._internal_.CanvasUserInterface.md).[drawFocusIfNeeded](input._internal_.CanvasUserInterface.md#drawfocusifneeded)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3530

___

### drawImage

▸ **drawImage**(`image`, `dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/input._internal_.md#canvasimagesource) |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasDrawImage](input._internal_.CanvasDrawImage.md).[drawImage](input._internal_.CanvasDrawImage.md#drawimage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3382

▸ **drawImage**(`image`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/input._internal_.md#canvasimagesource) |
| `dx` | `number` |
| `dy` | `number` |
| `dw` | `number` |
| `dh` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasDrawImage](input._internal_.CanvasDrawImage.md).[drawImage](input._internal_.CanvasDrawImage.md#drawimage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3383

▸ **drawImage**(`image`, `sx`, `sy`, `sw`, `sh`, `dx`, `dy`, `dw`, `dh`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `image` | [`CanvasImageSource`](../modules/input._internal_.md#canvasimagesource) |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `dx` | `number` |
| `dy` | `number` |
| `dw` | `number` |
| `dh` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasDrawImage](input._internal_.CanvasDrawImage.md).[drawImage](input._internal_.CanvasDrawImage.md#drawimage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3384

___

### ellipse

▸ **ellipse**(`x`, `y`, `radiusX`, `radiusY`, `rotation`, `startAngle`, `endAngle`, `counterclockwise?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `radiusX` | `number` |
| `radiusY` | `number` |
| `rotation` | `number` |
| `startAngle` | `number` |
| `endAngle` | `number` |
| `counterclockwise?` | `boolean` |

#### Returns

`void`

#### Inherited from

[CanvasPath](input._internal_.CanvasPath.md).[ellipse](input._internal_.CanvasPath.md#ellipse)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3447

___

### fill

▸ **fill**(`fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fillRule?` | [`CanvasFillRule`](../modules/input._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](input._internal_.CanvasDrawPath.md).[fill](input._internal_.CanvasDrawPath.md#fill)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3391

▸ **fill**(`path`, `fillRule?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/input._internal_.md#path2d) |
| `fillRule?` | [`CanvasFillRule`](../modules/input._internal_.md#canvasfillrule) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](input._internal_.CanvasDrawPath.md).[fill](input._internal_.CanvasDrawPath.md#fill)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3392

___

### fillRect

▸ **fillRect**(`x`, `y`, `w`, `h`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasRect](input._internal_.CanvasRect.md).[fillRect](input._internal_.CanvasRect.md#fillrect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3477

___

### fillText

▸ **fillText**(`text`, `x`, `y`, `maxWidth?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `x` | `number` |
| `y` | `number` |
| `maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasText](input._internal_.CanvasText.md).[fillText](input._internal_.CanvasText.md#filltext)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3505

___

### getContextAttributes

▸ **getContextAttributes**(): [`CanvasRenderingContext2DSettings`](input._internal_.CanvasRenderingContext2DSettings.md)

#### Returns

[`CanvasRenderingContext2DSettings`](input._internal_.CanvasRenderingContext2DSettings.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3484

___

### getImageData

▸ **getImageData**(`sx`, `sy`, `sw`, `sh`, `settings?`): [`ImageData`](../modules/input._internal_.md#imagedata)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sx` | `number` |
| `sy` | `number` |
| `sw` | `number` |
| `sh` | `number` |
| `settings?` | [`ImageDataSettings`](input._internal_.ImageDataSettings.md) |

#### Returns

[`ImageData`](../modules/input._internal_.md#imagedata)

#### Inherited from

[CanvasImageData](input._internal_.CanvasImageData.md).[getImageData](input._internal_.CanvasImageData.md#getimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3432

___

### getLineDash

▸ **getLineDash**(): `number`[]

#### Returns

`number`[]

#### Inherited from

[CanvasPathDrawingStyles](input._internal_.CanvasPathDrawingStyles.md).[getLineDash](input._internal_.CanvasPathDrawingStyles.md#getlinedash)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3460

___

### getTransform

▸ **getTransform**(): [`DOMMatrix`](../modules/input._internal_.md#dommatrix)

#### Returns

[`DOMMatrix`](../modules/input._internal_.md#dommatrix)

#### Inherited from

[CanvasTransform](input._internal_.CanvasTransform.md).[getTransform](input._internal_.CanvasTransform.md#gettransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3518

___

### isPointInPath

▸ **isPointInPath**(`x`, `y`, `fillRule?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `fillRule?` | [`CanvasFillRule`](../modules/input._internal_.md#canvasfillrule) |

#### Returns

`boolean`

#### Inherited from

[CanvasDrawPath](input._internal_.CanvasDrawPath.md).[isPointInPath](input._internal_.CanvasDrawPath.md#ispointinpath)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3393

▸ **isPointInPath**(`path`, `x`, `y`, `fillRule?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/input._internal_.md#path2d) |
| `x` | `number` |
| `y` | `number` |
| `fillRule?` | [`CanvasFillRule`](../modules/input._internal_.md#canvasfillrule) |

#### Returns

`boolean`

#### Inherited from

[CanvasDrawPath](input._internal_.CanvasDrawPath.md).[isPointInPath](input._internal_.CanvasDrawPath.md#ispointinpath)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3394

___

### isPointInStroke

▸ **isPointInStroke**(`x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Inherited from

[CanvasDrawPath](input._internal_.CanvasDrawPath.md).[isPointInStroke](input._internal_.CanvasDrawPath.md#ispointinstroke)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3395

▸ **isPointInStroke**(`path`, `x`, `y`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/input._internal_.md#path2d) |
| `x` | `number` |
| `y` | `number` |

#### Returns

`boolean`

#### Inherited from

[CanvasDrawPath](input._internal_.CanvasDrawPath.md).[isPointInStroke](input._internal_.CanvasDrawPath.md#ispointinstroke)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3396

___

### lineTo

▸ **lineTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](input._internal_.CanvasPath.md).[lineTo](input._internal_.CanvasPath.md#lineto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3448

___

### measureText

▸ **measureText**(`text`): [`TextMetrics`](../modules/input._internal_.md#textmetrics)

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

[`TextMetrics`](../modules/input._internal_.md#textmetrics)

#### Inherited from

[CanvasText](input._internal_.CanvasText.md).[measureText](input._internal_.CanvasText.md#measuretext)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3506

___

### moveTo

▸ **moveTo**(`x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](input._internal_.CanvasPath.md).[moveTo](input._internal_.CanvasPath.md#moveto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3449

___

### putImageData

▸ **putImageData**(`imagedata`, `dx`, `dy`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/input._internal_.md#imagedata) |
| `dx` | `number` |
| `dy` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasImageData](input._internal_.CanvasImageData.md).[putImageData](input._internal_.CanvasImageData.md#putimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3433

▸ **putImageData**(`imagedata`, `dx`, `dy`, `dirtyX`, `dirtyY`, `dirtyWidth`, `dirtyHeight`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `imagedata` | [`ImageData`](../modules/input._internal_.md#imagedata) |
| `dx` | `number` |
| `dy` | `number` |
| `dirtyX` | `number` |
| `dirtyY` | `number` |
| `dirtyWidth` | `number` |
| `dirtyHeight` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasImageData](input._internal_.CanvasImageData.md).[putImageData](input._internal_.CanvasImageData.md#putimagedata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3434

___

### quadraticCurveTo

▸ **quadraticCurveTo**(`cpx`, `cpy`, `x`, `y`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cpx` | `number` |
| `cpy` | `number` |
| `x` | `number` |
| `y` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](input._internal_.CanvasPath.md).[quadraticCurveTo](input._internal_.CanvasPath.md#quadraticcurveto)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3450

___

### rect

▸ **rect**(`x`, `y`, `w`, `h`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasPath](input._internal_.CanvasPath.md).[rect](input._internal_.CanvasPath.md#rect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3451

___

### resetTransform

▸ **resetTransform**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasTransform](input._internal_.CanvasTransform.md).[resetTransform](input._internal_.CanvasTransform.md#resettransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3519

___

### restore

▸ **restore**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasState](input._internal_.CanvasState.md).[restore](input._internal_.CanvasState.md#restore)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3500

___

### rotate

▸ **rotate**(`angle`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `angle` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasTransform](input._internal_.CanvasTransform.md).[rotate](input._internal_.CanvasTransform.md#rotate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3520

___

### save

▸ **save**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasState](input._internal_.CanvasState.md).[save](input._internal_.CanvasState.md#save)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3501

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

#### Inherited from

[CanvasTransform](input._internal_.CanvasTransform.md).[scale](input._internal_.CanvasTransform.md#scale)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3521

___

### setLineDash

▸ **setLineDash**(`segments`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `segments` | `number`[] |

#### Returns

`void`

#### Inherited from

[CanvasPathDrawingStyles](input._internal_.CanvasPathDrawingStyles.md).[setLineDash](input._internal_.CanvasPathDrawingStyles.md#setlinedash)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3461

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

#### Inherited from

[CanvasTransform](input._internal_.CanvasTransform.md).[setTransform](input._internal_.CanvasTransform.md#settransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3522

▸ **setTransform**(`transform?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `transform?` | [`DOMMatrix2DInit`](input._internal_.DOMMatrix2DInit.md) |

#### Returns

`void`

#### Inherited from

[CanvasTransform](input._internal_.CanvasTransform.md).[setTransform](input._internal_.CanvasTransform.md#settransform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3523

___

### stroke

▸ **stroke**(): `void`

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](input._internal_.CanvasDrawPath.md).[stroke](input._internal_.CanvasDrawPath.md#stroke)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3397

▸ **stroke**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`Path2D`](../modules/input._internal_.md#path2d) |

#### Returns

`void`

#### Inherited from

[CanvasDrawPath](input._internal_.CanvasDrawPath.md).[stroke](input._internal_.CanvasDrawPath.md#stroke)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3398

___

### strokeRect

▸ **strokeRect**(`x`, `y`, `w`, `h`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `w` | `number` |
| `h` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasRect](input._internal_.CanvasRect.md).[strokeRect](input._internal_.CanvasRect.md#strokerect)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3478

___

### strokeText

▸ **strokeText**(`text`, `x`, `y`, `maxWidth?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |
| `x` | `number` |
| `y` | `number` |
| `maxWidth?` | `number` |

#### Returns

`void`

#### Inherited from

[CanvasText](input._internal_.CanvasText.md).[strokeText](input._internal_.CanvasText.md#stroketext)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3507

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

#### Inherited from

[CanvasTransform](input._internal_.CanvasTransform.md).[transform](input._internal_.CanvasTransform.md#transform)

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

#### Inherited from

[CanvasTransform](input._internal_.CanvasTransform.md).[translate](input._internal_.CanvasTransform.md#translate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3525
