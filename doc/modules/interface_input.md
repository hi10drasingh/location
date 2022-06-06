[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / interface/input

# Module: interface/input

## Table of contents

### Type Aliases

- [BindInputFunc](interface_input.md#bindinputfunc)
- [UnbindInputFunc](interface_input.md#unbindinputfunc)

## Type Aliases

### BindInputFunc

Ƭ **BindInputFunc**: (`selector`: `string`, `isGlobal`: `boolean`) => `void`

#### Type declaration

▸ (`selector`, `isGlobal`): `void`

Bind as input element to location plugin.

##### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `isGlobal` | `boolean` |

##### Returns

`void`

#### Defined in

[src/interface/input.ts:4](https://github.com/hitendrarao/location/blob/fe59d74/src/interface/input.ts#L4)

___

### UnbindInputFunc

Ƭ **UnbindInputFunc**: (`element`: [`HTMLInputElement`](input._internal_.md#htmlinputelement)) => `void`

#### Type declaration

▸ (`element`): `void`

Unbind Input Element from plugin.

##### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLInputElement`](input._internal_.md#htmlinputelement) |

##### Returns

`void`

#### Defined in

[src/interface/input.ts:9](https://github.com/hitendrarao/location/blob/fe59d74/src/interface/input.ts#L9)
