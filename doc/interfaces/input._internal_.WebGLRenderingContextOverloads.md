[Droom Google Location Plugin - v1.0.4](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / WebGLRenderingContextOverloads

# Interface: WebGLRenderingContextOverloads

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).WebGLRenderingContextOverloads

## Hierarchy

- **`WebGLRenderingContextOverloads`**

  ↳ [`WebGLRenderingContext`](input._internal_.WebGLRenderingContext.md)

## Table of contents

### Methods

- [bufferData](input._internal_.WebGLRenderingContextOverloads.md#bufferdata)
- [bufferSubData](input._internal_.WebGLRenderingContextOverloads.md#buffersubdata)
- [compressedTexImage2D](input._internal_.WebGLRenderingContextOverloads.md#compressedteximage2d)
- [compressedTexSubImage2D](input._internal_.WebGLRenderingContextOverloads.md#compressedtexsubimage2d)
- [readPixels](input._internal_.WebGLRenderingContextOverloads.md#readpixels)
- [texImage2D](input._internal_.WebGLRenderingContextOverloads.md#teximage2d)
- [texSubImage2D](input._internal_.WebGLRenderingContextOverloads.md#texsubimage2d)
- [uniform1fv](input._internal_.WebGLRenderingContextOverloads.md#uniform1fv)
- [uniform1iv](input._internal_.WebGLRenderingContextOverloads.md#uniform1iv)
- [uniform2fv](input._internal_.WebGLRenderingContextOverloads.md#uniform2fv)
- [uniform2iv](input._internal_.WebGLRenderingContextOverloads.md#uniform2iv)
- [uniform3fv](input._internal_.WebGLRenderingContextOverloads.md#uniform3fv)
- [uniform3iv](input._internal_.WebGLRenderingContextOverloads.md#uniform3iv)
- [uniform4fv](input._internal_.WebGLRenderingContextOverloads.md#uniform4fv)
- [uniform4iv](input._internal_.WebGLRenderingContextOverloads.md#uniform4iv)
- [uniformMatrix2fv](input._internal_.WebGLRenderingContextOverloads.md#uniformmatrix2fv)
- [uniformMatrix3fv](input._internal_.WebGLRenderingContextOverloads.md#uniformmatrix3fv)
- [uniformMatrix4fv](input._internal_.WebGLRenderingContextOverloads.md#uniformmatrix4fv)

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

node_modules/typescript/lib/lib.dom.d.ts:16436

▸ **bufferData**(`target`, `data`, `usage`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `data` | ``null`` \| [`BufferSource`](../modules/input._internal_.md#buffersource) |
| `usage` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16437

___

### bufferSubData

▸ **bufferSubData**(`target`, `offset`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `offset` | `number` |
| `data` | [`BufferSource`](../modules/input._internal_.md#buffersource) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16438

___

### compressedTexImage2D

▸ **compressedTexImage2D**(`target`, `level`, `internalformat`, `width`, `height`, `border`, `data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `level` | `number` |
| `internalformat` | `number` |
| `width` | `number` |
| `height` | `number` |
| `border` | `number` |
| `data` | [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16439

___

### compressedTexSubImage2D

▸ **compressedTexSubImage2D**(`target`, `level`, `xoffset`, `yoffset`, `width`, `height`, `format`, `data`): `void`

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
| `data` | [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16440

___

### readPixels

▸ **readPixels**(`x`, `y`, `width`, `height`, `format`, `type`, `pixels`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x` | `number` |
| `y` | `number` |
| `width` | `number` |
| `height` | `number` |
| `format` | `number` |
| `type` | `number` |
| `pixels` | ``null`` \| [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16441

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

node_modules/typescript/lib/lib.dom.d.ts:16442

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

node_modules/typescript/lib/lib.dom.d.ts:16443

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

node_modules/typescript/lib/lib.dom.d.ts:16444

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

node_modules/typescript/lib/lib.dom.d.ts:16445

___

### uniform1fv

▸ **uniform1fv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16446

___

### uniform1iv

▸ **uniform1iv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Int32List`](../modules/input._internal_.md#int32list) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16447

___

### uniform2fv

▸ **uniform2fv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16448

___

### uniform2iv

▸ **uniform2iv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Int32List`](../modules/input._internal_.md#int32list) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16449

___

### uniform3fv

▸ **uniform3fv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16450

___

### uniform3iv

▸ **uniform3iv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Int32List`](../modules/input._internal_.md#int32list) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16451

___

### uniform4fv

▸ **uniform4fv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16452

___

### uniform4iv

▸ **uniform4iv**(`location`, `v`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `v` | [`Int32List`](../modules/input._internal_.md#int32list) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16453

___

### uniformMatrix2fv

▸ **uniformMatrix2fv**(`location`, `transpose`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `value` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16454

___

### uniformMatrix3fv

▸ **uniformMatrix3fv**(`location`, `transpose`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `value` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16455

___

### uniformMatrix4fv

▸ **uniformMatrix4fv**(`location`, `transpose`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `location` | ``null`` \| [`WebGLUniformLocation`](../modules/input._internal_.md#webgluniformlocation) |
| `transpose` | `boolean` |
| `value` | [`Float32List`](../modules/input._internal_.md#float32list) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:16456
