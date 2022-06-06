[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / Geolocation

# Interface: Geolocation

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).Geolocation

An object able to programmatically obtain the position of the device. It gives Web content access to the location of the device. This allows a Web site or app to offer customized results based on the user's location.

## Table of contents

### Methods

- [clearWatch](input._internal_.Geolocation.md#clearwatch)
- [getCurrentPosition](input._internal_.Geolocation.md#getcurrentposition)
- [watchPosition](input._internal_.Geolocation.md#watchposition)

## Methods

### clearWatch

▸ **clearWatch**(`watchId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `watchId` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5491

___

### getCurrentPosition

▸ **getCurrentPosition**(`successCallback`, `errorCallback?`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `successCallback` | [`PositionCallback`](input._internal_.PositionCallback.md) |
| `errorCallback?` | ``null`` \| [`PositionErrorCallback`](input._internal_.PositionErrorCallback.md) |
| `options?` | [`PositionOptions`](input._internal_.PositionOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5492

___

### watchPosition

▸ **watchPosition**(`successCallback`, `errorCallback?`, `options?`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `successCallback` | [`PositionCallback`](input._internal_.PositionCallback.md) |
| `errorCallback?` | ``null`` \| [`PositionErrorCallback`](input._internal_.PositionErrorCallback.md) |
| `options?` | [`PositionOptions`](input._internal_.PositionOptions.md) |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5493
