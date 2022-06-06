[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / PushSubscription

# Interface: PushSubscription

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).PushSubscription

This Push API interface provides a subcription's URL endpoint and allows unsubscription from a push service.
Available only in secure contexts.

## Table of contents

### Properties

- [endpoint](input._internal_.PushSubscription.md#endpoint)
- [options](input._internal_.PushSubscription.md#options)

### Methods

- [getKey](input._internal_.PushSubscription.md#getkey)
- [toJSON](input._internal_.PushSubscription.md#tojson)
- [unsubscribe](input._internal_.PushSubscription.md#unsubscribe)

## Properties

### endpoint

• `Readonly` **endpoint**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10996

___

### options

• `Readonly` **options**: [`PushSubscriptionOptions`](../modules/input._internal_.md#pushsubscriptionoptions)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10997

## Methods

### getKey

▸ **getKey**(`name`): ``null`` \| `ArrayBuffer`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | [`PushEncryptionKeyName`](../modules/input._internal_.md#pushencryptionkeyname) |

#### Returns

``null`` \| `ArrayBuffer`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10998

___

### toJSON

▸ **toJSON**(): [`PushSubscriptionJSON`](input._internal_.PushSubscriptionJSON.md)

#### Returns

[`PushSubscriptionJSON`](input._internal_.PushSubscriptionJSON.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10999

___

### unsubscribe

▸ **unsubscribe**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11000
