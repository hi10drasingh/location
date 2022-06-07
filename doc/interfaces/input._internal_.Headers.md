[Droom Google Location Plugin - v1.0.13](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / Headers

# Interface: Headers

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).Headers

This Fetch API interface allows you to perform various actions on HTTP request and response headers. These actions include retrieving, setting, adding to, and removing. A Headers object has an associated header list, which is initially empty and consists of zero or more name and value pairs.  You can add to this using methods like append() (see Examples.) In all methods of this interface, header names are matched by case-insensitive byte sequence.

## Table of contents

### Methods

- [append](input._internal_.Headers.md#append)
- [delete](input._internal_.Headers.md#delete)
- [forEach](input._internal_.Headers.md#foreach)
- [get](input._internal_.Headers.md#get)
- [has](input._internal_.Headers.md#has)
- [set](input._internal_.Headers.md#set)

## Methods

### append

▸ **append**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8407

___

### delete

▸ **delete**(`name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8408

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `string`, `parent`: [`Headers`](../modules/input._internal_.md#headers)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8412

___

### get

▸ **get**(`name`): ``null`` \| `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8409

___

### has

▸ **has**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8410

___

### set

▸ **set**(`name`, `value`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8411
