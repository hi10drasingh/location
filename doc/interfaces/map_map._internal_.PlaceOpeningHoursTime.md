[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [map/map](../modules/map_map.md) / [<internal\>](../modules/map_map._internal_.md) / PlaceOpeningHoursTime

# Interface: PlaceOpeningHoursTime

[map/map](../modules/map_map.md).[<internal>](../modules/map_map._internal_.md).PlaceOpeningHoursTime

Defines when a Place opens or closes.

## Table of contents

### Properties

- [day](map_map._internal_.PlaceOpeningHoursTime.md#day)
- [hours](map_map._internal_.PlaceOpeningHoursTime.md#hours)
- [minutes](map_map._internal_.PlaceOpeningHoursTime.md#minutes)
- [nextDate](map_map._internal_.PlaceOpeningHoursTime.md#nextdate)
- [time](map_map._internal_.PlaceOpeningHoursTime.md#time)

## Properties

### day

• **day**: `number`

The days of the week, as a number in the range [<code>0</code>,
<code>6</code>], starting on Sunday. For example, <code>2</code> means
Tuesday.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9621

___

### hours

• **hours**: `number`

The hours of the {@link google.maps.places.PlaceOpeningHoursTime.time} as
a number, in the range [<code>0</code>, <code>23</code>]. This will be
reported in the Place’s time zone.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9627

___

### minutes

• **minutes**: `number`

The minutes of the {@link google.maps.places.PlaceOpeningHoursTime.time}
as a number, in the range [<code>0</code>, <code>59</code>]. This will be
reported in the Place’s time zone.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9633

___

### nextDate

• `Optional` **nextDate**: `number`

The timestamp (as milliseconds since the epoch, suitable for use with
<code>new Date()</code>) representing the next occurrence of this
PlaceOpeningHoursTime. It is calculated from the {@link
google.maps.places.PlaceOpeningHoursTime.day} of week, the {@link
google.maps.places.PlaceOpeningHoursTime.time}, and the {@link
google.maps.places.PlaceResult.utc_offset_minutes}. If the {@link
google.maps.places.PlaceResult.utc_offset_minutes} is
<code>undefined</code>, then <code>nextDate</code> will be
<code>undefined</code>.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9645

___

### time

• **time**: `string`

The time of day in 24-hour &quot;hhmm&quot; format. Values are in the
range
[<code>"0000"</code>, <code>"2359"</code>]. The time will be reported in
the Place’s time zone.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9652
