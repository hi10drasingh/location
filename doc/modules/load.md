[my-webpack-project](../README.md) / [Exports](../modules.md) / load

# Module: load

## Table of contents

### Namespaces

- [&lt;internal\&gt;](load._internal_.md)

### Functions

- [default](load.md#default)

## Functions

### default

▸ **default**<`F`\>(`settings`, `CB`): (...`args`: [`Parameters`](load._internal_.md#parameters)<`F`\>) => [`ReturnType`](load._internal_.md#returntype)<`F`\>

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

▸ (...`args`): [`ReturnType`](load._internal_.md#returntype)<`F`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `...args` | [`Parameters`](load._internal_.md#parameters)<`F`\> |

##### Returns

[`ReturnType`](load._internal_.md#returntype)<`F`\>

#### Defined in

[src/load.ts:46](https://github.com/hitendrarao/location/blob/6f44bad/src/load.ts#L46)
