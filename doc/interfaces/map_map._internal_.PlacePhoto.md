[Droom Google Location Plugin - v1.0.6](../README.md) / [Exports](../modules.md) / [map/map](../modules/map_map.md) / [<internal\>](../modules/map_map._internal_.md) / PlacePhoto

# Interface: PlacePhoto

[map/map](../modules/map_map.md).[<internal>](../modules/map_map._internal_.md).PlacePhoto

Represents a photo element of a Place.

## Table of contents

### Properties

- [height](map_map._internal_.PlacePhoto.md#height)
- [html\_attributions](map_map._internal_.PlacePhoto.md#html_attributions)
- [width](map_map._internal_.PlacePhoto.md#width)

### Methods

- [getUrl](map_map._internal_.PlacePhoto.md#geturl)

## Properties

### height

• **height**: `number`

The height of the photo in pixels.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9667

___

### html\_attributions

• **html\_attributions**: `string`[]

Attribution text to be displayed for this photo.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9671

___

### width

• **width**: `number`

The width of the photo in pixels.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9675

## Methods

### getUrl

▸ **getUrl**(`opts?`): `string`

Returns the image URL corresponding to the specified options.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`PhotoOptions`](map_map._internal_.PhotoOptions.md) |

#### Returns

`string`

#### Defined in

node_modules/@types/google.maps/index.d.ts:9663
