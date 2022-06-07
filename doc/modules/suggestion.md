[Droom Google Location Plugin - v1.0.16](../README.md) / [Exports](../modules.md) / suggestion

# Module: suggestion

## Table of contents

### Functions

- [HideSuggestion](suggestion.md#hidesuggestion)
- [LoadSuggestion](suggestion.md#loadsuggestion)
- [ShowSuggestion](suggestion.md#showsuggestion)
- [UpdateSuggestion](suggestion.md#updatesuggestion)

## Functions

### HideSuggestion

▸ **HideSuggestion**(): `void`

Hides The Suggestions.

#### Returns

`void`

#### Defined in

[src/suggestion/index.ts:105](https://github.com/hitendrarao/location/blob/3787eba/src/suggestion/index.ts#L105)

___

### LoadSuggestion

▸ **LoadSuggestion**(): `void`

Add suggestion html to document and apply events and attributes.

#### Returns

`void`

#### Defined in

[src/suggestion/index.ts:256](https://github.com/hitendrarao/location/blob/3787eba/src/suggestion/index.ts#L256)

___

### ShowSuggestion

▸ **ShowSuggestion**(): `void`

Displays The Suggestions.

#### Returns

`void`

#### Defined in

[src/suggestion/index.ts:95](https://github.com/hitendrarao/location/blob/3787eba/src/suggestion/index.ts#L95)

___

### UpdateSuggestion

▸ **UpdateSuggestion**(`predictions`, `selector`): `void`

Update the suggestion list according to new autocomplete predictions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predictions` | [`AutocompletePrediction`](../interfaces/map_autocomplete._internal_.AutocompletePrediction.md)[] | Autocomplete prediction from goole for typed location. |
| `selector` | `string` | Current Input Selector. |

#### Returns

`void`

#### Defined in

[src/suggestion/index.ts:308](https://github.com/hitendrarao/location/blob/3787eba/src/suggestion/index.ts#L308)
