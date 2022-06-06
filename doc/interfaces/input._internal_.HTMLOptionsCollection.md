[Droom Google Location Plugin - v1.0.6](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / HTMLOptionsCollection

# Interface: HTMLOptionsCollection

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).HTMLOptionsCollection

HTMLOptionsCollection is an interface representing a collection of HTML option elements (in document order) and offers methods and properties for traversing the list as well as optionally altering its items. This type is returned solely by the "options" property of select.

## Hierarchy

- [`HTMLCollectionOf`](input._internal_.HTMLCollectionOf.md)<[`HTMLOptionElement`](../modules/input._internal_.md#htmloptionelement)\>

  ↳ **`HTMLOptionsCollection`**

## Table of contents

### Properties

- [length](input._internal_.HTMLOptionsCollection.md#length)
- [selectedIndex](input._internal_.HTMLOptionsCollection.md#selectedindex)

### Methods

- [add](input._internal_.HTMLOptionsCollection.md#add)
- [item](input._internal_.HTMLOptionsCollection.md#item)
- [namedItem](input._internal_.HTMLOptionsCollection.md#nameditem)
- [remove](input._internal_.HTMLOptionsCollection.md#remove)

## Properties

### length

• **length**: `number`

Returns the number of elements in the collection.

When set to a smaller number, truncates the number of option elements in the corresponding container.

When set to a greater number, adds new blank option elements to that container.

#### Overrides

[HTMLCollectionOf](input._internal_.HTMLCollectionOf.md).[length](input._internal_.HTMLCollectionOf.md#length)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7520

___

### selectedIndex

• **selectedIndex**: `number`

Returns the index of the first selected item, if any, or −1 if there is no selected item.

Can be set, to change the selection.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7526

## Methods

### add

▸ **add**(`element`, `before?`): `void`

Inserts element before the node given by before.

The before argument can be a number, in which case element is inserted before the item with that number, or an element from the collection, in which case element is inserted before that element.

If before is omitted, null, or a number out of range, then element will be added at the end of the list.

This method will throw a "HierarchyRequestError" DOMException if element is an ancestor of the element into which it is to be inserted.

#### Parameters

| Name | Type |
| :------ | :------ |
| `element` | [`HTMLOptGroupElement`](../modules/input._internal_.md#htmloptgroupelement) \| [`HTMLOptionElement`](../modules/input._internal_.md#htmloptionelement) |
| `before?` | ``null`` \| `number` \| [`HTMLElement`](../modules/input._internal_.md#htmlelement) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7536

___

### item

▸ **item**(`index`): ``null`` \| [`HTMLOptionElement`](../modules/input._internal_.md#htmloptionelement)

Retrieves an object from various collections.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| [`HTMLOptionElement`](../modules/input._internal_.md#htmloptionelement)

#### Inherited from

[HTMLCollectionOf](input._internal_.HTMLCollectionOf.md).[item](input._internal_.HTMLCollectionOf.md#item)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6205

___

### namedItem

▸ **namedItem**(`name`): ``null`` \| [`HTMLOptionElement`](../modules/input._internal_.md#htmloptionelement)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`HTMLOptionElement`](../modules/input._internal_.md#htmloptionelement)

#### Inherited from

[HTMLCollectionOf](input._internal_.HTMLCollectionOf.md).[namedItem](input._internal_.HTMLCollectionOf.md#nameditem)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:6206

___

### remove

▸ **remove**(`index`): `void`

Removes the item with index index from the collection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:7538
