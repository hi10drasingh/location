[Droom Google Location Plugin - v1.0.8](../README.md) / [Exports](../modules.md) / [map/autocomplete](../modules/map_autocomplete.md) / [<internal\>](../modules/map_autocomplete._internal_.md) / GeocoderComponentRestrictions

# Interface: GeocoderComponentRestrictions

[map/autocomplete](../modules/map_autocomplete.md).[<internal>](../modules/map_autocomplete._internal_.md).GeocoderComponentRestrictions

<code>GeocoderComponentRestrictions</code> represents a set of filters that
resolve to a specific area. For details on how this works, see <a
href="https://developers.google.com/maps/documentation/javascript/geocoding#ComponentFiltering">
Geocoding Component Filtering</a>.

## Table of contents

### Properties

- [administrativeArea](map_autocomplete._internal_.GeocoderComponentRestrictions.md#administrativearea)
- [country](map_autocomplete._internal_.GeocoderComponentRestrictions.md#country)
- [locality](map_autocomplete._internal_.GeocoderComponentRestrictions.md#locality)
- [postalCode](map_autocomplete._internal_.GeocoderComponentRestrictions.md#postalcode)
- [route](map_autocomplete._internal_.GeocoderComponentRestrictions.md#route)

## Properties

### administrativeArea

• `Optional` **administrativeArea**: `string`

Matches all the <code>administrative_area levels</code>. Optional.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2174

___

### country

• `Optional` **country**: `string`

Matches a country name or a two letter ISO 3166-1 country code. Optional.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2178

___

### locality

• `Optional` **locality**: `string`

Matches against both <code>locality</code> and <code>sublocality</code>
types. Optional.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2183

___

### postalCode

• `Optional` **postalCode**: `string`

Matches <code>postal_code</code> and <code>postal_code_prefix</code>.
Optional.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2188

___

### route

• `Optional` **route**: `string`

Matches the long or short name of a <code>route</code>. Optional.

#### Defined in

node_modules/@types/google.maps/index.d.ts:2192
