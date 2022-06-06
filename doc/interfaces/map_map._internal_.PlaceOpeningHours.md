[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [map/map](../modules/map_map.md) / [<internal\>](../modules/map_map._internal_.md) / PlaceOpeningHours

# Interface: PlaceOpeningHours

[map/map](../modules/map_map.md).[<internal>](../modules/map_map._internal_.md).PlaceOpeningHours

Defines information about the opening hours of a Place.

## Table of contents

### Properties

- [open\_now](map_map._internal_.PlaceOpeningHours.md#open_now)
- [periods](map_map._internal_.PlaceOpeningHours.md#periods)
- [weekday\_text](map_map._internal_.PlaceOpeningHours.md#weekday_text)

### Methods

- [isOpen](map_map._internal_.PlaceOpeningHours.md#isopen)

## Properties

### open\_now

• `Optional` **open\_now**: `boolean`

Whether the Place is open at the current time.

**`deprecated`** <code>open_now</code> is deprecated as of November 2019. Use
    the {@link google.maps.places.PlaceOpeningHours.isOpen} method from
    a {@link google.maps.places.PlacesService.getDetails} result instead.
    See <a
    href="https://goo.gle/js-open-now">https://goo.gle/js-open-now</a>

#### Defined in

node_modules/@types/google.maps/index.d.ts:9571

___

### periods

• `Optional` **periods**: [`PlaceOpeningHoursPeriod`](map_map._internal_.PlaceOpeningHoursPeriod.md)[]

Opening periods covering for each day of the week, starting from Sunday,
in chronological order. Days in which the Place is not open are not
included. Only available with {@link
google.maps.places.PlacesService.getDetails}.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9578

___

### weekday\_text

• `Optional` **weekday\_text**: `string`[]

An array of seven strings representing the formatted opening hours for
each day of the week. The Places Service will format and localize the
opening hours appropriately for the current language. The ordering of the
elements in this array depends on the language. Some languages start the
week on Monday while others start on Sunday. Only available with {@link
google.maps.places.PlacesService.getDetails}. Other calls may return an
empty array.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9588

## Methods

### isOpen

▸ **isOpen**(`date?`): `undefined` \| `boolean`

Check whether the place is open now (when no date is passed), or at the
given date. If this place does not have {@link
google.maps.places.PlaceResult.utc_offset_minutes} or {@link
google.maps.places.PlaceOpeningHours.periods} then <code>undefined</code>
is returned ({@link google.maps.places.PlaceOpeningHours.periods} is only
available via {@link google.maps.places.PlacesService.getDetails}). This
method does not take exceptional hours, such as holiday hours, into
consideration.

#### Parameters

| Name | Type |
| :------ | :------ |
| `date?` | `Date` |

#### Returns

`undefined` \| `boolean`

#### Defined in

node_modules/@types/google.maps/index.d.ts:9562
