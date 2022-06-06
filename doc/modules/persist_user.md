[Droom Google Location Plugin - v1.0.6](../README.md) / [Exports](../modules.md) / persist/user

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

[src/persist/user.ts:77](https://github.com/hitendrarao/location/blob/0bcac8f/src/persist/user.ts#L77)

___

### getUserLocation

▸ **getUserLocation**(): `Promise`<``null`` \| [`default`](../interfaces/interface_placedata.default.md)\>

Fetched user location from api.

#### Returns

`Promise`<``null`` \| [`default`](../interfaces/interface_placedata.default.md)\>

- User location data.

#### Defined in

[src/persist/user.ts:24](https://github.com/hitendrarao/location/blob/0bcac8f/src/persist/user.ts#L24)

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

[src/persist/user.ts:41](https://github.com/hitendrarao/location/blob/0bcac8f/src/persist/user.ts#L41)
