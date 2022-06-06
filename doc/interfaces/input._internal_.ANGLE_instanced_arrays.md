[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / ANGLE\_instanced\_arrays

# Interface: ANGLE\_instanced\_arrays

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).ANGLE_instanced_arrays

The ANGLE_instanced_arrays extension is part of the WebGL API and allows to draw the same object, or groups of similar objects multiple times, if they share the same vertex data, primitive count and type.

## Table of contents

### Properties

- [VERTEX\_ATTRIB\_ARRAY\_DIVISOR\_ANGLE](input._internal_.ANGLE_instanced_arrays.md#vertex_attrib_array_divisor_angle)

### Methods

- [drawArraysInstancedANGLE](input._internal_.ANGLE_instanced_arrays.md#drawarraysinstancedangle)
- [drawElementsInstancedANGLE](input._internal_.ANGLE_instanced_arrays.md#drawelementsinstancedangle)
- [vertexAttribDivisorANGLE](input._internal_.ANGLE_instanced_arrays.md#vertexattribdivisorangle)

## Properties

### VERTEX\_ATTRIB\_ARRAY\_DIVISOR\_ANGLE

• `Readonly` **VERTEX\_ATTRIB\_ARRAY\_DIVISOR\_ANGLE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1920

## Methods

### drawArraysInstancedANGLE

▸ **drawArraysInstancedANGLE**(`mode`, `first`, `count`, `primcount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `first` | `number` |
| `count` | `number` |
| `primcount` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1917

___

### drawElementsInstancedANGLE

▸ **drawElementsInstancedANGLE**(`mode`, `count`, `type`, `offset`, `primcount`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `mode` | `number` |
| `count` | `number` |
| `type` | `number` |
| `offset` | `number` |
| `primcount` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1918

___

### vertexAttribDivisorANGLE

▸ **vertexAttribDivisorANGLE**(`index`, `divisor`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |
| `divisor` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:1919
