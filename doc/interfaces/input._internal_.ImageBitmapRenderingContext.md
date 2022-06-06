[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / ImageBitmapRenderingContext

# Interface: ImageBitmapRenderingContext

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).ImageBitmapRenderingContext

## Table of contents

### Properties

- [canvas](input._internal_.ImageBitmapRenderingContext.md#canvas)

### Methods

- [transferFromImageBitmap](input._internal_.ImageBitmapRenderingContext.md#transferfromimagebitmap)

## Properties

### canvas

• `Readonly` **canvas**: [`HTMLCanvasElement`](../modules/input._internal_.md#htmlcanvaselement)

Returns the canvas element that the context is bound to.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8875

## Methods

### transferFromImageBitmap

▸ **transferFromImageBitmap**(`bitmap`): `void`

Transfers the underlying bitmap data from imageBitmap to context, and the bitmap becomes the contents of the canvas element to which context is bound.

#### Parameters

| Name | Type |
| :------ | :------ |
| `bitmap` | ``null`` \| [`ImageBitmap`](../modules/input._internal_.md#imagebitmap) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8877
