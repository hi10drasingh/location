[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [map/autocomplete](../modules/map_autocomplete.md) / [<internal\>](../modules/map_autocomplete._internal_.md) / LatLng

# Class: LatLng

[map/autocomplete](../modules/map_autocomplete.md).[<internal>](../modules/map_autocomplete._internal_.md).LatLng

A <code>LatLng</code> is a point in geographical coordinates: latitude and
longitude.<br> <ul> <li>Latitude ranges between -90 and 90 degrees,
inclusive. Values above or below this range will be clamped to the range
[-90, 90]. This means that if the value specified is less than -90, it will
be set to -90. And if the value is greater than 90, it will be set
to 90.</li> <li>Longitude ranges between -180 and 180 degrees, inclusive.
Values above or below this range will be wrapped so that they fall within
the range. For example, a value of -190 will be converted to 170. A value
of 190 will be converted to -170. This reflects the fact that longitudes
wrap around the globe.</li> </ul> Although the default map projection
associates longitude with the x-coordinate of the map, and latitude with
the y-coordinate, the latitude coordinate is always written <em>first</em>,
followed by the longitude.<br> Notice that you cannot modify the
coordinates of a <code>LatLng</code>. If you want to compute another point,
you have to create a new one.<br> <p> Most methods that accept
<code>LatLng</code> objects also accept a {@link google.maps.LatLngLiteral}
object, so that the following are equivalent: <pre> map.setCenter(new
google.maps.LatLng(-34, 151));<br> map.setCenter({lat: -34, lng: 151});
</pre> <p> The constructor also accepts {@link google.maps.LatLngLiteral}
and <code>LatLng</code> objects. If a <code>LatLng</code> instance is
passed to the constructor, a copy is created. <p> The possible calls to the
constructor are below: <pre> new google.maps.LatLng(-34, 151);<br> new
google.maps.LatLng(-34, 151, true);<br> new google.maps.LatLng({lat: -34,
lng: 151});<br> new google.maps.LatLng({lat: -34, lng: 151}, true);<br> new
google.maps.LatLng({lat: -34, lng: 151}, null, true);<br> new
google.maps.LatLng(new google.maps.LatLng(-34, 151));<br> new
google.maps.LatLng(new google.maps.LatLng(-34, 151), true);<br> new
google.maps.LatLng(new google.maps.LatLng(-34, 151), null, true); </pre>

## Table of contents

### Constructors

- [constructor](map_autocomplete._internal_.LatLng.md#constructor)

### Methods

- [equals](map_autocomplete._internal_.LatLng.md#equals)
- [lat](map_autocomplete._internal_.LatLng.md#lat)
- [lng](map_autocomplete._internal_.LatLng.md#lng)
- [toJSON](map_autocomplete._internal_.LatLng.md#tojson)
- [toString](map_autocomplete._internal_.LatLng.md#tostring)
- [toUrlValue](map_autocomplete._internal_.LatLng.md#tourlvalue)

## Constructors

### constructor

• **new LatLng**(`latOrLatLngOrLatLngLiteral`, `lngOrNoClampNoWrap?`, `noClampNoWrap?`)

A <code>LatLng</code> is a point in geographical coordinates: latitude
and longitude.<br> <ul> <li>Latitude ranges between -90 and 90 degrees,
inclusive. Values above or below this range will be clamped to the range
[-90, 90]. This means that if the value specified is less than -90, it
will be set to -90. And if the value is greater than 90, it will be set
to 90.</li> <li>Longitude ranges between -180 and 180 degrees, inclusive.
Values above or below this range will be wrapped so that they fall within
the range. For example, a value of -190 will be converted to 170. A value
of 190 will be converted to -170. This reflects the fact that longitudes
wrap around the globe.</li> </ul> Although the default map projection
associates longitude with the x-coordinate of the map, and latitude with
the y-coordinate, the latitude coordinate is always written
<em>first</em>, followed by the longitude.<br> Notice that you cannot
modify the coordinates of a <code>LatLng</code>. If you want to compute
another point, you have to create a new one.<br> <p> Most methods that
accept <code>LatLng</code> objects also accept a {@link
google.maps.LatLngLiteral} object, so that the following are equivalent:
<pre> map.setCenter(new google.maps.LatLng(-34, 151));<br>
map.setCenter({lat: -34, lng: 151}); </pre> <p> The constructor also
accepts {@link google.maps.LatLngLiteral} and <code>LatLng</code>
objects. If a <code>LatLng</code> instance is passed to the constructor,
a copy is created. <p> The possible calls to the constructor are below:
<pre> new google.maps.LatLng(-34, 151);<br> new google.maps.LatLng(-34,
151, true);<br> new google.maps.LatLng({lat: -34, lng: 151});<br> new
google.maps.LatLng({lat: -34, lng: 151}, true);<br> new
google.maps.LatLng({lat: -34, lng: 151}, null, true);<br> new
google.maps.LatLng(new google.maps.LatLng(-34, 151));<br> new
google.maps.LatLng(new google.maps.LatLng(-34, 151), true);<br> new
google.maps.LatLng(new google.maps.LatLng(-34, 151), null, true); </pre>

#### Parameters

| Name | Type |
| :------ | :------ |
| `latOrLatLngOrLatLngLiteral` | `number` \| [`LatLng`](map_autocomplete._internal_.LatLng.md) \| [`LatLngLiteral`](../interfaces/map_autocomplete._internal_.LatLngLiteral.md) |
| `lngOrNoClampNoWrap?` | ``null`` \| `number` \| `boolean` |
| `noClampNoWrap?` | `boolean` |

#### Defined in

node_modules/@types/google.maps/index.d.ts:3103

## Methods

### equals

▸ **equals**(`other`): `boolean`

Comparison function.

#### Parameters

| Name | Type |
| :------ | :------ |
| `other` | ``null`` \| [`LatLng`](map_autocomplete._internal_.LatLng.md) |

#### Returns

`boolean`

#### Defined in

node_modules/@types/google.maps/index.d.ts:3110

___

### lat

▸ **lat**(): `number`

Returns the latitude in degrees.

#### Returns

`number`

#### Defined in

node_modules/@types/google.maps/index.d.ts:3114

___

### lng

▸ **lng**(): `number`

Returns the longitude in degrees.

#### Returns

`number`

#### Defined in

node_modules/@types/google.maps/index.d.ts:3118

___

### toJSON

▸ **toJSON**(): [`LatLngLiteral`](../interfaces/map_autocomplete._internal_.LatLngLiteral.md)

Converts to JSON representation. This function is intended to be used via
<code>JSON.stringify</code>.

#### Returns

[`LatLngLiteral`](../interfaces/map_autocomplete._internal_.LatLngLiteral.md)

#### Defined in

node_modules/@types/google.maps/index.d.ts:3123

___

### toString

▸ **toString**(): `string`

Converts to string representation.

#### Returns

`string`

#### Defined in

node_modules/@types/google.maps/index.d.ts:3127

___

### toUrlValue

▸ **toUrlValue**(`precision?`): `string`

Returns a string of the form &quot;lat,lng&quot; for this LatLng. We
round the lat/lng values to 6 decimal places by default.

#### Parameters

| Name | Type |
| :------ | :------ |
| `precision?` | `number` |

#### Returns

`string`

#### Defined in

node_modules/@types/google.maps/index.d.ts:3132
