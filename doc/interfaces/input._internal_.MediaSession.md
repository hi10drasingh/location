[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / MediaSession

# Interface: MediaSession

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).MediaSession

## Table of contents

### Properties

- [metadata](input._internal_.MediaSession.md#metadata)
- [playbackState](input._internal_.MediaSession.md#playbackstate)

### Methods

- [setActionHandler](input._internal_.MediaSession.md#setactionhandler)
- [setPositionState](input._internal_.MediaSession.md#setpositionstate)

## Properties

### metadata

• **metadata**: ``null`` \| [`MediaMetadata`](../modules/input._internal_.md#mediametadata)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9532

___

### playbackState

• **playbackState**: [`MediaSessionPlaybackState`](../modules/input._internal_.md#mediasessionplaybackstate)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9533

## Methods

### setActionHandler

▸ **setActionHandler**(`action`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | [`MediaSessionAction`](../modules/input._internal_.md#mediasessionaction) |
| `handler` | ``null`` \| [`MediaSessionActionHandler`](input._internal_.MediaSessionActionHandler.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9534

___

### setPositionState

▸ **setPositionState**(`state?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `state?` | [`MediaPositionState`](input._internal_.MediaPositionState.md) |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9535
