[my-webpack-project](../README.md) / [Exports](../modules.md) / location

# Module: location

## Table of contents

### Functions

- [IsGlobalLocation](location.md#isgloballocation)
- [TriggerGlobalChange](location.md#triggerglobalchange)
- [TriggerLocalChange](location.md#triggerlocalchange)

## Functions

### IsGlobalLocation

▸ **IsGlobalLocation**(`ele`): `boolean`

Check if given input is registers as global not not.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ele` | `HTMLInputElement` | Input element to be checked for global. |

#### Returns

`boolean`

- Is global or not.

#### Defined in

[location.ts:90](https://github.com/hitendrarao/location/blob/56352cf/src/location.ts#L90)

___

### TriggerGlobalChange

▸ **TriggerGlobalChange**(`newPlaceData`): `void`

Triggers Location change for all global inputs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newPlaceData` | [`default`](../interfaces/interface_placedata.default.md) | New Place Data. |

#### Returns

`void`

#### Defined in

[location.ts:49](https://github.com/hitendrarao/location/blob/56352cf/src/location.ts#L49)

___

### TriggerLocalChange

▸ **TriggerLocalChange**(`newPlaceData`, `inputEle`): `void`

Trigger Location Change for local inputs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newPlaceData` | [`default`](../interfaces/interface_placedata.default.md) | New place data. |
| `inputEle` | `HTMLInputElement` | Input for which change will be triggered. |

#### Returns

`void`

#### Defined in

[location.ts:76](https://github.com/hitendrarao/location/blob/56352cf/src/location.ts#L76)
