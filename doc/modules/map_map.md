[my-webpack-project](../README.md) / [Exports](../modules.md) / map/map

# Module: map/map

## Table of contents

### Namespaces

- [&lt;internal\&gt;](map_map._internal_.md)

### Functions

- [load](map_map.md#load)
- [processResult](map_map.md#processresult)

## Functions

### load

▸ **load**(): `Promise`<[`HTMLLinkElement`](input._internal_.md#htmllinkelement) \| [`HTMLScriptElement`](input._internal_.md#htmlscriptelement)\>

Load js required for map to work.

#### Returns

`Promise`<[`HTMLLinkElement`](input._internal_.md#htmllinkelement) \| [`HTMLScriptElement`](input._internal_.md#htmlscriptelement)\>

- Resource load promise.

#### Defined in

[src/map/map.ts:15](https://github.com/hitendrarao/location/blob/6f44bad/src/map/map.ts#L15)

___

### processResult

▸ **processResult**(`result`): [`default`](../interfaces/interface_placedata.default.md)

Processes result of geocode and autocomplete predictions to IPlacedata.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `result` | [`Result`](map_map._internal_.md#result) | Place result. |

#### Returns

[`default`](../interfaces/interface_placedata.default.md)

PlaceData.

#### Defined in

[src/map/map.ts:64](https://github.com/hitendrarao/location/blob/6f44bad/src/map/map.ts#L64)
