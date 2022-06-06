[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / PerformanceMeasure

# Interface: PerformanceMeasure

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).PerformanceMeasure

PerformanceMeasure is an abstract interface for PerformanceEntry objects with an entryType of "measure". Entries of this type are created by calling performance.measure() to add a named DOMHighResTimeStamp (the measure) between two marks to the browser's performance timeline.

## Hierarchy

- [`PerformanceEntry`](../modules/input._internal_.md#performanceentry)

  ↳ **`PerformanceMeasure`**

## Table of contents

### Properties

- [detail](input._internal_.PerformanceMeasure.md#detail)
- [duration](input._internal_.PerformanceMeasure.md#duration)
- [entryType](input._internal_.PerformanceMeasure.md#entrytype)
- [name](input._internal_.PerformanceMeasure.md#name)
- [startTime](input._internal_.PerformanceMeasure.md#starttime)

### Methods

- [toJSON](input._internal_.PerformanceMeasure.md#tojson)

## Properties

### detail

• `Readonly` **detail**: `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10594

___

### duration

• `Readonly` **duration**: `number`

#### Inherited from

PerformanceEntry.duration

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10557

___

### entryType

• `Readonly` **entryType**: `string`

#### Inherited from

PerformanceEntry.entryType

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10558

___

### name

• `Readonly` **name**: `string`

#### Inherited from

PerformanceEntry.name

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10559

___

### startTime

• `Readonly` **startTime**: `number`

#### Inherited from

PerformanceEntry.startTime

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10560

## Methods

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Inherited from

PerformanceEntry.toJSON

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10561
