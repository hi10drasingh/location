[location-plugin](../README.md) / [Exports](../modules.md) / map/autocomplete

# Module: map/autocomplete

## Table of contents

### Functions

- [GetAutoCompletePredictions](map_autocomplete.md#getautocompletepredictions)
- [HandlerAutoCompleteItemClick](map_autocomplete.md#handlerautocompleteitemclick)

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

[map/autocomplete/index.ts:17](https://github.com/hitendrarao/location/blob/d401e71/src/map/autocomplete/index.ts#L17)

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

[map/autocomplete/index.ts:30](https://github.com/hitendrarao/location/blob/d401e71/src/map/autocomplete/index.ts#L30)
