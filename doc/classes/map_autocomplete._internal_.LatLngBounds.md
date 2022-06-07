[Droom Google Location Plugin - v1.0.13](../README.md) / [Exports](../modules.md) / [map/autocomplete](../modules/map_autocomplete.md) / [<internal\>](../modules/map_autocomplete._internal_.md) / LatLngBounds

# Class: LatLngBounds

[map/autocomplete](../modules/map_autocomplete.md).[<internal>](../modules/map_autocomplete._internal_.md).LatLngBounds

A <code><a href="#LatLngBounds">LatLngBounds</a></code> instance represents
a rectangle in geographical coordinates, including one that crosses the 180
degrees longitudinal meridian.

## Table of contents

### Constructors

- [constructor](map_autocomplete._internal_.LatLngBounds.md#constructor)

### Methods

- [contains](map_autocomplete._internal_.LatLngBounds.md#contains)
- [equals](map_autocomplete._internal_.LatLngBounds.md#equals)
- [extend](map_autocomplete._internal_.LatLngBounds.md#extend)
- [getCenter](map_autocomplete._internal_.LatLngBounds.md#getcenter)
- [getNorthEast](map_autocomplete._internal_.LatLngBounds.md#getnortheast)
- [getSouthWest](map_autocomplete._internal_.LatLngBounds.md#getsouthwest)
- [intersects](map_autocomplete._internal_.LatLngBounds.md#intersects)
- [isEmpty](map_autocomplete._internal_.LatLngBounds.md#isempty)
- [toJSON](map_autocomplete._internal_.LatLngBounds.md#tojson)
- [toSpan](map_autocomplete._internal_.LatLngBounds.md#tospan)
- [toString](map_autocomplete._internal_.LatLngBounds.md#tostring)
- [toUrlValue](map_autocomplete._internal_.LatLngBounds.md#tourlvalue)
- [union](map_autocomplete._internal_.LatLngBounds.md#union)

## Constructors

### constructor

• **new LatLngBounds**(`swOrLatLngBounds?`, `ne?`)

A <code><a href="#LatLngBounds">LatLngBounds</a></code> instance
represents a rectangle in geographical coordinates, including one that
crosses the 180 degrees longitudinal meridian.

#### Parameters

| Name | Type |
| :------ | :------ |
| `swOrLatLngBounds?` | ``null`` \| [`LatLng`](map_autocomplete._internal_.LatLng.md) \| [`LatLngLiteral`](../interfaces/map_autocomplete._internal_.LatLngLiteral.md) \| [`LatLngBounds`](map_autocomplete._internal_.LatLngBounds.md) |
| `ne?` | ``null`` \| [`LatLng`](map_autocomplete._internal_.LatLng.md) \| [`LatLngLiteral`](../interfaces/map_autocomplete._internal_.LatLngLiteral.md) |

#### Defined in

node_modules/@types/google.maps/index.d.ts:3212

## Methods

### contains

▸ **contains**(`latLng`): `boolean`

Returns <code>true</code> if the given lat/lng is in this bounds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `latLng` | [`LatLng`](map_autocomplete._internal_.LatLng.md) \| [`LatLngLiteral`](../interfaces/map_autocomplete._internal_.LatLngLiteral.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/google.maps/index.d.ts:3219

___

### equals

▸ **equals**(`other`): `boolean`

Returns <code>true</code> if this bounds approximately equals the given
bounds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | ``null`` \| [`LatLngBounds`](map_autocomplete._internal_.LatLngBounds.md) \| [`LatLngBoundsLiteral`](../interfaces/map_autocomplete._internal_.LatLngBoundsLiteral.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/google.maps/index.d.ts:3224

___

### extend

▸ **extend**(`point`): [`LatLngBounds`](map_autocomplete._internal_.LatLngBounds.md)

Extends this bounds to contain the given point.

#### Parameters

| Name | Type |
| :------ | :------ |
| `point` | [`LatLng`](map_autocomplete._internal_.LatLng.md) \| [`LatLngLiteral`](../interfaces/map_autocomplete._internal_.LatLngLiteral.md) |

#### Returns

[`LatLngBounds`](map_autocomplete._internal_.LatLngBounds.md)

#### Defined in

node_modules/@types/google.maps/index.d.ts:3229

___

### getCenter

▸ **getCenter**(): [`LatLng`](map_autocomplete._internal_.LatLng.md)

Computes the center of this LatLngBounds

#### Returns

[`LatLng`](map_autocomplete._internal_.LatLng.md)

#### Defined in

node_modules/@types/google.maps/index.d.ts:3234

___

### getNorthEast

▸ **getNorthEast**(): [`LatLng`](map_autocomplete._internal_.LatLng.md)

Returns the north-east corner of this bounds.

#### Returns

[`LatLng`](map_autocomplete._internal_.LatLng.md)

#### Defined in

node_modules/@types/google.maps/index.d.ts:3238

___

### getSouthWest

▸ **getSouthWest**(): [`LatLng`](map_autocomplete._internal_.LatLng.md)

Returns the south-west corner of this bounds.

#### Returns

[`LatLng`](map_autocomplete._internal_.LatLng.md)

#### Defined in

node_modules/@types/google.maps/index.d.ts:3242

___

### intersects

▸ **intersects**(`other`): `boolean`

Returns <code>true</code> if this bounds shares any points with the other
bounds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`LatLngBounds`](map_autocomplete._internal_.LatLngBounds.md) \| [`LatLngBoundsLiteral`](../interfaces/map_autocomplete._internal_.LatLngBoundsLiteral.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/google.maps/index.d.ts:3247

___

### isEmpty

▸ **isEmpty**(): `boolean`

Returns if the bounds are empty.

#### Returns

`boolean`

#### Defined in

node_modules/@types/google.maps/index.d.ts:3252

___

### toJSON

▸ **toJSON**(): [`LatLngBoundsLiteral`](../interfaces/map_autocomplete._internal_.LatLngBoundsLiteral.md)

Converts to JSON representation. This function is intended to be used via
<code>JSON.stringify</code>.

#### Returns

[`LatLngBoundsLiteral`](../interfaces/map_autocomplete._internal_.LatLngBoundsLiteral.md)

#### Defined in

node_modules/@types/google.maps/index.d.ts:3257

___

### toSpan

▸ **toSpan**(): [`LatLng`](map_autocomplete._internal_.LatLng.md)

Converts the given map bounds to a lat/lng span.

#### Returns

[`LatLng`](map_autocomplete._internal_.LatLng.md)

#### Defined in

node_modules/@types/google.maps/index.d.ts:3261

___

### toString

▸ **toString**(): `string`

Converts to string.

#### Returns

`string`

#### Defined in

node_modules/@types/google.maps/index.d.ts:3265

___

### toUrlValue

▸ **toUrlValue**(`precision?`): `string`

Returns a string of the form &quot;lat_lo,lng_lo,lat_hi,lng_hi&quot; for
this bounds, where &quot;lo&quot; corresponds to the southwest corner of
the bounding box, while &quot;hi&quot; corresponds to the northeast
corner of that box.

#### Parameters

| Name | Type |
| :------ | :------ |
| `precision?` | `number` |

#### Returns

`string`

#### Defined in

node_modules/@types/google.maps/index.d.ts:3272

___

### union

▸ **union**(`other`): [`LatLngBounds`](map_autocomplete._internal_.LatLngBounds.md)

Extends this bounds to contain the union of this and the given bounds.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | [`LatLngBounds`](map_autocomplete._internal_.LatLngBounds.md) \| [`LatLngBoundsLiteral`](../interfaces/map_autocomplete._internal_.LatLngBoundsLiteral.md) |

#### Returns

[`LatLngBounds`](map_autocomplete._internal_.LatLngBounds.md)

#### Defined in

node_modules/@types/google.maps/index.d.ts:3276
