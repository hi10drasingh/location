[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / PluginArray

# Interface: PluginArray

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).PluginArray

Used to store a list of Plugin objects describing the available plugins; it's returned by the window.navigator.plugins property. The PluginArray is not a JavaScript array, but has the length property and supports accessing individual items using bracket notation (plugins[2]), as well as via item(index) and namedItem("name") methods.

**`deprecated`**

## Indexable

▪ [index: `number`]: [`Plugin`](../modules/input._internal_.md#plugin)

## Table of contents

### Properties

- [length](input._internal_.PluginArray.md#length)

### Methods

- [item](input._internal_.PluginArray.md#item)
- [namedItem](input._internal_.PluginArray.md#nameditem)
- [refresh](input._internal_.PluginArray.md#refresh)

## Properties

### length

• `Readonly` **length**: `number`

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10879

## Methods

### item

▸ **item**(`index`): ``null`` \| [`Plugin`](../modules/input._internal_.md#plugin)

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`Plugin`](../modules/input._internal_.md#plugin)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10881

___

### namedItem

▸ **namedItem**(`name`): ``null`` \| [`Plugin`](../modules/input._internal_.md#plugin)

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`Plugin`](../modules/input._internal_.md#plugin)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10883

___

### refresh

▸ **refresh**(): `void`

**`deprecated`**

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10885
