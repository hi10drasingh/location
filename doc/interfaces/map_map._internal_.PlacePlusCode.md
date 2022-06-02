[my-webpack-project](../README.md) / [Exports](../modules.md) / [map/map](../modules/map_map.md) / [<internal\>](../modules/map_map._internal_.md) / PlacePlusCode

# Interface: PlacePlusCode

[map/map](../modules/map_map.md).[<internal>](../modules/map_map._internal_.md).PlacePlusCode

Defines Open Location Codes or &quot;<a href="https://plus.codes/">plus
codes</a>&quot; for a Place. Plus codes can be used as a replacement for
street addresses in places where they do not exist (where buildings are not
numbered or streets are not named).

## Table of contents

### Properties

- [compound\_code](map_map._internal_.PlacePlusCode.md#compound_code)
- [global\_code](map_map._internal_.PlacePlusCode.md#global_code)

## Properties

### compound\_code

• `Optional` **compound\_code**: `string`

A <a href="https://plus.codes/">plus code</a> with a 1/8000th of a degree
by 1/8000th of a degree area where the first four characters (the area
code) are dropped and replaced with a locality description. For example,
<code>"9G8F+5W Zurich, Switzerland"</code>. If no suitable locality that
can be found to shorten the code then this field is omitted.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9519

___

### global\_code

• **global\_code**: `string`

A <a href="https://plus.codes/">plus code</a> with a 1/8000th of a degree
by 1/8000th of a degree area. For example, <code>"8FVC9G8F+5W"</code>.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9524
