[Droom Google Location Plugin - v1.0.4](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / RTCRtpReceiver

# Interface: RTCRtpReceiver

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).RTCRtpReceiver

This WebRTC API interface manages the reception and decoding of data for a MediaStreamTrack on an RTCPeerConnection.

## Table of contents

### Properties

- [track](input._internal_.RTCRtpReceiver.md#track)
- [transport](input._internal_.RTCRtpReceiver.md#transport)

### Methods

- [getContributingSources](input._internal_.RTCRtpReceiver.md#getcontributingsources)
- [getParameters](input._internal_.RTCRtpReceiver.md#getparameters)
- [getStats](input._internal_.RTCRtpReceiver.md#getstats)
- [getSynchronizationSources](input._internal_.RTCRtpReceiver.md#getsynchronizationsources)

## Properties

### track

• `Readonly` **track**: [`MediaStreamTrack`](../modules/input._internal_.md#mediastreamtrack)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11322

___

### transport

• `Readonly` **transport**: ``null`` \| [`RTCDtlsTransport`](../modules/input._internal_.md#rtcdtlstransport)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11323

## Methods

### getContributingSources

▸ **getContributingSources**(): [`RTCRtpContributingSource`](input._internal_.RTCRtpContributingSource.md)[]

#### Returns

[`RTCRtpContributingSource`](input._internal_.RTCRtpContributingSource.md)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11324

___

### getParameters

▸ **getParameters**(): [`RTCRtpReceiveParameters`](input._internal_.RTCRtpReceiveParameters.md)

#### Returns

[`RTCRtpReceiveParameters`](input._internal_.RTCRtpReceiveParameters.md)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11325

___

### getStats

▸ **getStats**(): `Promise`<[`RTCStatsReport`](../modules/input._internal_.md#rtcstatsreport)\>

#### Returns

`Promise`<[`RTCStatsReport`](../modules/input._internal_.md#rtcstatsreport)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11326

___

### getSynchronizationSources

▸ **getSynchronizationSources**(): [`RTCRtpSynchronizationSource`](input._internal_.RTCRtpSynchronizationSource.md)[]

#### Returns

[`RTCRtpSynchronizationSource`](input._internal_.RTCRtpSynchronizationSource.md)[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:11327
