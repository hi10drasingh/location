[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [map/map](../modules/map_map.md) / [<internal\>](../modules/map_map._internal_.md) / PlaceGeometry

# Interface: PlaceGeometry

[map/map](../modules/map_map.md).[<internal>](../modules/map_map._internal_.md).PlaceGeometry

Defines information about the geometry of a Place.

## Table of contents

### Properties

- [location](map_map._internal_.PlaceGeometry.md#location)
- [viewport](map_map._internal_.PlaceGeometry.md#viewport)

## Properties

### location

• `Optional` **location**: [`LatLng`](../classes/map_autocomplete._internal_.LatLng.md)

The Place’s position.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9537

___

### viewport

• `Optional` **viewport**: [`LatLngBounds`](../classes/map_autocomplete._internal_.LatLngBounds.md)

The preferred viewport when displaying this Place on a map. This property
will be <code>null</code> if the preferred viewport for the Place is not
known. Only available with {@link
google.maps.places.PlacesService.getDetails}.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9544
