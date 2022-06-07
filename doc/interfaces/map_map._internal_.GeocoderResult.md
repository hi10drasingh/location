[Droom Google Location Plugin - v1.0.15](../README.md) / [Exports](../modules.md) / [map/map](../modules/map_map.md) / [<internal\>](../modules/map_map._internal_.md) / GeocoderResult

# Interface: GeocoderResult

[map/map](../modules/map_map.md).[<internal>](../modules/map_map._internal_.md).GeocoderResult

A single geocoder result retrieved from the geocode server. A geocode
request may return multiple result objects. Note that though this result is
&quot;JSON-like,&quot; it is not strictly JSON, as it indirectly includes a
<code>LatLng</code> object.

## Table of contents

### Properties

- [address\_components](map_map._internal_.GeocoderResult.md#address_components)
- [formatted\_address](map_map._internal_.GeocoderResult.md#formatted_address)
- [geometry](map_map._internal_.GeocoderResult.md#geometry)
- [partial\_match](map_map._internal_.GeocoderResult.md#partial_match)
- [place\_id](map_map._internal_.GeocoderResult.md#place_id)
- [plus\_code](map_map._internal_.GeocoderResult.md#plus_code)
- [postcode\_localities](map_map._internal_.GeocoderResult.md#postcode_localities)
- [types](map_map._internal_.GeocoderResult.md#types)

## Properties

### address\_components

• **address\_components**: [`GeocoderAddressComponent`](map_map._internal_.GeocoderAddressComponent.md)[]

An array of <code>GeocoderAddressComponent</code>s

#### Defined in

node_modules/@types/google.maps/index.d.ts:2327

___

### formatted\_address

• **formatted\_address**: `string`

A string containing the human-readable address of this location.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2331

___

### geometry

• **geometry**: [`GeocoderGeometry`](map_map._internal_.GeocoderGeometry.md)

A <code>GeocoderGeometry</code> object

#### Defined in

node_modules/@types/google.maps/index.d.ts:2335

___

### partial\_match

• `Optional` **partial\_match**: `boolean`

Whether the geocoder did not return an exact match for the original
request, though it was able to match part of the requested address. If an
exact match, the value will be <code>undefined</code>.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2341

___

### place\_id

• **place\_id**: `string`

The place ID associated with the location. Place IDs uniquely identify a
place in the Google Places database and on Google Maps. Learn more about
<a
href="https://developers.google.com/maps/documentation/places/web-service/place-id">Place
IDs</a> in the Places API developer guide.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2349

___

### plus\_code

• `Optional` **plus\_code**: [`PlacePlusCode`](map_map._internal_.PlacePlusCode.md)

The plus code associated with the location.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2353

___

### postcode\_localities

• `Optional` **postcode\_localities**: `string`[]

An array of strings denoting all the localities contained in a postal
code. This is only present when the result is a postal code that contains
multiple localities. This array can contain up to 10 localities.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2359

___

### types

• **types**: `string`[]

An array of strings denoting the type of the returned geocoded element.
For a list of possible strings, refer to the <a href=
"https://developers.google.com/maps/documentation/javascript/geocoding#GeocodingAddressTypes">
Address Component Types</a> section of the Developer&#39;s Guide.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2366
