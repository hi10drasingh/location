[Droom Google Location Plugin - v1.0.4](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / IDBKeyRange

# Interface: IDBKeyRange

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).IDBKeyRange

A key range can be a single value or a range with upper and lower bounds or endpoints. If the key range has both upper and lower bounds, then it is bounded; if it has no bounds, it is unbounded. A bounded key range can either be open (the endpoints are excluded) or closed (the endpoints are included). To retrieve all keys within a certain range, you can use the following code constructs:

## Table of contents

### Properties

- [lower](input._internal_.IDBKeyRange.md#lower)
- [lowerOpen](input._internal_.IDBKeyRange.md#loweropen)
- [upper](input._internal_.IDBKeyRange.md#upper)
- [upperOpen](input._internal_.IDBKeyRange.md#upperopen)

### Methods

- [includes](input._internal_.IDBKeyRange.md#includes)

## Properties

### lower

• `Readonly` **lower**: `any`

Returns lower bound, or undefined if none.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8613

___

### lowerOpen

• `Readonly` **lowerOpen**: `boolean`

Returns true if the lower open flag is set, and false otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8615

___

### upper

• `Readonly` **upper**: `any`

Returns upper bound, or undefined if none.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8617

___

### upperOpen

• `Readonly` **upperOpen**: `boolean`

Returns true if the upper open flag is set, and false otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8619

## Methods

### includes

▸ **includes**(`key`): `boolean`

Returns true if key is included in the range, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `any` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8621
