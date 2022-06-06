[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / [map/map](../modules/map_map.md) / [<internal\>](../modules/map_map._internal_.md) / PlaceResult

# Interface: PlaceResult

[map/map](../modules/map_map.md).[<internal>](../modules/map_map._internal_.md).PlaceResult

Defines information about a Place.

## Table of contents

### Properties

- [address\_components](map_map._internal_.PlaceResult.md#address_components)
- [adr\_address](map_map._internal_.PlaceResult.md#adr_address)
- [aspects](map_map._internal_.PlaceResult.md#aspects)
- [business\_status](map_map._internal_.PlaceResult.md#business_status)
- [formatted\_address](map_map._internal_.PlaceResult.md#formatted_address)
- [formatted\_phone\_number](map_map._internal_.PlaceResult.md#formatted_phone_number)
- [geometry](map_map._internal_.PlaceResult.md#geometry)
- [html\_attributions](map_map._internal_.PlaceResult.md#html_attributions)
- [icon](map_map._internal_.PlaceResult.md#icon)
- [icon\_background\_color](map_map._internal_.PlaceResult.md#icon_background_color)
- [icon\_mask\_base\_uri](map_map._internal_.PlaceResult.md#icon_mask_base_uri)
- [international\_phone\_number](map_map._internal_.PlaceResult.md#international_phone_number)
- [name](map_map._internal_.PlaceResult.md#name)
- [opening\_hours](map_map._internal_.PlaceResult.md#opening_hours)
- [permanently\_closed](map_map._internal_.PlaceResult.md#permanently_closed)
- [photos](map_map._internal_.PlaceResult.md#photos)
- [place\_id](map_map._internal_.PlaceResult.md#place_id)
- [plus\_code](map_map._internal_.PlaceResult.md#plus_code)
- [price\_level](map_map._internal_.PlaceResult.md#price_level)
- [rating](map_map._internal_.PlaceResult.md#rating)
- [reviews](map_map._internal_.PlaceResult.md#reviews)
- [types](map_map._internal_.PlaceResult.md#types)
- [url](map_map._internal_.PlaceResult.md#url)
- [user\_ratings\_total](map_map._internal_.PlaceResult.md#user_ratings_total)
- [utc\_offset](map_map._internal_.PlaceResult.md#utc_offset)
- [utc\_offset\_minutes](map_map._internal_.PlaceResult.md#utc_offset_minutes)
- [vicinity](map_map._internal_.PlaceResult.md#vicinity)
- [website](map_map._internal_.PlaceResult.md#website)

## Properties

### address\_components

• `Optional` **address\_components**: [`GeocoderAddressComponent`](map_map._internal_.GeocoderAddressComponent.md)[]

The collection of address components for this Place’s location. Only
available with {@link google.maps.places.PlacesService.getDetails}.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9710

___

### adr\_address

• `Optional` **adr\_address**: `string`

The representation of the Place’s address in the <a
href="http://microformats.org/wiki/adr">adr microformat</a>. Only
available with {@link google.maps.places.PlacesService.getDetails}.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9716

___

### aspects

• `Optional` **aspects**: [`PlaceAspectRating`](map_map._internal_.PlaceAspectRating.md)[]

The rated aspects of this Place, based on Google and Zagat user reviews.
The ratings are on a scale of 0 to 30.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9721

___

### business\_status

• `Optional` **business\_status**: [`BusinessStatus`](../enums/map_map._internal_.BusinessStatus.md)

A flag indicating the operational status of the Place, if it is a
business (indicates whether the place is operational, or closed either
temporarily or permanently). If no data is available, the flag is not
present in search or details responses.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9728

___

### formatted\_address

• `Optional` **formatted\_address**: `string`

The Place’s full address.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9732

___

### formatted\_phone\_number

• `Optional` **formatted\_phone\_number**: `string`

The Place’s phone number, formatted according to the <a
href="http://en.wikipedia.org/wiki/Local_conventions_for_writing_telephone_numbers">
number&#39;s regional convention</a>. Only available with {@link
google.maps.places.PlacesService.getDetails}.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9739

___

### geometry

• `Optional` **geometry**: [`PlaceGeometry`](map_map._internal_.PlaceGeometry.md)

The Place’s geometry-related information.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9743

___

### html\_attributions

• `Optional` **html\_attributions**: `string`[]

Attribution text to be displayed for this Place result. Available
<code>html_attributions</code> are always returned regardless of what
<code>fields</code> have been requested, and must be displayed.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9749

___

### icon

• `Optional` **icon**: `string`

URL to an image resource that can be used to represent this Place’s
category.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9754

___

### icon\_background\_color

• `Optional` **icon\_background\_color**: `string`

Background color for use with a Place&#39;s icon. See also {@link
google.maps.places.PlaceResult.icon_mask_base_uri}.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9759

___

### icon\_mask\_base\_uri

• `Optional` **icon\_mask\_base\_uri**: `string`

A truncated URL to an icon mask. Access different icon types by appending
a file extension to the end (i.e. <code>.svg</code> or
<code>.png</code>).

#### Defined in

node_modules/@types/google.maps/index.d.ts:9765

___

### international\_phone\_number

• `Optional` **international\_phone\_number**: `string`

The Place’s phone number in international format. International format
includes the country code, and is prefixed with the plus (+) sign. Only
available with {@link google.maps.places.PlacesService.getDetails}.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9771

___

### name

• `Optional` **name**: `string`

The Place’s name. Note: In the case of user entered Places, this is the
raw text, as typed by the user. Please exercise caution when using this
data, as malicious users may try to use it as a vector for code injection
attacks (See <a href="http://en.wikipedia.org/wiki/Code_injection">
http://en.wikipedia.org/wiki/Code_injection</a>).

#### Defined in

node_modules/@types/google.maps/index.d.ts:9779

___

### opening\_hours

• `Optional` **opening\_hours**: [`PlaceOpeningHours`](map_map._internal_.PlaceOpeningHours.md)

Defines when the Place opens or closes.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9783

___

### permanently\_closed

• `Optional` **permanently\_closed**: `boolean`

A flag indicating whether the Place is closed, either permanently or
temporarily. If the place is operational, or if no data is available, the
flag is absent from the response.

**`deprecated`** <code>permanently_closed</code> is deprecated as of May 2020
    and will be turned off in May 2021. Use {@link
    google.maps.places.PlaceResult.business_status} instead as
    <code>permanently_closed</code> does not distinguish between
    temporary and permanent closures.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9794

___

### photos

• `Optional` **photos**: [`PlacePhoto`](map_map._internal_.PlacePhoto.md)[]

Photos of this Place. The collection will contain up to ten {@link
google.maps.places.PlacePhoto} objects.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9799

___

### place\_id

• `Optional` **place\_id**: `string`

A unique identifier for the Place.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9803

___

### plus\_code

• `Optional` **plus\_code**: [`PlacePlusCode`](map_map._internal_.PlacePlusCode.md)

Defines Open Location Codes or &quot;<a href="https://plus.codes/">plus
codes</a>&quot; for the Place.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9808

___

### price\_level

• `Optional` **price\_level**: `number`

The price level of the Place, on a scale of 0 to 4. Price levels are
interpreted as follows: <ul style="list-style-type: none;">
<li><code>0</code>: Free <li><code>1</code>: Inexpensive
<li><code>2</code>: Moderate <li><code>3</code>: Expensive
<li><code>4</code>: Very Expensive
</ul>

#### Defined in

node_modules/@types/google.maps/index.d.ts:9817

___

### rating

• `Optional` **rating**: `number`

A rating, between 1.0 to 5.0, based on user reviews of this Place.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9821

___

### reviews

• `Optional` **reviews**: [`PlaceReview`](map_map._internal_.PlaceReview.md)[]

A list of reviews of this Place. Only available with {@link
google.maps.places.PlacesService.getDetails}.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9826

___

### types

• `Optional` **types**: `string`[]

An array of <a
href="https://developers.google.com/maps/documentation/places/web-service/supported_types">
types for this Place</a> (for example, <code>["political",
"locality"]</code> or <code>["restaurant", "establishment"]</code>).

#### Defined in

node_modules/@types/google.maps/index.d.ts:9833

___

### url

• `Optional` **url**: `string`

URL of the official Google page for this place. This is the Google-owned
page that contains the best available information about the Place. Only
available with {@link google.maps.places.PlacesService.getDetails}.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9839

___

### user\_ratings\_total

• `Optional` **user\_ratings\_total**: `number`

The number of user ratings which contributed to this Place’s {@link
google.maps.places.PlaceResult.rating}.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9844

___

### utc\_offset

• `Optional` **utc\_offset**: `number`

The offset from UTC of the Place’s current timezone, in minutes. For
example, Sydney, Australia in daylight savings is 11 hours ahead of UTC,
so the <code>utc_offset</code> will be <code>660</code>. For timezones
behind UTC, the offset is negative. For example, the
<code>utc_offset</code> is <code>-60</code> for Cape Verde. Only
available with {@link google.maps.places.PlacesService.getDetails}.

**`deprecated`** <code>utc_offset</code> is deprecated as of November 2019.
    Use {@link google.maps.places.PlaceResult.utc_offset_minutes}
    instead. See <a
    href="https://goo.gle/js-open-now">https://goo.gle/js-open-now</a>

#### Defined in

node_modules/@types/google.maps/index.d.ts:9857

___

### utc\_offset\_minutes

• `Optional` **utc\_offset\_minutes**: `number`

The offset from UTC of the Place’s current timezone, in minutes. For
example, Sydney, Australia in daylight savings is 11 hours ahead of UTC,
so the <code>utc_offset_minutes</code> will be <code>660</code>. For
timezones behind UTC, the offset is negative. For example, the
<code>utc_offset_minutes</code> is <code>-60</code> for Cape Verde. Only
available with {@link google.maps.places.PlacesService.getDetails}.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9866

___

### vicinity

• `Optional` **vicinity**: `string`

The simplified address for the Place, including the street name, street
number, and locality, but not the province/state, postal code, or
country. For example, Google&#39;s Sydney, Australia office has a
vicinity value of <code>"48 Pirrama Road, Pyrmont"</code>. Only available
with {@link google.maps.places.PlacesService.getDetails}.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9874

___

### website

• `Optional` **website**: `string`

The authoritative website for this Place, such as a business&#39;
homepage. Only available with {@link
google.maps.places.PlacesService.getDetails}.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9880
