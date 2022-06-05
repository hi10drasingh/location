[location-plugin](../README.md) / [Exports](../modules.md) / map/geocode

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

[map/geocode.ts:32](https://github.com/hitendrarao/location/blob/d401e71/src/map/geocode.ts#L32)

___

### GetPlaceFromGeocode

▸ **GetPlaceFromGeocode**(`request`): `Promise`<[`default`](../interfaces/interface_placedata.default.md)\>

Fetches and process the result from geocode to IPlaceData.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `GeocoderRequest` | Request Obj. |

#### Returns

`Promise`<[`default`](../interfaces/interface_placedata.default.md)\>

- Geocode Result converted to place data format.

#### Defined in

[map/geocode.ts:14](https://github.com/hitendrarao/location/blob/d401e71/src/map/geocode.ts#L14)
