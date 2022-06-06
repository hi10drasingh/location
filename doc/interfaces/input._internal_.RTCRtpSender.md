[Droom Google Location Plugin - v1.0.8](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / RTCRtpSender

# Interface: RTCRtpSender

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).RTCRtpSender

Provides the ability to control and obtain details about how a particular MediaStreamTrack is encoded and sent to a remote peer.

## Table of contents

### Properties

- [dtmf](input._internal_.RTCRtpSender.md#dtmf)
- [track](input._internal_.RTCRtpSender.md#track)
- [transport](input._internal_.RTCRtpSender.md#transport)

### Methods

- [getParameters](input._internal_.RTCRtpSender.md#getparameters)
- [getStats](input._internal_.RTCRtpSender.md#getstats)
- [replaceTrack](input._internal_.RTCRtpSender.md#replacetrack)
- [setParameters](input._internal_.RTCRtpSender.md#setparameters)
- [setStreams](input._internal_.RTCRtpSender.md#setstreams)

## Properties

### dtmf

• `Readonly` **dtmf**: ``null`` \| [`RTCDTMFSender`](../modules/input._internal_.md#rtcdtmfsender)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11338

___

### track

• `Readonly` **track**: ``null`` \| [`MediaStreamTrack`](../modules/input._internal_.md#mediastreamtrack)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11339

___

### transport

• `Readonly` **transport**: ``null`` \| [`RTCDtlsTransport`](../modules/input._internal_.md#rtcdtlstransport)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11340

## Methods

### getParameters

▸ **getParameters**(): [`RTCRtpSendParameters`](input._internal_.RTCRtpSendParameters.md)

#### Returns

[`RTCRtpSendParameters`](input._internal_.RTCRtpSendParameters.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11341

___

### getStats

▸ **getStats**(): `Promise`<[`RTCStatsReport`](../modules/input._internal_.md#rtcstatsreport)\>

#### Returns

`Promise`<[`RTCStatsReport`](../modules/input._internal_.md#rtcstatsreport)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11342

___

### replaceTrack

▸ **replaceTrack**(`withTrack`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `withTrack` | ``null`` \| [`MediaStreamTrack`](../modules/input._internal_.md#mediastreamtrack) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11343

___

### setParameters

▸ **setParameters**(`parameters`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `parameters` | [`RTCRtpSendParameters`](input._internal_.RTCRtpSendParameters.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11344

___

### setStreams

▸ **setStreams**(...`streams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `...streams` | [`MediaStream`](../modules/input._internal_.md#mediastream)[] |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11345
