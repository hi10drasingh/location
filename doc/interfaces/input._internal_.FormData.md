[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / FormData

# Interface: FormData

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).FormData

Provides a way to easily construct a set of key/value pairs representing form fields and their values, which can then be easily sent using the XMLHttpRequest.send() method. It uses the same format a form would use if the encoding type were set to "multipart/form-data".

## Table of contents

### Methods

- [append](input._internal_.FormData.md#append)
- [delete](input._internal_.FormData.md#delete)
- [forEach](input._internal_.FormData.md#foreach)
- [get](input._internal_.FormData.md#get)
- [getAll](input._internal_.FormData.md#getall)
- [has](input._internal_.FormData.md#has)
- [set](input._internal_.FormData.md#set)

## Methods

### append

▸ **append**(`name`, `value`, `fileName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` \| `Blob` |
| `fileName?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5392

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

node_modules/typescript/lib/lib.dom.d.ts:5393

___

### forEach

▸ **forEach**(`callbackfn`, `thisArg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callbackfn` | (`value`: [`FormDataEntryValue`](../modules/input._internal_.md#formdataentryvalue), `key`: `string`, `parent`: [`FormData`](../modules/input._internal_.md#formdata)) => `void` |
| `thisArg?` | `any` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5398

___

### get

▸ **get**(`name`): ``null`` \| [`FormDataEntryValue`](../modules/input._internal_.md#formdataentryvalue)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

``null`` \| [`FormDataEntryValue`](../modules/input._internal_.md#formdataentryvalue)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5394

___

### getAll

▸ **getAll**(`name`): [`FormDataEntryValue`](../modules/input._internal_.md#formdataentryvalue)[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`FormDataEntryValue`](../modules/input._internal_.md#formdataentryvalue)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5395

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

node_modules/typescript/lib/lib.dom.d.ts:5396

___

### set

▸ **set**(`name`, `value`, `fileName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `value` | `string` \| `Blob` |
| `fileName?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5397
