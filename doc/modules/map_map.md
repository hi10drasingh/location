[Droom Google Location Plugin - v1.0.15](../README.md) / [Exports](../modules.md) / map/map

# Module: map/map

## Table of contents

### Namespaces

- [&lt;internal\&gt;](map_map._internal_.md)

### Type Aliases

- [Result](map_map.md#result)

### Functions

- [processResult](map_map.md#processresult)

## Type Aliases

### Result

Ƭ **Result**: [`GeocoderResult`](../interfaces/map_map._internal_.GeocoderResult.md) \| [`PlaceResult`](../interfaces/map_map._internal_.PlaceResult.md)

Result format of geocoder or place detail api.

#### Defined in

[src/map/map.ts:7](https://github.com/hitendrarao/location/blob/18ede0d/src/map/map.ts#L7)

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

[src/map/map.ts:52](https://github.com/hitendrarao/location/blob/18ede0d/src/map/map.ts#L52)
