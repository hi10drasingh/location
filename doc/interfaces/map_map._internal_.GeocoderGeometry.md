[Droom Google Location Plugin - v1.0.6](../README.md) / [Exports](../modules.md) / [map/map](../modules/map_map.md) / [<internal\>](../modules/map_map._internal_.md) / GeocoderGeometry

# Interface: GeocoderGeometry

[map/map](../modules/map_map.md).[<internal>](../modules/map_map._internal_.md).GeocoderGeometry

Geometry information about this <code>GeocoderResult</code>

## Table of contents

### Properties

- [bounds](map_map._internal_.GeocoderGeometry.md#bounds)
- [location](map_map._internal_.GeocoderGeometry.md#location)
- [location\_type](map_map._internal_.GeocoderGeometry.md#location_type)
- [viewport](map_map._internal_.GeocoderGeometry.md#viewport)

## Properties

### bounds

• `Optional` **bounds**: [`LatLngBounds`](../classes/map_autocomplete._internal_.LatLngBounds.md)

The precise bounds of this <code>GeocoderResult</code>, if applicable

#### Defined in

node_modules/@types/google.maps/index.d.ts:2203

___

### location

• **location**: [`LatLng`](../classes/map_autocomplete._internal_.LatLng.md)

The latitude/longitude coordinates of this result

#### Defined in

node_modules/@types/google.maps/index.d.ts:2207

___

### location\_type

• **location\_type**: [`GeocoderLocationType`](../enums/map_map._internal_.GeocoderLocationType.md)

The type of location returned in <code>location</code>

#### Defined in

node_modules/@types/google.maps/index.d.ts:2211

___

### viewport

• **viewport**: [`LatLngBounds`](../classes/map_autocomplete._internal_.LatLngBounds.md)

The bounds of the recommended viewport for displaying this
<code>GeocoderResult</code>

#### Defined in

node_modules/@types/google.maps/index.d.ts:2216
