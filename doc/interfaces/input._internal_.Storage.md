[Droom Google Location Plugin - v1.0.16](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / Storage

# Interface: Storage

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).Storage

This Web Storage API interface provides access to a particular domain's session or local storage. It allows, for example, the addition, modification, or deletion of stored data items.

## Indexable

▪ [name: `string`]: `any`

## Table of contents

### Properties

- [length](input._internal_.Storage.md#length)

### Methods

- [clear](input._internal_.Storage.md#clear)
- [getItem](input._internal_.Storage.md#getitem)
- [key](input._internal_.Storage.md#key)
- [removeItem](input._internal_.Storage.md#removeitem)
- [setItem](input._internal_.Storage.md#setitem)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of key/value pairs.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13809

## Methods

### clear

▸ **clear**(): `void`

Removes all key/value pairs, if there are any.

Dispatches a storage event on Window objects holding an equivalent Storage object.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13815

___

### getItem

▸ **getItem**(`key`): ``null`` \| `string`

Returns the current value associated with the given key, or null if the given key does not exist.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13817

___

### key

▸ **key**(`index`): ``null`` \| `string`

Returns the name of the nth key, or null if n is greater than or equal to the number of key/value pairs.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13819

___

### removeItem

▸ **removeItem**(`key`): `void`

Removes the key/value pair with the given key, if a key/value pair with the given key exists.

Dispatches a storage event on Window objects holding an equivalent Storage object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13825

___

### setItem

▸ **setItem**(`key`, `value`): `void`

Sets the value of the pair identified by key to value, creating a new key/value pair if none existed for key previously.

Throws a "QuotaExceededError" DOMException exception if the new value couldn't be set. (Setting could fail if, e.g., the user has disabled storage for the site, or if the quota has been exceeded.)

Dispatches a storage event on Window objects holding an equivalent Storage object.

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13833
