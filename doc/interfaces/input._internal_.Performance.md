[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / Performance

# Interface: Performance

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).Performance

Provides access to performance-related information for the current page. It's part of the High Resolution Time API, but is enhanced by the Performance Timeline API, the Navigation Timing API, the User Timing API, and the Resource Timing API.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`Performance`**

## Table of contents

### Properties

- [eventCounts](input._internal_.Performance.md#eventcounts)
- [navigation](input._internal_.Performance.md#navigation)
- [onresourcetimingbufferfull](input._internal_.Performance.md#onresourcetimingbufferfull)
- [timeOrigin](input._internal_.Performance.md#timeorigin)
- [timing](input._internal_.Performance.md#timing)

### Methods

- [addEventListener](input._internal_.Performance.md#addeventlistener)
- [clearMarks](input._internal_.Performance.md#clearmarks)
- [clearMeasures](input._internal_.Performance.md#clearmeasures)
- [clearResourceTimings](input._internal_.Performance.md#clearresourcetimings)
- [dispatchEvent](input._internal_.Performance.md#dispatchevent)
- [getEntries](input._internal_.Performance.md#getentries)
- [getEntriesByName](input._internal_.Performance.md#getentriesbyname)
- [getEntriesByType](input._internal_.Performance.md#getentriesbytype)
- [mark](input._internal_.Performance.md#mark)
- [measure](input._internal_.Performance.md#measure)
- [now](input._internal_.Performance.md#now)
- [removeEventListener](input._internal_.Performance.md#removeeventlistener)
- [setResourceTimingBufferSize](input._internal_.Performance.md#setresourcetimingbuffersize)
- [toJSON](input._internal_.Performance.md#tojson)

## Properties

### eventCounts

• `Readonly` **eventCounts**: [`EventCounts`](../modules/input._internal_.md#eventcounts)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10526

___

### navigation

• `Readonly` **navigation**: [`PerformanceNavigation`](../modules/input._internal_.md#performancenavigation)

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10528

___

### onresourcetimingbufferfull

• **onresourcetimingbufferfull**: ``null`` \| (`this`: [`Performance`](../modules/input._internal_.md#performance), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10529

___

### timeOrigin

• `Readonly` **timeOrigin**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10530

___

### timing

• `Readonly` **timing**: [`PerformanceTiming`](../modules/input._internal_.md#performancetiming)

**`deprecated`**

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10532

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"resourcetimingbufferfull"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Performance`](../modules/input._internal_.md#performance), `ev`: [`PerformanceEventMap`](input._internal_.PerformanceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10544

▸ **addEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/input._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10545

___

### clearMarks

▸ **clearMarks**(`markName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `markName?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10533

___

### clearMeasures

▸ **clearMeasures**(`measureName?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `measureName?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10534

___

### clearResourceTimings

▸ **clearResourceTimings**(): `void`

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10535

___

### dispatchEvent

▸ **dispatchEvent**(`event`): `boolean`

Dispatches a synthetic event event to target and returns true if either event's cancelable attribute value is false or its preventDefault() method was not invoked, and false otherwise.

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | [`Event`](../modules/input._internal_.md#event) |

#### Returns

`boolean`

#### Inherited from

EventTarget.dispatchEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5138

___

### getEntries

▸ **getEntries**(): [`PerformanceEntryList`](../modules/input._internal_.md#performanceentrylist)

#### Returns

[`PerformanceEntryList`](../modules/input._internal_.md#performanceentrylist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10536

___

### getEntriesByName

▸ **getEntriesByName**(`name`, `type?`): [`PerformanceEntryList`](../modules/input._internal_.md#performanceentrylist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `type?` | `string` |

#### Returns

[`PerformanceEntryList`](../modules/input._internal_.md#performanceentrylist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10537

___

### getEntriesByType

▸ **getEntriesByType**(`type`): [`PerformanceEntryList`](../modules/input._internal_.md#performanceentrylist)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |

#### Returns

[`PerformanceEntryList`](../modules/input._internal_.md#performanceentrylist)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10538

___

### mark

▸ **mark**(`markName`, `markOptions?`): [`PerformanceMark`](../modules/input._internal_.md#performancemark)

#### Parameters

| Name | Type |
| :------ | :------ |
| `markName` | `string` |
| `markOptions?` | [`PerformanceMarkOptions`](input._internal_.PerformanceMarkOptions.md) |

#### Returns

[`PerformanceMark`](../modules/input._internal_.md#performancemark)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10539

___

### measure

▸ **measure**(`measureName`, `startOrMeasureOptions?`, `endMark?`): [`PerformanceMeasure`](../modules/input._internal_.md#performancemeasure)

#### Parameters

| Name | Type |
| :------ | :------ |
| `measureName` | `string` |
| `startOrMeasureOptions?` | `string` \| [`PerformanceMeasureOptions`](input._internal_.PerformanceMeasureOptions.md) |
| `endMark?` | `string` |

#### Returns

[`PerformanceMeasure`](../modules/input._internal_.md#performancemeasure)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10540

___

### now

▸ **now**(): `number`

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10541

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"resourcetimingbufferfull"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`Performance`](../modules/input._internal_.md#performance), `ev`: [`PerformanceEventMap`](input._internal_.PerformanceEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10546

▸ **removeEventListener**(`type`, `listener`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `listener` | [`EventListenerOrEventListenerObject`](../modules/input._internal_.md#eventlisteneroreventlistenerobject) |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10547

___

### setResourceTimingBufferSize

▸ **setResourceTimingBufferSize**(`maxSize`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `maxSize` | `number` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10542

___

### toJSON

▸ **toJSON**(): `any`

#### Returns

`any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10543
