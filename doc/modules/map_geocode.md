[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / map/geocode

# Module: map/geocode

## Table of contents

### Functions

- [GetCurrentLocation](map_geocode.md#getcurrentlocation)
- [GetPlaceFromGeocode](map_geocode.md#getplacefromgeocode)

## Functions

### GetCurrentLocation

▸ **GetCurrentLocation**(): `Promise`<`void`\>

Fetches current location of user via navigation and geocode api.

#### Returns

`Promise`<`void`\>

- Void Promise.

#### Defined in

[src/map/geocode.ts:31](https://github.com/hitendrarao/location/blob/d9af338/src/map/geocode.ts#L31)

___

### GetPlaceFromGeocode

▸ **GetPlaceFromGeocode**(`request`): `Promise`<[`default`](../interfaces/interface_placedata.default.md)\>

Fetches and process the result from geocode to IPlaceData.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`GeocoderRequest`](../interfaces/map_autocomplete._internal_.GeocoderRequest.md) | Request Obj. |

#### Returns

`Promise`<[`default`](../interfaces/interface_placedata.default.md)\>

- Geocode Result converted to place data format.

#### Defined in

[src/map/geocode.ts:14](https://github.com/hitendrarao/location/blob/d9af338/src/map/geocode.ts#L14)
