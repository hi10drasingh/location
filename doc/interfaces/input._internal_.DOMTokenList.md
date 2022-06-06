[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / DOMTokenList

# Interface: DOMTokenList

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).DOMTokenList

A set of space-separated tokens. Such a set is returned by Element.classList, HTMLLinkElement.relList, HTMLAnchorElement.relList, HTMLAreaElement.relList, HTMLIframeElement.sandbox, or HTMLOutputElement.htmlFor. It is indexed beginning with 0 as with JavaScript Array objects. DOMTokenList is always case-sensitive.

## Indexable

▪ [index: `number`]: `string`

## Table of contents

### Properties

- [length](input._internal_.DOMTokenList.md#length)
- [value](input._internal_.DOMTokenList.md#value)

### Methods

- [add](input._internal_.DOMTokenList.md#add)
- [contains](input._internal_.DOMTokenList.md#contains)
- [forEach](input._internal_.DOMTokenList.md#foreach)
- [item](input._internal_.DOMTokenList.md#item)
- [remove](input._internal_.DOMTokenList.md#remove)
- [replace](input._internal_.DOMTokenList.md#replace)
- [supports](input._internal_.DOMTokenList.md#supports)
- [toString](input._internal_.DOMTokenList.md#tostring)
- [toggle](input._internal_.DOMTokenList.md#toggle)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of tokens.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4100

___

### value

• **value**: `string`

Returns the associated set as string.

Can be set, to change the associated attribute.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4106

## Methods

### add

▸ **add**(...`tokens`): `void`

Adds all arguments passed, except those already present.

Throws a "SyntaxError" DOMException if one of the arguments is the empty string.

Throws an "InvalidCharacterError" DOMException if one of the arguments contains any ASCII whitespace.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...tokens` | `string`[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4115

___

### contains

▸ **contains**(`token`): `boolean`

Returns true if token is present, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4117

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: `string`, `key`: `number`, `parent`: [`DOMTokenList`](../modules/input._internal_.md#domtokenlist)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4154

___

### item

▸ **item**(`index`): ``null`` \| `string`

Returns the token with index index.

#### Parameters

| Name | Type |
| :------ | :------ |
| `index` | `number` |

#### Returns

``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4119

___

### remove

▸ **remove**(...`tokens`): `void`

Removes arguments passed, if they are present.

Throws a "SyntaxError" DOMException if one of the arguments is the empty string.

Throws an "InvalidCharacterError" DOMException if one of the arguments contains any ASCII whitespace.

#### Parameters

| Name | Type |
| :------ | :------ |
| `...tokens` | `string`[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4127

___

### replace

▸ **replace**(`token`, `newToken`): `boolean`

Replaces token with newToken.

Returns true if token was replaced with newToken, and false otherwise.

Throws a "SyntaxError" DOMException if one of the arguments is the empty string.

Throws an "InvalidCharacterError" DOMException if one of the arguments contains any ASCII whitespace.

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `newToken` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4137

___

### supports

▸ **supports**(`token`): `boolean`

Returns true if token is in the associated attribute's supported tokens. Returns false otherwise.

Throws a TypeError if the associated attribute has no supported tokens defined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4143

___

### toString

▸ **toString**(): `string`

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4107

___

### toggle

▸ **toggle**(`token`, `force?`): `boolean`

If force is not given, "toggles" token, removing it if it's present and adding it if it's not present. If force is true, adds token (same as add()). If force is false, removes token (same as remove()).

Returns true if token is now present, and false otherwise.

Throws a "SyntaxError" DOMException if token is empty.

Throws an "InvalidCharacterError" DOMException if token contains any spaces.

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |
| `force?` | `boolean` |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:4153
