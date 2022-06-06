[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / CustomElementRegistry

# Interface: CustomElementRegistry

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).CustomElementRegistry

## Table of contents

### Methods

- [define](input._internal_.CustomElementRegistry.md#define)
- [get](input._internal_.CustomElementRegistry.md#get)
- [upgrade](input._internal_.CustomElementRegistry.md#upgrade)
- [whenDefined](input._internal_.CustomElementRegistry.md#whendefined)

## Methods

### define

▸ **define**(`name`, `constructor`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `constructor` | [`CustomElementConstructor`](input._internal_.CustomElementConstructor.md) |
| `options?` | [`ElementDefinitionOptions`](input._internal_.ElementDefinitionOptions.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3755

___

### get

▸ **get**(`name`): `undefined` \| [`CustomElementConstructor`](input._internal_.CustomElementConstructor.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`undefined` \| [`CustomElementConstructor`](input._internal_.CustomElementConstructor.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3756

___

### upgrade

▸ **upgrade**(`root`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `root` | [`Node`](../modules/input._internal_.md#node) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3757

___

### whenDefined

▸ **whenDefined**(`name`): `Promise`<[`CustomElementConstructor`](input._internal_.CustomElementConstructor.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`Promise`<[`CustomElementConstructor`](input._internal_.CustomElementConstructor.md)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3758
