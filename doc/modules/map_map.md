[location-plugin](../README.md) / [Exports](../modules.md) / map/map

# Module: map/map

## Table of contents

### Type Aliases

- [Result](map_map.md#result)

### Functions

- [processResult](map_map.md#processresult)

## Type Aliases

### Result

Ƭ **Result**: `google.maps.GeocoderResult` \| `google.maps.places.PlaceResult`

#### Defined in

[map/map.ts:4](https://github.com/hitendrarao/location/blob/d401e71/src/map/map.ts#L4)

## Functions

### processResult

▸ **processResult**(`result`): [`default`](../interfaces/interface_placedata.default.md)

Processes result of geocode and autocomplete predictions to IPlacedata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | [`Result`](map_map.md#result) | Place result. |

#### Returns

[`default`](../interfaces/interface_placedata.default.md)

PlaceData.

#### Defined in

[map/map.ts:49](https://github.com/hitendrarao/location/blob/d401e71/src/map/map.ts#L49)
