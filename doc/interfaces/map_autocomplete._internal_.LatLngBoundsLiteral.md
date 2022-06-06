[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / [map/autocomplete](../modules/map_autocomplete.md) / [<internal\>](../modules/map_autocomplete._internal_.md) / LatLngBoundsLiteral

# Interface: LatLngBoundsLiteral

[map/autocomplete](../modules/map_autocomplete.md).[<internal>](../modules/map_autocomplete._internal_.md).LatLngBoundsLiteral

Object literals are accepted in place of <code>LatLngBounds</code> objects
throughout the API. These are automatically converted to
<code>LatLngBounds</code> objects. All <code>south</code>,
<code>west</code>, <code>north</code> and <code>east</code> must be set,
otherwise an exception is thrown.

## Table of contents

### Properties

- [east](map_autocomplete._internal_.LatLngBoundsLiteral.md#east)
- [north](map_autocomplete._internal_.LatLngBoundsLiteral.md#north)
- [south](map_autocomplete._internal_.LatLngBoundsLiteral.md#south)
- [west](map_autocomplete._internal_.LatLngBoundsLiteral.md#west)

## Properties

### east

• **east**: `number`

East longitude in degrees. Values outside the range [-180, 180] will be
wrapped to the range [-180, 180). For example, a value of -190 will be
converted to 170. A value of 190 will be converted to -170. This reflects
the fact that longitudes wrap around the globe.

#### Defined in

node_modules/@types/google.maps/index.d.ts:3295

___

### north

• **north**: `number`

North latitude in degrees. Values will be clamped to the range [-90, 90].
This means that if the value specified is less than -90, it will be set
to -90. And if the value is greater than 90, it will be set to 90.

#### Defined in

node_modules/@types/google.maps/index.d.ts:3301

___

### south

• **south**: `number`

South latitude in degrees. Values will be clamped to the range [-90, 90].
This means that if the value specified is less than -90, it will be set
to -90. And if the value is greater than 90, it will be set to 90.

#### Defined in

node_modules/@types/google.maps/index.d.ts:3307

___

### west

• **west**: `number`

West longitude in degrees. Values outside the range [-180, 180] will be
wrapped to the range [-180, 180). For example, a value of -190 will be
converted to 170. A value of 190 will be converted to -170. This reflects
the fact that longitudes wrap around the globe.

#### Defined in

node_modules/@types/google.maps/index.d.ts:3314
