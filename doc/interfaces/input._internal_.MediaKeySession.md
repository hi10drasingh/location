[Droom Google Location Plugin - v1.0.6](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / MediaKeySession

# Interface: MediaKeySession

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).MediaKeySession

This EncryptedMediaExtensions API interface represents a context for message exchange with a content decryption module (CDM).
Available only in secure contexts.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`MediaKeySession`**

## Table of contents

### Properties

- [closed](input._internal_.MediaKeySession.md#closed)
- [expiration](input._internal_.MediaKeySession.md#expiration)
- [keyStatuses](input._internal_.MediaKeySession.md#keystatuses)
- [onkeystatuseschange](input._internal_.MediaKeySession.md#onkeystatuseschange)
- [onmessage](input._internal_.MediaKeySession.md#onmessage)
- [sessionId](input._internal_.MediaKeySession.md#sessionid)

### Methods

- [addEventListener](input._internal_.MediaKeySession.md#addeventlistener)
- [close](input._internal_.MediaKeySession.md#close)
- [dispatchEvent](input._internal_.MediaKeySession.md#dispatchevent)
- [generateRequest](input._internal_.MediaKeySession.md#generaterequest)
- [load](input._internal_.MediaKeySession.md#load)
- [remove](input._internal_.MediaKeySession.md#remove)
- [removeEventListener](input._internal_.MediaKeySession.md#removeeventlistener)
- [update](input._internal_.MediaKeySession.md#update)

## Properties

### closed

• `Readonly` **closed**: `Promise`<[`MediaKeySessionClosedReason`](../modules/input._internal_.md#mediakeysessionclosedreason)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9356

___

### expiration

• `Readonly` **expiration**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9357

___

### keyStatuses

• `Readonly` **keyStatuses**: [`MediaKeyStatusMap`](../modules/input._internal_.md#mediakeystatusmap)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9358

___

### onkeystatuseschange

• **onkeystatuseschange**: ``null`` \| (`this`: [`MediaKeySession`](../modules/input._internal_.md#mediakeysession), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9359

___

### onmessage

• **onmessage**: ``null`` \| (`this`: [`MediaKeySession`](../modules/input._internal_.md#mediakeysession), `ev`: [`MediaKeyMessageEvent`](../modules/input._internal_.md#mediakeymessageevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9360

___

### sessionId

• `Readonly` **sessionId**: `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9361

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaKeySessionEventMap`](input._internal_.MediaKeySessionEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaKeySession`](../modules/input._internal_.md#mediakeysession), `ev`: [`MediaKeySessionEventMap`](input._internal_.MediaKeySessionEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9367

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

node_modules/typescript/lib/lib.dom.d.ts:9368

___

### close

▸ **close**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9362

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

### generateRequest

▸ **generateRequest**(`initDataType`, `initData`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `initDataType` | `string` |
| `initData` | [`BufferSource`](../modules/input._internal_.md#buffersource) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9363

___

### load

▸ **load**(`sessionId`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `sessionId` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9364

___

### remove

▸ **remove**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9365

___

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`MediaKeySessionEventMap`](input._internal_.MediaKeySessionEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`MediaKeySession`](../modules/input._internal_.md#mediakeysession), `ev`: [`MediaKeySessionEventMap`](input._internal_.MediaKeySessionEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9369

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

node_modules/typescript/lib/lib.dom.d.ts:9370

___

### update

▸ **update**(`response`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `response` | [`BufferSource`](../modules/input._internal_.md#buffersource) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9366
