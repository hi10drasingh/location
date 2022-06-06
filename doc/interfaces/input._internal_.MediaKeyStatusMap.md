[Droom Google Location Plugin - v1.0.4](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / MediaKeyStatusMap

# Interface: MediaKeyStatusMap

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).MediaKeyStatusMap

This EncryptedMediaExtensions API interface is a read-only map of media key statuses by key IDs.
Available only in secure contexts.

## Table of contents

### Properties

- [size](input._internal_.MediaKeyStatusMap.md#size)

### Methods

- [forEach](input._internal_.MediaKeyStatusMap.md#foreach)
- [get](input._internal_.MediaKeyStatusMap.md#get)
- [has](input._internal_.MediaKeyStatusMap.md#has)

## Properties

### size

• `Readonly` **size**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9383

## Methods

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: [`MediaKeyStatus`](../modules/input._internal_.md#mediakeystatus), `key`: [`BufferSource`](../modules/input._internal_.md#buffersource), `parent`: [`MediaKeyStatusMap`](../modules/input._internal_.md#mediakeystatusmap)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9386

___

### get

▸ **get**(`keyId`): `undefined` \| [`MediaKeyStatus`](../modules/input._internal_.md#mediakeystatus)

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyId` | [`BufferSource`](../modules/input._internal_.md#buffersource) |

#### Returns

`undefined` \| [`MediaKeyStatus`](../modules/input._internal_.md#mediakeystatus)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9384

___

### has

▸ **has**(`keyId`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `keyId` | [`BufferSource`](../modules/input._internal_.md#buffersource) |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9385
