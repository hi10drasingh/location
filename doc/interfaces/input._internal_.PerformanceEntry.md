[Droom Google Location Plugin - v1.0.4](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / PerformanceEntry

# Interface: PerformanceEntry

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).PerformanceEntry

Encapsulates a single performance metric that is part of the performance timeline. A performance entry can be directly created by making a performance mark or measure (for example by calling the mark() method) at an explicit point in an application. Performance entries are also created in indirect ways such as loading a resource (such as an image).

## Table of contents

### Properties

- [duration](input._internal_.PerformanceEntry.md#duration)
- [entryType](input._internal_.PerformanceEntry.md#entrytype)
- [name](input._internal_.PerformanceEntry.md#name)
- [startTime](input._internal_.PerformanceEntry.md#starttime)

### Methods

- [toJSON](input._internal_.PerformanceEntry.md#tojson)

## Properties

### duration

• `Readonly` **duration**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10557

___

### entryType

• `Readonly` **entryType**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10558

___

### name

• `Readonly` **name**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10559

___

### startTime

• `Readonly` **startTime**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10560

## Methods

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10561
