[Droom Google Location Plugin - v1.0.8](../README.md) / [Exports](../modules.md) / [map/autocomplete](../modules/map_autocomplete.md) / [<internal\>](../modules/map_autocomplete._internal_.md) / GeocoderRequest

# Interface: GeocoderRequest

[map/autocomplete](../modules/map_autocomplete.md).[<internal>](../modules/map_autocomplete._internal_.md).GeocoderRequest

The specification for a geocoding request to be sent to the
<code>Geocoder</code>.

## Table of contents

### Properties

- [address](map_autocomplete._internal_.GeocoderRequest.md#address)
- [bounds](map_autocomplete._internal_.GeocoderRequest.md#bounds)
- [componentRestrictions](map_autocomplete._internal_.GeocoderRequest.md#componentrestrictions)
- [location](map_autocomplete._internal_.GeocoderRequest.md#location)
- [placeId](map_autocomplete._internal_.GeocoderRequest.md#placeid)
- [region](map_autocomplete._internal_.GeocoderRequest.md#region)

## Properties

### address

• `Optional` **address**: ``null`` \| `string`

Address to geocode. One, and only one, of <code>address</code>,
<code>location</code> and <code>placeId</code> must be supplied.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2259

___

### bounds

• `Optional` **bounds**: ``null`` \| [`LatLngBounds`](../classes/map_autocomplete._internal_.LatLngBounds.md) \| [`LatLngBoundsLiteral`](map_autocomplete._internal_.LatLngBoundsLiteral.md)

<code>LatLngBounds</code> within which to search. Optional.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2263

___

### componentRestrictions

• `Optional` **componentRestrictions**: ``null`` \| [`GeocoderComponentRestrictions`](map_autocomplete._internal_.GeocoderComponentRestrictions.md)

Components are used to restrict results to a specific area. A filter
consists of one or more of: <code>route</code>, <code>locality</code>,
<code>administrativeArea</code>, <code>postalCode</code>,
<code>country</code>. Only the results that match all the filters will be
returned. Filter values support the same methods of spelling correction
and partial matching as other geocoding requests. Optional.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2272

___

### location

• `Optional` **location**: ``null`` \| [`LatLng`](../classes/map_autocomplete._internal_.LatLng.md) \| [`LatLngLiteral`](map_autocomplete._internal_.LatLngLiteral.md)

<code>LatLng</code> (or <code>LatLngLiteral</code>) for which to search.
The geocoder performs a reverse geocode. See <a
href="https://developers.google.com/maps/documentation/javascript/geocoding#ReverseGeocoding">
Reverse Geocoding</a> for more information. One, and only one, of
<code>address</code>, <code>location</code> and <code>placeId</code> must
be supplied.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2281

___

### placeId

• `Optional` **placeId**: ``null`` \| `string`

The place ID associated with the location. Place IDs uniquely identify a
place in the Google Places database and on Google Maps. Learn more about
<a
href="https://developers.google.com/maps/documentation/places/web-service/place-id">place
IDs</a> in the Places API developer guide. The geocoder performs a
reverse geocode. See <a
href="https://developers.google.com/maps/documentation/javascript/geocoding#ReverseGeocoding">Reverse
Geocoding</a> for more information. One, and only one, of
<code>address</code>, <code>location</code> and <code>placeId</code> must
be supplied.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2294

___

### region

• `Optional` **region**: ``null`` \| `string`

Country code used to bias the search, specified as a two-character
(non-numeric) Unicode region subtag / CLDR identifier. Optional. See <a
href="http://developers.google.com/maps/coverage">Google Maps Platform
Coverage Details</a> for supported regions.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2301
