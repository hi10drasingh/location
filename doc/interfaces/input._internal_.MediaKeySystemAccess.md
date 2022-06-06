[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / MediaKeySystemAccess

# Interface: MediaKeySystemAccess

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).MediaKeySystemAccess

This EncryptedMediaExtensions API interface provides access to a Key System for decryption and/or a content protection provider. You can request an instance of this object using the Navigator.requestMediaKeySystemAccess method.
Available only in secure contexts.

## Table of contents

### Properties

- [keySystem](input._internal_.MediaKeySystemAccess.md#keysystem)

### Methods

- [createMediaKeys](input._internal_.MediaKeySystemAccess.md#createmediakeys)
- [getConfiguration](input._internal_.MediaKeySystemAccess.md#getconfiguration)

## Properties

### keySystem

• `Readonly` **keySystem**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9399

## Methods

### createMediaKeys

▸ **createMediaKeys**(): `Promise`<[`MediaKeys`](../modules/input._internal_.md#mediakeys)\>

#### Returns

`Promise`<[`MediaKeys`](../modules/input._internal_.md#mediakeys)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9400

___

### getConfiguration

▸ **getConfiguration**(): [`MediaKeySystemConfiguration`](input._internal_.MediaKeySystemConfiguration.md)

#### Returns

[`MediaKeySystemConfiguration`](input._internal_.MediaKeySystemConfiguration.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9401
