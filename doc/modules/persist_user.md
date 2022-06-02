[my-webpack-project](../README.md) / [Exports](../modules.md) / persist/user

# Module: persist/user

## Table of contents

### Functions

- [LoadUserStore](persist_user.md#loaduserstore)
- [getUserLocation](persist_user.md#getuserlocation)
- [setUserLocation](persist_user.md#setuserlocation)

## Functions

### LoadUserStore

▸ **LoadUserStore**(): `void`

Registers event listener to handle global location change.

#### Returns

`void`

#### Defined in

[persist/user.ts:67](https://github.com/hitendrarao/location/blob/56352cf/src/persist/user.ts#L67)

___

### getUserLocation

▸ **getUserLocation**(): `Promise`<``null`` \| [`default`](../interfaces/interface_placedata.default.md)\>

Fetched user location from api.

#### Returns

`Promise`<``null`` \| [`default`](../interfaces/interface_placedata.default.md)\>

- User location data.

#### Defined in

[persist/user.ts:16](https://github.com/hitendrarao/location/blob/56352cf/src/persist/user.ts#L16)

___

### setUserLocation

▸ **setUserLocation**(`data`): `void`

Set user location to api.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`default`](../interfaces/interface_placedata.default.md) | Location Data to save. |

#### Returns

`void`

#### Defined in

[persist/user.ts:32](https://github.com/hitendrarao/location/blob/56352cf/src/persist/user.ts#L32)
