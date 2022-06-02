[my-webpack-project](../README.md) / [Exports](../modules.md) / map/map

# Module: map/map

## Table of contents

### Type Aliases

- [Result](map_map.md#result)

### Functions

- [load](map_map.md#load)
- [processResult](map_map.md#processresult)

## Type Aliases

### Result

Ƭ **Result**: `google.maps.GeocoderResult` \| `google.maps.places.PlaceResult`

#### Defined in

[map/map.ts:5](https://github.com/hitendrarao/location/blob/56352cf/src/map/map.ts#L5)

## Functions

### load

▸ **load**(): `Promise`<`HTMLLinkElement` \| `HTMLScriptElement`\>

Load js required for map to work.

#### Returns

`Promise`<`HTMLLinkElement` \| `HTMLScriptElement`\>

- Resource load promise.

#### Defined in

[map/map.ts:15](https://github.com/hitendrarao/location/blob/56352cf/src/map/map.ts#L15)

___

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

[map/map.ts:64](https://github.com/hitendrarao/location/blob/56352cf/src/map/map.ts#L64)
