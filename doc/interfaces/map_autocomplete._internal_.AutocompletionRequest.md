[Droom Google Location Plugin - v1.0.6](../README.md) / [Exports](../modules.md) / [map/autocomplete](../modules/map_autocomplete.md) / [<internal\>](../modules/map_autocomplete._internal_.md) / AutocompletionRequest

# Interface: AutocompletionRequest

[map/autocomplete](../modules/map_autocomplete.md).[<internal>](../modules/map_autocomplete._internal_.md).AutocompletionRequest

An Autocompletion request to be sent to {@link
google.maps.places.AutocompleteService.getPlacePredictions}.

## Table of contents

### Properties

- [bounds](map_autocomplete._internal_.AutocompletionRequest.md#bounds)
- [componentRestrictions](map_autocomplete._internal_.AutocompletionRequest.md#componentrestrictions)
- [input](map_autocomplete._internal_.AutocompletionRequest.md#input)
- [language](map_autocomplete._internal_.AutocompletionRequest.md#language)
- [location](map_autocomplete._internal_.AutocompletionRequest.md#location)
- [offset](map_autocomplete._internal_.AutocompletionRequest.md#offset)
- [origin](map_autocomplete._internal_.AutocompletionRequest.md#origin)
- [radius](map_autocomplete._internal_.AutocompletionRequest.md#radius)
- [region](map_autocomplete._internal_.AutocompletionRequest.md#region)
- [sessionToken](map_autocomplete._internal_.AutocompletionRequest.md#sessiontoken)
- [types](map_autocomplete._internal_.AutocompletionRequest.md#types)

## Properties

### bounds

• `Optional` **bounds**: [`LatLngBounds`](../classes/map_autocomplete._internal_.LatLngBounds.md) \| [`LatLngBoundsLiteral`](map_autocomplete._internal_.LatLngBoundsLiteral.md)

Bounds for prediction biasing. Predictions will be biased towards, but
not restricted to, the given <code>bounds</code>. Both
<code>location</code> and <code>radius</code> will be ignored if
<code>bounds</code> is set.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9247

___

### componentRestrictions

• `Optional` **componentRestrictions**: [`ComponentRestrictions`](map_autocomplete._internal_.ComponentRestrictions.md)

The component restrictions. Component restrictions are used to restrict
predictions to only those within the parent component. For example, the
country.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9253

___

### input

• **input**: `string`

The user entered input string.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9257

___

### language

• `Optional` **language**: ``null`` \| `string`

Available only in the v=beta channel: https://goo.gle/3oAthT3.
A language identifier for the language in which the results should be
returned, if possible. Results in the selected language may be given a
higher ranking, but suggestions are not restricted to this language. See
the <a href="https://developers.google.com/maps/faq#languagesupport">list
of supported languages</a>. Google often updates the supported languages,
so this list may not be exhaustive.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9267

___

### location

• `Optional` **location**: [`LatLng`](../classes/map_autocomplete._internal_.LatLng.md)

Location for prediction biasing. Predictions will be biased towards the
given <code>location</code> and <code>radius</code>. Alternatively,
<code>bounds</code> can be used.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9273

___

### offset

• `Optional` **offset**: `number`

The character position in the input term at which the service uses text
for predictions (the position of the cursor in the input field).

#### Defined in

node_modules/@types/google.maps/index.d.ts:9278

___

### origin

• `Optional` **origin**: [`LatLng`](../classes/map_autocomplete._internal_.LatLng.md) \| [`LatLngLiteral`](map_autocomplete._internal_.LatLngLiteral.md)

The location where {@link
google.maps.places.AutocompletePrediction.distance_meters} is calculated
from.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9284

___

### radius

• `Optional` **radius**: `number`

The radius of the area used for prediction biasing. The
<code>radius</code> is specified in meters, and must always be
accompanied by a <code>location</code> property. Alternatively,
<code>bounds</code> can be used.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9291

___

### region

• `Optional` **region**: ``null`` \| `string`

Available only in the v=beta channel: https://goo.gle/3oAthT3.
A region code which is used for result formatting and for result
filtering. It does not restrict the suggestions to this country. The
region code accepts a <a
href="https://en.wikipedia.org/wiki/List_of_Internet_top-level_domains#Country_code_top-level_domains">ccTLD
(&quot;top-level domain&quot;)</a> two-character value. Most ccTLD codes
are identical to ISO 3166-1 codes, with some notable exceptions. For
example, the United Kingdom&#39;s ccTLD is &quot;uk&quot;
(<code>.co.uk</code>) while its ISO 3166-1 code is &quot;gb&quot;
(technically for the entity of &quot;The United Kingdom of Great Britain
and Northern Ireland&quot;).

#### Defined in

node_modules/@types/google.maps/index.d.ts:9305

___

### sessionToken

• `Optional` **sessionToken**: [`AutocompleteSessionToken`](../classes/map_autocomplete._internal_.AutocompleteSessionToken.md)

Unique reference used to bundle individual requests into sessions.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9309

___

### types

• `Optional` **types**: `string`[]

The types of predictions to be returned. For supported types, see the <a
href="https://developers.google.com/maps/documentation/javascript/places-autocomplete#constrain-place-types">
developer&#39;s guide</a>. If no types are specified, all types will be
returned.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9316
