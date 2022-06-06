[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / [map/map](../modules/map_map.md) / [<internal\>](../modules/map_map._internal_.md) / PlaceOpeningHoursPeriod

# Interface: PlaceOpeningHoursPeriod

[map/map](../modules/map_map.md).[<internal>](../modules/map_map._internal_.md).PlaceOpeningHoursPeriod

Defines structured information about the opening hours of a Place.
<strong>Note:</strong> If a Place is <strong>always open</strong>, the
<code>close</code> section will be missing from the response. Clients can
rely on always-open being represented as an <code>open</code> period
containing <code>day</code> with value <code>0</code> and <code>time</code>
with value <code>"0000"</code>, and no <code>close</code>.</li>

## Table of contents

### Properties

- [close](map_map._internal_.PlaceOpeningHoursPeriod.md#close)
- [open](map_map._internal_.PlaceOpeningHoursPeriod.md#open)

## Properties

### close

• `Optional` **close**: [`PlaceOpeningHoursTime`](map_map._internal_.PlaceOpeningHoursTime.md)

The closing time for the Place.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9604

___

### open

• **open**: [`PlaceOpeningHoursTime`](map_map._internal_.PlaceOpeningHoursTime.md)

The opening time for the Place.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9608
