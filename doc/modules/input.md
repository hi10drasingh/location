[Droom Google Location Plugin - v1.0.13](../README.md) / [Exports](../modules.md) / input

# Module: input

## Table of contents

### Namespaces

- [&lt;internal\&gt;](input._internal_.md)

### Functions

- [BindInput](input.md#bindinput)
- [UnbindInput](input.md#unbindinput)

## Functions

### BindInput

▸ **BindInput**(`selector`, `isGlobal`): `void`

Bind Location Plugin to a input element.

**`throws`** {INVALID_SELECTOR_MSG} INVALID_SELECTOR_MSG.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `selector` | `string` | Input element selector. |
| `isGlobal` | `boolean` | Is Location Global. |

#### Returns

`void`

#### Defined in

[src/input/index.ts:178](https://github.com/hitendrarao/location/blob/6485c4f/src/input/index.ts#L178)

___

### UnbindInput

▸ **UnbindInput**(`element`): `void`

UnBind Location Plugin to a input element.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `element` | [`HTMLInputElement`](input._internal_.md#htmlinputelement) | Input element. |

#### Returns

`void`

#### Defined in

[src/input/index.ts:228](https://github.com/hitendrarao/location/blob/6485c4f/src/input/index.ts#L228)
