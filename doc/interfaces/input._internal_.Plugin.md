[Droom Google Location Plugin - v1.0.4](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / Plugin

# Interface: Plugin

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).Plugin

Provides information about a browser plugin.

**`deprecated`**

## Indexable

▪ [index: `number`]: [`MimeType`](../modules/input._internal_.md#mimetype)

## Table of contents

### Properties

- [description](input._internal_.Plugin.md#description)
- [filename](input._internal_.Plugin.md#filename)
- [length](input._internal_.Plugin.md#length)
- [name](input._internal_.Plugin.md#name)

### Methods

- [item](input._internal_.Plugin.md#item)
- [namedItem](input._internal_.Plugin.md#nameditem)

## Properties

### description

• `Readonly` **description**: `string`

Returns the plugin's description.

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10841

___

### filename

• `Readonly` **filename**: `string`

Returns the plugin library's filename, if applicable on the current platform.

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10846

___

### length

• `Readonly` **length**: `number`

Returns the number of MIME types, represented by MimeType objects, supported by the plugin.

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10851

___

### name

• `Readonly` **name**: `string`

Returns the plugin's name.

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10856

## Methods

### item

▸ **item**(`index`): ``null`` \| [`MimeType`](../modules/input._internal_.md#mimetype)

Returns the specified MimeType object.

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`MimeType`](../modules/input._internal_.md#mimetype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10861

___

### namedItem

▸ **namedItem**(`name`): ``null`` \| [`MimeType`](../modules/input._internal_.md#mimetype)

**`deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`MimeType`](../modules/input._internal_.md#mimetype)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10863
