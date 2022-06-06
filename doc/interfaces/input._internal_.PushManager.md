[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / PushManager

# Interface: PushManager

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).PushManager

This Push API interface provides a way to receive notifications from third-party servers as well as request URLs for push notifications.
Available only in secure contexts.

## Table of contents

### Methods

- [getSubscription](input._internal_.PushManager.md#getsubscription)
- [permissionState](input._internal_.PushManager.md#permissionstate)
- [subscribe](input._internal_.PushManager.md#subscribe)

## Methods

### getSubscription

▸ **getSubscription**(): `Promise`<``null`` \| [`PushSubscription`](../modules/input._internal_.md#pushsubscription)\>

#### Returns

`Promise`<``null`` \| [`PushSubscription`](../modules/input._internal_.md#pushsubscription)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10980

___

### permissionState

▸ **permissionState**(`options?`): `Promise`<[`PermissionState`](../modules/input._internal_.md#permissionstate)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`PushSubscriptionOptionsInit`](input._internal_.PushSubscriptionOptionsInit.md) |

#### Returns

`Promise`<[`PermissionState`](../modules/input._internal_.md#permissionstate)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10981

___

### subscribe

▸ **subscribe**(`options?`): `Promise`<[`PushSubscription`](../modules/input._internal_.md#pushsubscription)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`PushSubscriptionOptionsInit`](input._internal_.PushSubscriptionOptionsInit.md) |

#### Returns

`Promise`<[`PushSubscription`](../modules/input._internal_.md#pushsubscription)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10982
