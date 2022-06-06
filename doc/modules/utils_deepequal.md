[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / utils/deepequal

# Module: utils/deepequal

## Table of contents

### Type Aliases

- [Obj](utils_deepequal.md#obj)

### Functions

- [default](utils_deepequal.md#default)

## Type Aliases

### Obj

Ƭ **Obj**: `Object`

Obj type contains string keys with any value.

#### Index signature

▪ [key: `string`]: `unknown`

#### Defined in

[src/utils/deepequal.ts:4](https://github.com/hitendrarao/location/blob/fe59d74/src/utils/deepequal.ts#L4)

## Functions

### default

▸ **default**(`obj1`, `obj2`): `boolean`

Check if two objects are exactaly equal.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `obj1` | [`Obj`](utils_deepequal.md#obj) | Any Object. |
| `obj2` | [`Obj`](utils_deepequal.md#obj) | Any Object. |

#### Returns

`boolean`

- If obj1 is equal to obj2.

#### Defined in

[src/utils/deepequal.ts:21](https://github.com/hitendrarao/location/blob/fe59d74/src/utils/deepequal.ts#L21)
