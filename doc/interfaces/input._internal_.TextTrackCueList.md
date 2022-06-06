[Droom Google Location Plugin - v1.0.8](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / TextTrackCueList

# Interface: TextTrackCueList

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).TextTrackCueList

## Indexable

▪ [index: `number`]: [`TextTrackCue`](../modules/input._internal_.md#texttrackcue)

## Table of contents

### Properties

- [length](input._internal_.TextTrackCueList.md#length)

### Methods

- [getCueById](input._internal_.TextTrackCueList.md#getcuebyid)

## Properties

### length

• `Readonly` **length**: `number`

Returns the number of cues in the list.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14149

## Methods

### getCueById

▸ **getCueById**(`id`): ``null`` \| [`TextTrackCue`](../modules/input._internal_.md#texttrackcue)

Returns the first text track cue (in text track cue order) with text track cue identifier id.

Returns null if none of the cues have the given identifier or if the argument is the empty string.

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

``null`` \| [`TextTrackCue`](../modules/input._internal_.md#texttrackcue)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:14155
