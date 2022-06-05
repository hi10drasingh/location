[location-plugin](../README.md) / [Exports](../modules.md) / utils/loadresource

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

[utils/loadresource.ts:1](https://github.com/hitendrarao/location/blob/d401e71/src/utils/loadresource.ts#L1)

## Functions

### LoadResource

▸ **LoadResource**(`type`, `url`): `Promise`<`HTMLLinkElement` \| `HTMLScriptElement`\>

Asynchronously loads resource.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `type` | `string` | Resource Type. |
| `url` | `string` | Resource Link. |

#### Returns

`Promise`<`HTMLLinkElement` \| `HTMLScriptElement`\>

- Promise that will resolved when script or link has loaded.

#### Defined in

[utils/loadresource.ts:66](https://github.com/hitendrarao/location/blob/d401e71/src/utils/loadresource.ts#L66)
