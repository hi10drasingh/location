[my-webpack-project](../README.md) / [Exports](../modules.md) / map/autocomplete

# Module: map/autocomplete

## Table of contents

### Functions

- [GetAutoCompletePredictions](map_autocomplete.md#getautocompletepredictions)
- [HandlerAutoCompleteItemClick](map_autocomplete.md#handlerautocompleteitemclick)
- [LoadAutoComplete](map_autocomplete.md#loadautocomplete)

## Functions

### GetAutoCompletePredictions

▸ **GetAutoCompletePredictions**(`request`): `Promise`<`AutocompleteResponse`\>

Fetches predictions from google maps according to requests obj.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `AutocompletionRequest` | Request obj from GetPlacePrediction Api. |

#### Returns

`Promise`<`AutocompleteResponse`\>

Prediction Results.

#### Defined in

[map/autocomplete.ts:25](https://github.com/hitendrarao/location/blob/56352cf/src/map/autocomplete.ts#L25)

___

### HandlerAutoCompleteItemClick

▸ **HandlerAutoCompleteItemClick**(`request`, `inputEle`): `void`

Event handler for suggestions elements result click.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | `GeocoderRequest` | Request Obj. |
| `inputEle` | `HTMLInputElement` | Current input element to which suggestions as bound. |

#### Returns

`void`

#### Defined in

[map/autocomplete.ts:38](https://github.com/hitendrarao/location/blob/56352cf/src/map/autocomplete.ts#L38)

___

### LoadAutoComplete

▸ **LoadAutoComplete**(): `Promise`<`HTMLLinkElement` \| `HTMLScriptElement`\>

Load css required for autocomplete.

#### Returns

`Promise`<`HTMLLinkElement` \| `HTMLScriptElement`\>

Resolves to resource.

#### Defined in

[map/autocomplete.ts:17](https://github.com/hitendrarao/location/blob/56352cf/src/map/autocomplete.ts#L17)
