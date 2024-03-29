[Droom Google Location Plugin - v1.0.16](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / XPathResult

# Interface: XPathResult

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).XPathResult

The results generated by evaluating an XPath expression within the context of a given node.

## Table of contents

### Properties

- [ANY\_TYPE](input._internal_.XPathResult.md#any_type)
- [ANY\_UNORDERED\_NODE\_TYPE](input._internal_.XPathResult.md#any_unordered_node_type)
- [BOOLEAN\_TYPE](input._internal_.XPathResult.md#boolean_type)
- [FIRST\_ORDERED\_NODE\_TYPE](input._internal_.XPathResult.md#first_ordered_node_type)
- [NUMBER\_TYPE](input._internal_.XPathResult.md#number_type)
- [ORDERED\_NODE\_ITERATOR\_TYPE](input._internal_.XPathResult.md#ordered_node_iterator_type)
- [ORDERED\_NODE\_SNAPSHOT\_TYPE](input._internal_.XPathResult.md#ordered_node_snapshot_type)
- [STRING\_TYPE](input._internal_.XPathResult.md#string_type)
- [UNORDERED\_NODE\_ITERATOR\_TYPE](input._internal_.XPathResult.md#unordered_node_iterator_type)
- [UNORDERED\_NODE\_SNAPSHOT\_TYPE](input._internal_.XPathResult.md#unordered_node_snapshot_type)
- [booleanValue](input._internal_.XPathResult.md#booleanvalue)
- [invalidIteratorState](input._internal_.XPathResult.md#invaliditeratorstate)
- [numberValue](input._internal_.XPathResult.md#numbervalue)
- [resultType](input._internal_.XPathResult.md#resulttype)
- [singleNodeValue](input._internal_.XPathResult.md#singlenodevalue)
- [snapshotLength](input._internal_.XPathResult.md#snapshotlength)
- [stringValue](input._internal_.XPathResult.md#stringvalue)

### Methods

- [iterateNext](input._internal_.XPathResult.md#iteratenext)
- [snapshotItem](input._internal_.XPathResult.md#snapshotitem)

## Properties

### ANY\_TYPE

• `Readonly` **ANY\_TYPE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17110

___

### ANY\_UNORDERED\_NODE\_TYPE

• `Readonly` **ANY\_UNORDERED\_NODE\_TYPE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17111

___

### BOOLEAN\_TYPE

• `Readonly` **BOOLEAN\_TYPE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17112

___

### FIRST\_ORDERED\_NODE\_TYPE

• `Readonly` **FIRST\_ORDERED\_NODE\_TYPE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17113

___

### NUMBER\_TYPE

• `Readonly` **NUMBER\_TYPE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17114

___

### ORDERED\_NODE\_ITERATOR\_TYPE

• `Readonly` **ORDERED\_NODE\_ITERATOR\_TYPE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17115

___

### ORDERED\_NODE\_SNAPSHOT\_TYPE

• `Readonly` **ORDERED\_NODE\_SNAPSHOT\_TYPE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17116

___

### STRING\_TYPE

• `Readonly` **STRING\_TYPE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17117

___

### UNORDERED\_NODE\_ITERATOR\_TYPE

• `Readonly` **UNORDERED\_NODE\_ITERATOR\_TYPE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17118

___

### UNORDERED\_NODE\_SNAPSHOT\_TYPE

• `Readonly` **UNORDERED\_NODE\_SNAPSHOT\_TYPE**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17119

___

### booleanValue

• `Readonly` **booleanValue**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17101

___

### invalidIteratorState

• `Readonly` **invalidIteratorState**: `boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17102

___

### numberValue

• `Readonly` **numberValue**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17103

___

### resultType

• `Readonly` **resultType**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17104

___

### singleNodeValue

• `Readonly` **singleNodeValue**: ``null`` \| [`Node`](../modules/input._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17105

___

### snapshotLength

• `Readonly` **snapshotLength**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17106

___

### stringValue

• `Readonly` **stringValue**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17107

## Methods

### iterateNext

▸ **iterateNext**(): ``null`` \| [`Node`](../modules/input._internal_.md#node)

#### Returns

``null`` \| [`Node`](../modules/input._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17108

___

### snapshotItem

▸ **snapshotItem**(`index`): ``null`` \| [`Node`](../modules/input._internal_.md#node)

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`Node`](../modules/input._internal_.md#node)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17109
