[Droom Google Location Plugin - v1.0.6](../README.md) / [Exports](../modules.md) / [map/autocomplete](../modules/map_autocomplete.md) / [<internal\>](../modules/map_autocomplete._internal_.md) / StructuredFormatting

# Interface: StructuredFormatting

[map/autocomplete](../modules/map_autocomplete.md).[<internal>](../modules/map_autocomplete._internal_.md).StructuredFormatting

Contains structured information about the place&#39;s description, divided
into a main text and a secondary text, including an array of matched
substrings from the autocomplete input, identified by an offset and a
length, expressed in unicode characters.

## Table of contents

### Properties

- [main\_text](map_autocomplete._internal_.StructuredFormatting.md#main_text)
- [main\_text\_matched\_substrings](map_autocomplete._internal_.StructuredFormatting.md#main_text_matched_substrings)
- [secondary\_text](map_autocomplete._internal_.StructuredFormatting.md#secondary_text)

## Properties

### main\_text

• **main\_text**: `string`

This is the main text part of the unformatted description of the place
suggested by the Places service. Usually the name of the place.

#### Defined in

node_modules/@types/google.maps/index.d.ts:10337

___

### main\_text\_matched\_substrings

• **main\_text\_matched\_substrings**: [`PredictionSubstring`](map_autocomplete._internal_.PredictionSubstring.md)[]

A set of substrings in the main text that match elements in the
user&#39;s input, suitable for use in highlighting those substrings. Each
substring is identified by an offset and a length, expressed in unicode
characters.

#### Defined in

node_modules/@types/google.maps/index.d.ts:10344

___

### secondary\_text

• **secondary\_text**: `string`

This is the secondary text part of the unformatted description of the
place suggested by the Places service. Usually the location of the place.

#### Defined in

node_modules/@types/google.maps/index.d.ts:10349
