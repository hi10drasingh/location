[Droom Google Location Plugin - v1.0.15](../README.md) / [Exports](../modules.md) / persist/user

# Module: persist/user

## Table of contents

### Functions

- [GetUserLocation](persist_user.md#getuserlocation)
- [LoadUserStore](persist_user.md#loaduserstore)
- [SetUserLocation](persist_user.md#setuserlocation)

## Functions

### GetUserLocation

▸ **GetUserLocation**(): `Promise`<[`default`](interface_nullable.md#default)<[`default`](../interfaces/interface_placedata.default.md)\>\>

Fetched user location from api.

#### Returns

`Promise`<[`default`](interface_nullable.md#default)<[`default`](../interfaces/interface_placedata.default.md)\>\>

- User location data.

#### Defined in

[src/persist/user.ts:24](https://github.com/hitendrarao/location/blob/d0a2678/src/persist/user.ts#L24)

___

### LoadUserStore

▸ **LoadUserStore**(): `void`

Registers event listener to handle global location change.

#### Returns

`void`

#### Defined in

[src/persist/user.ts:80](https://github.com/hitendrarao/location/blob/d0a2678/src/persist/user.ts#L80)

___

### SetUserLocation

▸ **SetUserLocation**(`data`): `void`

Set user location to api.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`default`](../interfaces/interface_placedata.default.md) | Location Data to save. |

#### Returns

`void`

#### Defined in

[src/persist/user.ts:44](https://github.com/hitendrarao/location/blob/d0a2678/src/persist/user.ts#L44)
