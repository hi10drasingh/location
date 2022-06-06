[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / Crypto

# Interface: Crypto

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).Crypto

Basic cryptography features available in the current context. It allows access to a cryptographically strong random number generator and to cryptographic primitives.

## Table of contents

### Properties

- [subtle](input._internal_.Crypto.md#subtle)

### Methods

- [getRandomValues](input._internal_.Crypto.md#getrandomvalues)
- [randomUUID](input._internal_.Crypto.md#randomuuid)

## Properties

### subtle

• `Readonly` **subtle**: [`SubtleCrypto`](../modules/input._internal_.md#subtlecrypto)

Available only in secure contexts.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3727

## Methods

### getRandomValues

▸ **getRandomValues**<`T`\>(`array`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends ``null`` \| [`ArrayBufferView`](input._internal_.ArrayBufferView.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `array` | `T` |

#### Returns

`T`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3728

___

### randomUUID

▸ **randomUUID**(): `string`

Available only in secure contexts.

#### Returns

`string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3730
