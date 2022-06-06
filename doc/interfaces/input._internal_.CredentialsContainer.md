[Droom Google Location Plugin - v1.0.4](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / CredentialsContainer

# Interface: CredentialsContainer

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).CredentialsContainer

Available only in secure contexts.

## Table of contents

### Methods

- [create](input._internal_.CredentialsContainer.md#create)
- [get](input._internal_.CredentialsContainer.md#get)
- [preventSilentAccess](input._internal_.CredentialsContainer.md#preventsilentaccess)
- [store](input._internal_.CredentialsContainer.md#store)

## Methods

### create

▸ **create**(`options?`): `Promise`<``null`` \| [`Credential`](../modules/input._internal_.md#credential)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`CredentialCreationOptions`](input._internal_.CredentialCreationOptions.md) |

#### Returns

`Promise`<``null`` \| [`Credential`](../modules/input._internal_.md#credential)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3713

___

### get

▸ **get**(`options?`): `Promise`<``null`` \| [`Credential`](../modules/input._internal_.md#credential)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`CredentialRequestOptions`](input._internal_.CredentialRequestOptions.md) |

#### Returns

`Promise`<``null`` \| [`Credential`](../modules/input._internal_.md#credential)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3714

___

### preventSilentAccess

▸ **preventSilentAccess**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3715

___

### store

▸ **store**(`credential`): `Promise`<[`Credential`](../modules/input._internal_.md#credential)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `credential` | [`Credential`](../modules/input._internal_.md#credential) |

#### Returns

`Promise`<[`Credential`](../modules/input._internal_.md#credential)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3716
