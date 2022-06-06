[Droom Google Location Plugin - v1.0.7](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / ReadableStreamDefaultReader

# Interface: ReadableStreamDefaultReader<R\>

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).ReadableStreamDefaultReader

## Type parameters

| Name | Type |
| :------ | :------ |
| `R` | `any` |

## Hierarchy

- [`ReadableStreamGenericReader`](input._internal_.ReadableStreamGenericReader.md)

  ↳ **`ReadableStreamDefaultReader`**

## Table of contents

### Properties

- [closed](input._internal_.ReadableStreamDefaultReader.md#closed)

### Methods

- [cancel](input._internal_.ReadableStreamDefaultReader.md#cancel)
- [read](input._internal_.ReadableStreamDefaultReader.md#read)
- [releaseLock](input._internal_.ReadableStreamDefaultReader.md#releaselock)

## Properties

### closed

• `Readonly` **closed**: `Promise`<`undefined`\>

#### Inherited from

[ReadableStreamGenericReader](input._internal_.ReadableStreamGenericReader.md).[closed](input._internal_.ReadableStreamGenericReader.md#closed)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11516

## Methods

### cancel

▸ **cancel**(`reason?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `reason?` | `any` |

#### Returns

`Promise`<`void`\>

#### Inherited from

[ReadableStreamGenericReader](input._internal_.ReadableStreamGenericReader.md).[cancel](input._internal_.ReadableStreamGenericReader.md#cancel)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11517

___

### read

▸ **read**(): `Promise`<[`ReadableStreamDefaultReadResult`](../modules/input._internal_.md#readablestreamdefaultreadresult)<`R`\>\>

#### Returns

`Promise`<[`ReadableStreamDefaultReadResult`](../modules/input._internal_.md#readablestreamdefaultreadresult)<`R`\>\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11506

___

### releaseLock

▸ **releaseLock**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11507
