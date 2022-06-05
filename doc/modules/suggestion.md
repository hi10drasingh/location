[location-plugin](../README.md) / [Exports](../modules.md) / suggestion

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

[suggestion/index.ts:99](https://github.com/hitendrarao/location/blob/d401e71/src/suggestion/index.ts#L99)

___

### LoadSuggestion

▸ **LoadSuggestion**(): `void`

Add suggestion html to document and apply events and attributes.

#### Returns

`void`

#### Defined in

[suggestion/index.ts:250](https://github.com/hitendrarao/location/blob/d401e71/src/suggestion/index.ts#L250)

___

### ShowSuggestion

▸ **ShowSuggestion**(): `void`

Displays The Suggestions.

#### Returns

`void`

#### Defined in

[suggestion/index.ts:89](https://github.com/hitendrarao/location/blob/d401e71/src/suggestion/index.ts#L89)

___

### UpdateSuggestion

▸ **UpdateSuggestion**(`predictions`, `selector`): `void`

Update the suggestion list according to new autocomplete predictions.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `predictions` | `AutocompletePrediction`[] | Autocomplete prediction from goole for typed location. |
| `selector` | `string` | Current Input Selector. |

#### Returns

`void`

#### Defined in

[suggestion/index.ts:298](https://github.com/hitendrarao/location/blob/d401e71/src/suggestion/index.ts#L298)
