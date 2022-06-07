[Droom Google Location Plugin - v1.0.15](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / History

# Interface: History

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).History

Allows manipulation of the browser session history, that is the pages visited in the tab or frame that the current page is loaded in.

## Table of contents

### Properties

- [length](input._internal_.History.md#length)
- [scrollRestoration](input._internal_.History.md#scrollrestoration)
- [state](input._internal_.History.md#state)

### Methods

- [back](input._internal_.History.md#back)
- [forward](input._internal_.History.md#forward)
- [go](input._internal_.History.md#go)
- [pushState](input._internal_.History.md#pushstate)
- [replaceState](input._internal_.History.md#replacestate)

## Properties

### length

• `Readonly` **length**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8422

___

### scrollRestoration

• **scrollRestoration**: [`ScrollRestoration`](../modules/input._internal_.md#scrollrestoration)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8423

___

### state

• `Readonly` **state**: `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8424

## Methods

### back

▸ **back**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8425

___

### forward

▸ **forward**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8426

___

### go

▸ **go**(`delta?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `delta?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8427

___

### pushState

▸ **pushState**(`data`, `unused`, `url?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `unused` | `string` |
| `url?` | ``null`` \| `string` \| `URL` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8428

___

### replaceState

▸ **replaceState**(`data`, `unused`, `url?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `unused` | `string` |
| `url?` | ``null`` \| `string` \| `URL` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8429
