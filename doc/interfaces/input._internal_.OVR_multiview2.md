[Droom Google Location Plugin - v1.0.15](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / OVR\_multiview2

# Interface: OVR\_multiview2

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).OVR_multiview2

## Table of contents

### Properties

- [FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_BASE\_VIEW\_INDEX\_OVR](input._internal_.OVR_multiview2.md#framebuffer_attachment_texture_base_view_index_ovr)
- [FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_NUM\_VIEWS\_OVR](input._internal_.OVR_multiview2.md#framebuffer_attachment_texture_num_views_ovr)
- [FRAMEBUFFER\_INCOMPLETE\_VIEW\_TARGETS\_OVR](input._internal_.OVR_multiview2.md#framebuffer_incomplete_view_targets_ovr)
- [MAX\_VIEWS\_OVR](input._internal_.OVR_multiview2.md#max_views_ovr)

### Methods

- [framebufferTextureMultiviewOVR](input._internal_.OVR_multiview2.md#framebuffertexturemultiviewovr)

## Properties

### FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_BASE\_VIEW\_INDEX\_OVR

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_BASE\_VIEW\_INDEX\_OVR**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10292

___

### FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_NUM\_VIEWS\_OVR

• `Readonly` **FRAMEBUFFER\_ATTACHMENT\_TEXTURE\_NUM\_VIEWS\_OVR**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10293

___

### FRAMEBUFFER\_INCOMPLETE\_VIEW\_TARGETS\_OVR

• `Readonly` **FRAMEBUFFER\_INCOMPLETE\_VIEW\_TARGETS\_OVR**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10294

___

### MAX\_VIEWS\_OVR

• `Readonly` **MAX\_VIEWS\_OVR**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10295

## Methods

### framebufferTextureMultiviewOVR

▸ **framebufferTextureMultiviewOVR**(`target`, `attachment`, `texture`, `level`, `baseViewIndex`, `numViews`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `number` |
| `attachment` | `number` |
| `texture` | ``null`` \| [`WebGLTexture`](../modules/input._internal_.md#webgltexture) |
| `level` | `number` |
| `baseViewIndex` | `number` |
| `numViews` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10291
