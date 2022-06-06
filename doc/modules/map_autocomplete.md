[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / map/autocomplete

# Module: map/autocomplete

## Table of contents

### Namespaces

- [&lt;internal\&gt;](map_autocomplete._internal_.md)

### Functions

- [GetAutoCompletePredictions](map_autocomplete.md#getautocompletepredictions)
- [HandlerAutoCompleteItemClick](map_autocomplete.md#handlerautocompleteitemclick)

## Functions

### GetAutoCompletePredictions

▸ **GetAutoCompletePredictions**(`request`): `Promise`<[`AutocompleteResponse`](../classes/map_autocomplete._internal_.AutocompleteResponse.md)\>

Fetches predictions from google maps according to requests obj.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`AutocompletionRequest`](../interfaces/map_autocomplete._internal_.AutocompletionRequest.md) | Request obj from GetPlacePrediction Api. |

#### Returns

`Promise`<[`AutocompleteResponse`](../classes/map_autocomplete._internal_.AutocompleteResponse.md)\>

Prediction Results.

#### Defined in

[src/map/autocomplete/index.ts:17](https://github.com/hitendrarao/location/blob/c9a9cea/src/map/autocomplete/index.ts#L17)

___

### HandlerAutoCompleteItemClick

▸ **HandlerAutoCompleteItemClick**(`request`, `inputEle`): `void`

Event handler for suggestions elements result click.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `request` | [`GeocoderRequest`](../interfaces/map_autocomplete._internal_.GeocoderRequest.md) | Request Obj. |
| `inputEle` | [`HTMLInputElement`](input._internal_.md#htmlinputelement) | Current input element to which suggestions as bound. |

#### Returns

`void`

#### Defined in

[src/map/autocomplete/index.ts:30](https://github.com/hitendrarao/location/blob/c9a9cea/src/map/autocomplete/index.ts#L30)
