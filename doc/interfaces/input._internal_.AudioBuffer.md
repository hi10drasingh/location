[Droom Google Location Plugin - v1.0.6](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / AudioBuffer

# Interface: AudioBuffer

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).AudioBuffer

A short audio asset residing in memory, created from an audio file using the AudioContext.decodeAudioData() method, or from raw data using AudioContext.createBuffer(). Once put into an AudioBuffer, the audio can then be played by being passed into an AudioBufferSourceNode.

## Table of contents

### Properties

- [duration](input._internal_.AudioBuffer.md#duration)
- [length](input._internal_.AudioBuffer.md#length)
- [numberOfChannels](input._internal_.AudioBuffer.md#numberofchannels)
- [sampleRate](input._internal_.AudioBuffer.md#samplerate)

### Methods

- [copyFromChannel](input._internal_.AudioBuffer.md#copyfromchannel)
- [copyToChannel](input._internal_.AudioBuffer.md#copytochannel)
- [getChannelData](input._internal_.AudioBuffer.md#getchanneldata)

## Properties

### duration

• `Readonly` **duration**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2157

___

### length

• `Readonly` **length**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2158

___

### numberOfChannels

• `Readonly` **numberOfChannels**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2159

___

### sampleRate

• `Readonly` **sampleRate**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2160

## Methods

### copyFromChannel

▸ **copyFromChannel**(`destination`, `channelNumber`, `bufferOffset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `Float32Array` |
| `channelNumber` | `number` |
| `bufferOffset?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2161

___

### copyToChannel

▸ **copyToChannel**(`source`, `channelNumber`, `bufferOffset?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `source` | `Float32Array` |
| `channelNumber` | `number` |
| `bufferOffset?` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2162

___

### getChannelData

▸ **getChannelData**(`channel`): `Float32Array`

#### Parameters

| Name | Type |
| :------ | :------ |
| `channel` | `number` |

#### Returns

`Float32Array`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:2163
