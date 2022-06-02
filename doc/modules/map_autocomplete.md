[my-webpack-project](../README.md) / [Exports](../modules.md) / map/autocomplete

# Module: map/autocomplete

## Table of contents

### Namespaces

- [&lt;internal\&gt;](map_autocomplete._internal_.md)

### Functions

- [GetAutoCompletePredictions](map_autocomplete.md#getautocompletepredictions)
- [HandlerAutoCompleteItemClick](map_autocomplete.md#handlerautocompleteitemclick)
- [LoadAutoComplete](map_autocomplete.md#loadautocomplete)

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

[src/map/autocomplete.ts:25](https://github.com/hitendrarao/location/blob/6f44bad/src/map/autocomplete.ts#L25)

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

[src/map/autocomplete.ts:38](https://github.com/hitendrarao/location/blob/6f44bad/src/map/autocomplete.ts#L38)

___

### LoadAutoComplete

▸ **LoadAutoComplete**(): `Promise`<[`HTMLLinkElement`](input._internal_.md#htmllinkelement) \| [`HTMLScriptElement`](input._internal_.md#htmlscriptelement)\>

Load css required for autocomplete.

#### Returns

`Promise`<[`HTMLLinkElement`](input._internal_.md#htmllinkelement) \| [`HTMLScriptElement`](input._internal_.md#htmlscriptelement)\>

Resolves to resource.

#### Defined in

[src/map/autocomplete.ts:17](https://github.com/hitendrarao/location/blob/6f44bad/src/map/autocomplete.ts#L17)
