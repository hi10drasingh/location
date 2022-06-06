[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / [map/autocomplete](../modules/map_autocomplete.md) / [<internal\>](../modules/map_autocomplete._internal_.md) / AutocompletePrediction

# Interface: AutocompletePrediction

[map/autocomplete](../modules/map_autocomplete.md).[<internal>](../modules/map_autocomplete._internal_.md).AutocompletePrediction

Represents a single autocomplete prediction.

## Table of contents

### Properties

- [description](map_autocomplete._internal_.AutocompletePrediction.md#description)
- [distance\_meters](map_autocomplete._internal_.AutocompletePrediction.md#distance_meters)
- [matched\_substrings](map_autocomplete._internal_.AutocompletePrediction.md#matched_substrings)
- [place\_id](map_autocomplete._internal_.AutocompletePrediction.md#place_id)
- [structured\_formatting](map_autocomplete._internal_.AutocompletePrediction.md#structured_formatting)
- [terms](map_autocomplete._internal_.AutocompletePrediction.md#terms)
- [types](map_autocomplete._internal_.AutocompletePrediction.md#types)

## Properties

### description

• **description**: `string`

This is the unformatted version of the query suggested by the Places
service.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9141

___

### distance\_meters

• `Optional` **distance\_meters**: `number`

The distance in meters of the place from the {@link
google.maps.places.AutocompletionRequest.origin}.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9146

___

### matched\_substrings

• **matched\_substrings**: [`PredictionSubstring`](map_autocomplete._internal_.PredictionSubstring.md)[]

A set of substrings in the place&#39;s description that match elements in
the user&#39;s input, suitable for use in highlighting those substrings.
Each substring is identified by an offset and a length, expressed in
unicode characters.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9153

___

### place\_id

• **place\_id**: `string`

A place ID that can be used to retrieve details about this place using
the place details service (see {@link
google.maps.places.PlacesService.getDetails}).

#### Defined in

node_modules/@types/google.maps/index.d.ts:9159

___

### structured\_formatting

• **structured\_formatting**: [`StructuredFormatting`](map_autocomplete._internal_.StructuredFormatting.md)

Structured information about the place&#39;s description, divided into a
main text and a secondary text, including an array of matched substrings
from the autocomplete input, identified by an offset and a length,
expressed in unicode characters.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9166

___

### terms

• **terms**: [`PredictionTerm`](map_autocomplete._internal_.PredictionTerm.md)[]

Information about individual terms in the above description, from most to
least specific. For example, &quot;Taco Bell&quot;, &quot;Willitis&quot;,
and &quot;CA&quot;.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9172

___

### types

• **types**: `string`[]

An array of types that the prediction belongs to, for example
<code>'establishment'</code> or <code>'geocode'</code>.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9177
