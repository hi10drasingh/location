[Droom Google Location Plugin - v1.0.4](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / SubtleCrypto

# Interface: SubtleCrypto

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).SubtleCrypto

This Web Crypto API interface provides a number of low-level cryptographic functions. It is accessed via the Crypto.subtle properties available in a window context (via Window.crypto).
Available only in secure contexts.

## Table of contents

### Methods

- [decrypt](input._internal_.SubtleCrypto.md#decrypt)
- [deriveBits](input._internal_.SubtleCrypto.md#derivebits)
- [deriveKey](input._internal_.SubtleCrypto.md#derivekey)
- [digest](input._internal_.SubtleCrypto.md#digest)
- [encrypt](input._internal_.SubtleCrypto.md#encrypt)
- [exportKey](input._internal_.SubtleCrypto.md#exportkey)
- [generateKey](input._internal_.SubtleCrypto.md#generatekey)
- [importKey](input._internal_.SubtleCrypto.md#importkey)
- [sign](input._internal_.SubtleCrypto.md#sign)
- [unwrapKey](input._internal_.SubtleCrypto.md#unwrapkey)
- [verify](input._internal_.SubtleCrypto.md#verify)
- [wrapKey](input._internal_.SubtleCrypto.md#wrapkey)

## Methods

### decrypt

▸ **decrypt**(`algorithm`, `key`, `data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`AlgorithmIdentifier`](../modules/input._internal_.md#algorithmidentifier) \| [`RsaOaepParams`](input._internal_.RsaOaepParams.md) \| [`AesCtrParams`](input._internal_.AesCtrParams.md) \| [`AesCbcParams`](input._internal_.AesCbcParams.md) \| [`AesGcmParams`](input._internal_.AesGcmParams.md) |
| `key` | [`CryptoKey`](../modules/input._internal_.md#cryptokey) |
| `data` | [`BufferSource`](../modules/input._internal_.md#buffersource) |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13924

___

### deriveBits

▸ **deriveBits**(`algorithm`, `baseKey`, `length`): `Promise`<`ArrayBuffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`AlgorithmIdentifier`](../modules/input._internal_.md#algorithmidentifier) \| [`EcdhKeyDeriveParams`](input._internal_.EcdhKeyDeriveParams.md) \| [`HkdfParams`](input._internal_.HkdfParams.md) \| [`Pbkdf2Params`](input._internal_.Pbkdf2Params.md) |
| `baseKey` | [`CryptoKey`](../modules/input._internal_.md#cryptokey) |
| `length` | `number` |

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13925

___

### deriveKey

▸ **deriveKey**(`algorithm`, `baseKey`, `derivedKeyType`, `extractable`, `keyUsages`): `Promise`<[`CryptoKey`](../modules/input._internal_.md#cryptokey)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`AlgorithmIdentifier`](../modules/input._internal_.md#algorithmidentifier) \| [`EcdhKeyDeriveParams`](input._internal_.EcdhKeyDeriveParams.md) \| [`HkdfParams`](input._internal_.HkdfParams.md) \| [`Pbkdf2Params`](input._internal_.Pbkdf2Params.md) |
| `baseKey` | [`CryptoKey`](../modules/input._internal_.md#cryptokey) |
| `derivedKeyType` | [`AlgorithmIdentifier`](../modules/input._internal_.md#algorithmidentifier) \| [`HkdfParams`](input._internal_.HkdfParams.md) \| [`Pbkdf2Params`](input._internal_.Pbkdf2Params.md) \| [`AesDerivedKeyParams`](input._internal_.AesDerivedKeyParams.md) \| [`HmacImportParams`](input._internal_.HmacImportParams.md) |
| `extractable` | `boolean` |
| `keyUsages` | [`KeyUsage`](../modules/input._internal_.md#keyusage)[] |

#### Returns

`Promise`<[`CryptoKey`](../modules/input._internal_.md#cryptokey)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13926

___

### digest

▸ **digest**(`algorithm`, `data`): `Promise`<`ArrayBuffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`AlgorithmIdentifier`](../modules/input._internal_.md#algorithmidentifier) |
| `data` | [`BufferSource`](../modules/input._internal_.md#buffersource) |

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13927

___

### encrypt

▸ **encrypt**(`algorithm`, `key`, `data`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`AlgorithmIdentifier`](../modules/input._internal_.md#algorithmidentifier) \| [`RsaOaepParams`](input._internal_.RsaOaepParams.md) \| [`AesCtrParams`](input._internal_.AesCtrParams.md) \| [`AesCbcParams`](input._internal_.AesCbcParams.md) \| [`AesGcmParams`](input._internal_.AesGcmParams.md) |
| `key` | [`CryptoKey`](../modules/input._internal_.md#cryptokey) |
| `data` | [`BufferSource`](../modules/input._internal_.md#buffersource) |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13928

___

### exportKey

▸ **exportKey**(`format`, `key`): `Promise`<[`JsonWebKey`](input._internal_.JsonWebKey.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | ``"jwk"`` |
| `key` | [`CryptoKey`](../modules/input._internal_.md#cryptokey) |

#### Returns

`Promise`<[`JsonWebKey`](input._internal_.JsonWebKey.md)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13929

▸ **exportKey**(`format`, `key`): `Promise`<`ArrayBuffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | ``"pkcs8"`` \| ``"raw"`` \| ``"spki"`` |
| `key` | [`CryptoKey`](../modules/input._internal_.md#cryptokey) |

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13930

___

### generateKey

▸ **generateKey**(`algorithm`, `extractable`, `keyUsages`): `Promise`<[`CryptoKeyPair`](input._internal_.CryptoKeyPair.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`RsaHashedKeyGenParams`](input._internal_.RsaHashedKeyGenParams.md) \| [`EcKeyGenParams`](input._internal_.EcKeyGenParams.md) |
| `extractable` | `boolean` |
| `keyUsages` | readonly [`KeyUsage`](../modules/input._internal_.md#keyusage)[] |

#### Returns

`Promise`<[`CryptoKeyPair`](input._internal_.CryptoKeyPair.md)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13931

▸ **generateKey**(`algorithm`, `extractable`, `keyUsages`): `Promise`<[`CryptoKey`](../modules/input._internal_.md#cryptokey)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`Pbkdf2Params`](input._internal_.Pbkdf2Params.md) \| [`AesKeyGenParams`](input._internal_.AesKeyGenParams.md) \| [`HmacKeyGenParams`](input._internal_.HmacKeyGenParams.md) |
| `extractable` | `boolean` |
| `keyUsages` | readonly [`KeyUsage`](../modules/input._internal_.md#keyusage)[] |

#### Returns

`Promise`<[`CryptoKey`](../modules/input._internal_.md#cryptokey)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13932

▸ **generateKey**(`algorithm`, `extractable`, `keyUsages`): `Promise`<[`CryptoKey`](../modules/input._internal_.md#cryptokey) \| [`CryptoKeyPair`](input._internal_.CryptoKeyPair.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`AlgorithmIdentifier`](../modules/input._internal_.md#algorithmidentifier) |
| `extractable` | `boolean` |
| `keyUsages` | [`KeyUsage`](../modules/input._internal_.md#keyusage)[] |

#### Returns

`Promise`<[`CryptoKey`](../modules/input._internal_.md#cryptokey) \| [`CryptoKeyPair`](input._internal_.CryptoKeyPair.md)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13933

___

### importKey

▸ **importKey**(`format`, `keyData`, `algorithm`, `extractable`, `keyUsages`): `Promise`<[`CryptoKey`](../modules/input._internal_.md#cryptokey)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | ``"jwk"`` |
| `keyData` | [`JsonWebKey`](input._internal_.JsonWebKey.md) |
| `algorithm` | [`AlgorithmIdentifier`](../modules/input._internal_.md#algorithmidentifier) \| [`HmacImportParams`](input._internal_.HmacImportParams.md) \| [`RsaHashedImportParams`](input._internal_.RsaHashedImportParams.md) \| [`EcKeyImportParams`](input._internal_.EcKeyImportParams.md) \| [`AesKeyAlgorithm`](input._internal_.AesKeyAlgorithm.md) |
| `extractable` | `boolean` |
| `keyUsages` | readonly [`KeyUsage`](../modules/input._internal_.md#keyusage)[] |

#### Returns

`Promise`<[`CryptoKey`](../modules/input._internal_.md#cryptokey)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13934

▸ **importKey**(`format`, `keyData`, `algorithm`, `extractable`, `keyUsages`): `Promise`<[`CryptoKey`](../modules/input._internal_.md#cryptokey)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | ``"pkcs8"`` \| ``"raw"`` \| ``"spki"`` |
| `keyData` | [`BufferSource`](../modules/input._internal_.md#buffersource) |
| `algorithm` | [`AlgorithmIdentifier`](../modules/input._internal_.md#algorithmidentifier) \| [`HmacImportParams`](input._internal_.HmacImportParams.md) \| [`RsaHashedImportParams`](input._internal_.RsaHashedImportParams.md) \| [`EcKeyImportParams`](input._internal_.EcKeyImportParams.md) \| [`AesKeyAlgorithm`](input._internal_.AesKeyAlgorithm.md) |
| `extractable` | `boolean` |
| `keyUsages` | [`KeyUsage`](../modules/input._internal_.md#keyusage)[] |

#### Returns

`Promise`<[`CryptoKey`](../modules/input._internal_.md#cryptokey)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13935

___

### sign

▸ **sign**(`algorithm`, `key`, `data`): `Promise`<`ArrayBuffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`AlgorithmIdentifier`](../modules/input._internal_.md#algorithmidentifier) \| [`RsaPssParams`](input._internal_.RsaPssParams.md) \| [`EcdsaParams`](input._internal_.EcdsaParams.md) |
| `key` | [`CryptoKey`](../modules/input._internal_.md#cryptokey) |
| `data` | [`BufferSource`](../modules/input._internal_.md#buffersource) |

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13936

___

### unwrapKey

▸ **unwrapKey**(`format`, `wrappedKey`, `unwrappingKey`, `unwrapAlgorithm`, `unwrappedKeyAlgorithm`, `extractable`, `keyUsages`): `Promise`<[`CryptoKey`](../modules/input._internal_.md#cryptokey)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`KeyFormat`](../modules/input._internal_.md#keyformat) |
| `wrappedKey` | [`BufferSource`](../modules/input._internal_.md#buffersource) |
| `unwrappingKey` | [`CryptoKey`](../modules/input._internal_.md#cryptokey) |
| `unwrapAlgorithm` | [`AlgorithmIdentifier`](../modules/input._internal_.md#algorithmidentifier) \| [`RsaOaepParams`](input._internal_.RsaOaepParams.md) \| [`AesCtrParams`](input._internal_.AesCtrParams.md) \| [`AesCbcParams`](input._internal_.AesCbcParams.md) \| [`AesGcmParams`](input._internal_.AesGcmParams.md) |
| `unwrappedKeyAlgorithm` | [`AlgorithmIdentifier`](../modules/input._internal_.md#algorithmidentifier) \| [`HmacImportParams`](input._internal_.HmacImportParams.md) \| [`RsaHashedImportParams`](input._internal_.RsaHashedImportParams.md) \| [`EcKeyImportParams`](input._internal_.EcKeyImportParams.md) \| [`AesKeyAlgorithm`](input._internal_.AesKeyAlgorithm.md) |
| `extractable` | `boolean` |
| `keyUsages` | [`KeyUsage`](../modules/input._internal_.md#keyusage)[] |

#### Returns

`Promise`<[`CryptoKey`](../modules/input._internal_.md#cryptokey)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13937

___

### verify

▸ **verify**(`algorithm`, `key`, `signature`, `data`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `algorithm` | [`AlgorithmIdentifier`](../modules/input._internal_.md#algorithmidentifier) \| [`RsaPssParams`](input._internal_.RsaPssParams.md) \| [`EcdsaParams`](input._internal_.EcdsaParams.md) |
| `key` | [`CryptoKey`](../modules/input._internal_.md#cryptokey) |
| `signature` | [`BufferSource`](../modules/input._internal_.md#buffersource) |
| `data` | [`BufferSource`](../modules/input._internal_.md#buffersource) |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13938

___

### wrapKey

▸ **wrapKey**(`format`, `key`, `wrappingKey`, `wrapAlgorithm`): `Promise`<`ArrayBuffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `format` | [`KeyFormat`](../modules/input._internal_.md#keyformat) |
| `key` | [`CryptoKey`](../modules/input._internal_.md#cryptokey) |
| `wrappingKey` | [`CryptoKey`](../modules/input._internal_.md#cryptokey) |
| `wrapAlgorithm` | [`AlgorithmIdentifier`](../modules/input._internal_.md#algorithmidentifier) \| [`RsaOaepParams`](input._internal_.RsaOaepParams.md) \| [`AesCtrParams`](input._internal_.AesCtrParams.md) \| [`AesCbcParams`](input._internal_.AesCbcParams.md) \| [`AesGcmParams`](input._internal_.AesGcmParams.md) |

#### Returns

`Promise`<`ArrayBuffer`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:13939
