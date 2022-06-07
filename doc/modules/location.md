[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / location

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
| `ele` | [`HTMLInputElement`](input._internal_.md#htmlinputelement) | Input element to be checked for global. |

#### Returns

`boolean`

- Is global or not.

#### Defined in

[src/location.ts:109](https://github.com/hitendrarao/location/blob/4dc7506/src/location.ts#L109)

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

[src/location.ts:77](https://github.com/hitendrarao/location/blob/4dc7506/src/location.ts#L77)

___

### TriggerLocalChange

▸ **TriggerLocalChange**(`newPlaceData`, `inputEle`): `void`

Trigger Location Change for local inputs.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newPlaceData` | [`default`](../interfaces/interface_placedata.default.md) | New place data. |
| `inputEle` | [`HTMLInputElement`](input._internal_.md#htmlinputelement) | Input for which change will be triggered. |

#### Returns

`void`

#### Defined in

[src/location.ts:95](https://github.com/hitendrarao/location/blob/4dc7506/src/location.ts#L95)
