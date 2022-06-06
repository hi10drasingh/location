[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / [map/autocomplete](../modules/map_autocomplete.md) / [<internal\>](../modules/map_autocomplete._internal_.md) / LatLngLiteral

# Interface: LatLngLiteral

[map/autocomplete](../modules/map_autocomplete.md).[<internal>](../modules/map_autocomplete._internal_.md).LatLngLiteral

Object literals are accepted in place of <code>LatLng</code> objects, as a
convenience, in many places. These are converted to <code>LatLng</code>
objects when the Maps API encounters them. <p> Examples: <pre>
map.setCenter({lat: -34, lng: 151});<br> new
google.maps.Marker({position: {lat: -34, lng: 151}, map: map}); </pre> <p
class="note">LatLng object literals are not supported in the Geometry
library.</p>

## Table of contents

### Properties

- [lat](map_autocomplete._internal_.LatLngLiteral.md#lat)
- [lng](map_autocomplete._internal_.LatLngLiteral.md#lng)

## Properties

### lat

• **lat**: `number`

Latitude in degrees. Values will be clamped to the range [-90, 90]. This
means that if the value specified is less than -90, it will be set to
-90. And if the value is greater than 90, it will be set to 90.

#### Defined in

node_modules/@types/google.maps/index.d.ts:3333

___

### lng

• **lng**: `number`

Longitude in degrees. Values outside the range [-180, 180] will be
wrapped so that they fall within the range. For example, a value of -190
will be converted to 170. A value of 190 will be converted to -170. This
reflects the fact that longitudes wrap around the globe.

#### Defined in

node_modules/@types/google.maps/index.d.ts:3340
