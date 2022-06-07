[Droom Google Location Plugin - v1.0.13](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / MediaKeys

# Interface: MediaKeys

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).MediaKeys

This EncryptedMediaExtensions API interface the represents a set of keys that an associated HTMLMediaElement can use for decryption of media data during playback.
Available only in secure contexts.

## Table of contents

### Methods

- [createSession](input._internal_.MediaKeys.md#createsession)
- [setServerCertificate](input._internal_.MediaKeys.md#setservercertificate)

## Methods

### createSession

▸ **createSession**(`sessionType?`): [`MediaKeySession`](../modules/input._internal_.md#mediakeysession)

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionType?` | [`MediaKeySessionType`](../modules/input._internal_.md#mediakeysessiontype) |

#### Returns

[`MediaKeySession`](../modules/input._internal_.md#mediakeysession)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9414

___

### setServerCertificate

▸ **setServerCertificate**(`serverCertificate`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `serverCertificate` | [`BufferSource`](../modules/input._internal_.md#buffersource) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9415
