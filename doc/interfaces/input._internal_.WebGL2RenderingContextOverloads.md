[my-webpack-project](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / WebGL2RenderingContextOverloads

# Interface: WebGL2RenderingContextOverloads

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).WebGL2RenderingContextOverloads

## Hierarchy

- **`WebGL2RenderingContextOverloads`**

  ↳ [`WebGL2RenderingContext`](input._internal_.WebGL2RenderingContext.md)

## Table of contents

### Methods

- [bufferData](input._internal_.WebGL2RenderingContextOverloads.md#bufferdata)
- [bufferSubData](input._internal_.WebGL2RenderingContextOverloads.md#buffersubdata)
- [compressedTexImage2D](input._internal_.WebGL2RenderingContextOverloads.md#compressedteximage2d)
- [compressedTexSubImage2D](input._internal_.WebGL2RenderingContextOverloads.md#compressedtexsubimage2d)
- [readPixels](input._internal_.WebGL2RenderingContextOverloads.md#readpixels)
- [texImage2D](input._internal_.WebGL2RenderingContextOverloads.md#teximage2d)
- [texSubImage2D](input._internal_.WebGL2RenderingContextOverloads.md#texsubimage2d)
- [uniform1fv](input._internal_.WebGL2RenderingContextOverloads.md#uniform1fv)
- [uniform1iv](input._internal_.WebGL2RenderingContextOverloads.md#uniform1iv)
- [uniform2fv](input._internal_.WebGL2RenderingContextOverloads.md#uniform2fv)
- [uniform2iv](input._internal_.WebGL2RenderingContextOverloads.md#uniform2iv)
- [uniform3fv](input._internal_.WebGL2RenderingContextOverloads.md#uniform3fv)
- [uniform3iv](input._internal_.WebGL2RenderingContextOverloads.md#uniform3iv)
- [uniform4fv](input._internal_.WebGL2RenderingContextOverloads.md#uniform4fv)
- [uniform4iv](input._internal_.WebGL2RenderingContextOverloads.md#uniform4iv)
- [uniformMatrix2fv](input._internal_.WebGL2RenderingContextOverloads.md#uniformmatrix2fv)
- [uniformMatrix3fv](input._internal_.WebGL2RenderingContextOverloads.md#uniformmatrix3fv)
- [uniformMatrix4fv](input._internal_.WebGL2RenderingContextOverloads.md#uniformmatrix4fv)

## Methods

### bufferData

▸ **bufferData**(`target`, `size`, `usage`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `size` | `number` |
| `usage` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15580

▸ **bufferData**(`target`, `srcData`, `usage`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `srcData` | ``null`` \| [`BufferSource`](../modules/input._internal_.md#buffersource) |
| `usage` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15581

▸ **bufferData**(`target`, `srcData`, `usage`, `srcOffset`, `length?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `srcData` | [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |
| `usage` | `number` |
| `srcOffset` | `number` |
| `length?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15582

___

### bufferSubData

▸ **bufferSubData**(`target`, `dstByteOffset`, `srcData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `dstByteOffset` | `number` |
| `srcData` | [`BufferSource`](../modules/input._internal_.md#buffersource) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15583

▸ **bufferSubData**(`target`, `dstByteOffset`, `srcData`, `srcOffset`, `length?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `dstByteOffset` | `number` |
| `srcData` | [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |
| `srcOffset` | `number` |
| `length?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15584

___

### compressedTexImage2D

▸ **compressedTexImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `imageSize`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `imageSize` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15585

▸ **compressedTexImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `srcData`, `srcOffset?`, `srcLengthOverride?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `srcData` | [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |
| `srcOffset?` | `number` |
| `srcLengthOverride?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15586

___

### compressedTexSubImage2D

▸ **compressedTexSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `imageSize`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `imageSize` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15587

▸ **compressedTexSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `srcData`, `srcOffset?`, `srcLengthOverride?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `srcData` | [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |
| `srcOffset?` | `number` |
| `srcLengthOverride?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15588

___

### readPixels

▸ **readPixels**(`x`, `y`, `width`, `height`, `format`, `type`, `dstData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `dstData` | ``null`` \| [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15589

▸ **readPixels**(`x`, `y`, `width`, `height`, `format`, `type`, `offset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `offset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15590

▸ **readPixels**(`x`, `y`, `width`, `height`, `format`, `type`, `dstData`, `dstOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `dstData` | [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |
| `dstOffset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15591

___

### texImage2D

▸ **texImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `format`, `type`, `pixels`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `format` | `number` |
| `type` | `number` |
| `pixels` | ``null`` \| [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15592

▸ **texImage2D**(`target`, `level`, `internalformat`, `format`, `type`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `format` | `number` |
| `type` | `number` |
| `source` | [`TexImageSource`](../modules/input._internal_.md#teximagesource) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15593

▸ **texImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `format`, `type`, `pboOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `format` | `number` |
| `type` | `number` |
| `pboOffset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15594

▸ **texImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `format`, `type`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `format` | `number` |
| `type` | `number` |
| `source` | [`TexImageSource`](../modules/input._internal_.md#teximagesource) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15595

▸ **texImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `format`, `type`, `srcData`, `srcOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `format` | `number` |
| `type` | `number` |
| `srcData` | [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |
| `srcOffset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15596

___

### texSubImage2D

▸ **texSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `type`, `pixels`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `pixels` | ``null`` \| [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15597

▸ **texSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `format`, `type`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `format` | `number` |
| `type` | `number` |
| `source` | [`TexImageSource`](../modules/input._internal_.md#teximagesource) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15598

▸ **texSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `type`, `pboOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `pboOffset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15599

▸ **texSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `type`, `source`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `source` | [`TexImageSource`](../modules/input._internal_.md#teximagesource) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15600

▸ **texSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `type`, `srcData`, `srcOffset`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `xoffset` | `number` |
| `yoffset` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `srcData` | [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |
| `srcOffset` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15601

___

### uniform1fv

▸ **uniform1fv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `data` | [`Float32List`](../modules/input._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15602

___

### uniform1iv

▸ **uniform1iv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `data` | [`Int32List`](../modules/input._internal_.md#int32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15603

___

### uniform2fv

▸ **uniform2fv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `data` | [`Float32List`](../modules/input._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15604

___

### uniform2iv

▸ **uniform2iv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `data` | [`Int32List`](../modules/input._internal_.md#int32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15605

___

### uniform3fv

▸ **uniform3fv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `data` | [`Float32List`](../modules/input._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15606

___

### uniform3iv

▸ **uniform3iv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `data` | [`Int32List`](../modules/input._internal_.md#int32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15607

___

### uniform4fv

▸ **uniform4fv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `data` | [`Float32List`](../modules/input._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15608

___

### uniform4iv

▸ **uniform4iv**(`location`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `data` | [`Int32List`](../modules/input._internal_.md#int32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15609

___

### uniformMatrix2fv

▸ **uniformMatrix2fv**(`location`, `transpose`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `data` | [`Float32List`](../modules/input._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15610

___

### uniformMatrix3fv

▸ **uniformMatrix3fv**(`location`, `transpose`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `data` | [`Float32List`](../modules/input._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15611

___

### uniformMatrix4fv

▸ **uniformMatrix4fv**(`location`, `transpose`, `data`, `srcOffset?`, `srcLength?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `data` | [`Float32List`](../modules/input._internal_.md#float32list) |
| `srcOffset?` | `number` |
| `srcLength?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:15612
