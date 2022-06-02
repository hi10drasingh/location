[my-webpack-project](../README.md) / [Exports](../modules.md) / load

# Module: load

## Table of contents

### Functions

- [default](load.md#default)

## Functions

### default

▸ **default**<`F`\>(`settings`, `CB`): (...`args`: `Parameters`<`F`\>) => `ReturnType`<`F`\>

Loads all relevent dependencies if not already loaded before execution of callback.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends (...`params`: `any`[]) => `any` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `settings` | [`Settings`](../interfaces/interface.Settings.md) | Load Setting of Plugin. |
| `CB` | `F` | Callback func after load function resolves. |

#### Returns

`fn`

- Wrapper func whose signature is same as Cb func.

▸ (...`args`): `ReturnType`<`F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | `Parameters`<`F`\> |

##### Returns

`ReturnType`<`F`\>

#### Defined in

[load.ts:46](https://github.com/hitendrarao/location/blob/56352cf/src/load.ts#L46)
