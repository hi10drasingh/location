[Droom Google Location Plugin - v1.0.15](../README.md) / [Exports](../modules.md) / utils/loadresource

# Module: utils/loadresource

## Table of contents

### Variables

- [RESOURCE](utils_loadresource.md#resource)

### Functions

- [LoadResource](utils_loadresource.md#loadresource)

## Variables

### RESOURCE

• `Const` **RESOURCE**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `CSS` | `string` |
| `JS` | `string` |

#### Defined in

[src/utils/loadresource.ts:5](https://github.com/hitendrarao/location/blob/bb6fa88/src/utils/loadresource.ts#L5)

## Functions

### LoadResource

▸ **LoadResource**(`type`, `url`): `Promise`<[`HTMLLinkElement`](input._internal_.md#htmllinkelement) \| [`HTMLScriptElement`](input._internal_.md#htmlscriptelement)\>

Asynchronously loads resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | Resource Type. |
| `url` | `string` | Resource Link. |

#### Returns

`Promise`<[`HTMLLinkElement`](input._internal_.md#htmllinkelement) \| [`HTMLScriptElement`](input._internal_.md#htmlscriptelement)\>

- Promise that will resolved when script or link has loaded.

#### Defined in

[src/utils/loadresource.ts:73](https://github.com/hitendrarao/location/blob/bb6fa88/src/utils/loadresource.ts#L73)
