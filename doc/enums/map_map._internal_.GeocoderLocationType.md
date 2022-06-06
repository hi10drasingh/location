[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / [map/map](../modules/map_map.md) / [<internal\>](../modules/map_map._internal_.md) / GeocoderLocationType

# Enumeration: GeocoderLocationType

[map/map](../modules/map_map.md).[<internal>](../modules/map_map._internal_.md).GeocoderLocationType

Describes the type of location returned from a geocode. Specify these by
value, or by using the constant&#39;s name. For example,
<code>'ROOFTOP'</code> or
<code>google.maps.GeocoderLocationType.ROOFTOP</code>.

## Table of contents

### Enumeration Members

- [APPROXIMATE](map_map._internal_.GeocoderLocationType.md#approximate)
- [GEOMETRIC\_CENTER](map_map._internal_.GeocoderLocationType.md#geometric_center)
- [RANGE\_INTERPOLATED](map_map._internal_.GeocoderLocationType.md#range_interpolated)
- [ROOFTOP](map_map._internal_.GeocoderLocationType.md#rooftop)

## Enumeration Members

### APPROXIMATE

• **APPROXIMATE**

The returned result is approximate.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2230

___

### GEOMETRIC\_CENTER

• **GEOMETRIC\_CENTER**

The returned result is the geometric center of a result such a line (e.g.
street) or polygon (region).

#### Defined in

node_modules/@types/google.maps/index.d.ts:2235

___

### RANGE\_INTERPOLATED

• **RANGE\_INTERPOLATED**

The returned result reflects an approximation (usually on a road)
interpolated between two precise points (such as intersections).
Interpolated results are generally returned when rooftop geocodes are
unavailable for a street address.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2242

___

### ROOFTOP

• **ROOFTOP**

The returned result reflects a precise geocode.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2246
