[Droom Google Location Plugin - v1.0.4](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / IDBDatabase

# Interface: IDBDatabase

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).IDBDatabase

This IndexedDB API interface provides a connection to a database; you can use an IDBDatabase object to open a transaction on your database then create, manipulate, and delete objects (data) in that database. The interface provides the only way to get and manage versions of the database.

## Hierarchy

- [`EventTarget`](../modules/input._internal_.md#eventtarget)

  ↳ **`IDBDatabase`**

## Table of contents

### Properties

- [name](input._internal_.IDBDatabase.md#name)
- [objectStoreNames](input._internal_.IDBDatabase.md#objectstorenames)
- [onabort](input._internal_.IDBDatabase.md#onabort)
- [onclose](input._internal_.IDBDatabase.md#onclose)
- [onerror](input._internal_.IDBDatabase.md#onerror)
- [onversionchange](input._internal_.IDBDatabase.md#onversionchange)
- [version](input._internal_.IDBDatabase.md#version)

### Methods

- [addEventListener](input._internal_.IDBDatabase.md#addeventlistener)
- [close](input._internal_.IDBDatabase.md#close)
- [createObjectStore](input._internal_.IDBDatabase.md#createobjectstore)
- [deleteObjectStore](input._internal_.IDBDatabase.md#deleteobjectstore)
- [dispatchEvent](input._internal_.IDBDatabase.md#dispatchevent)
- [removeEventListener](input._internal_.IDBDatabase.md#removeeventlistener)
- [transaction](input._internal_.IDBDatabase.md#transaction)

## Properties

### name

• `Readonly` **name**: `string`

Returns the name of the database.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8496

___

### objectStoreNames

• `Readonly` **objectStoreNames**: [`DOMStringList`](../modules/input._internal_.md#domstringlist)

Returns a list of the names of object stores in the database.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8498

___

### onabort

• **onabort**: ``null`` \| (`this`: [`IDBDatabase`](../modules/input._internal_.md#idbdatabase), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8499

___

### onclose

• **onclose**: ``null`` \| (`this`: [`IDBDatabase`](../modules/input._internal_.md#idbdatabase), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8500

___

### onerror

• **onerror**: ``null`` \| (`this`: [`IDBDatabase`](../modules/input._internal_.md#idbdatabase), `ev`: [`Event`](../modules/input._internal_.md#event)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8501

___

### onversionchange

• **onversionchange**: ``null`` \| (`this`: [`IDBDatabase`](../modules/input._internal_.md#idbdatabase), `ev`: [`IDBVersionChangeEvent`](../modules/input._internal_.md#idbversionchangeevent)) => `any`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8502

___

### version

• `Readonly` **version**: `number`

Returns the version of the database.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8504

## Methods

### addEventListener

▸ **addEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`IDBDatabaseEventMap`](input._internal_.IDBDatabaseEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`IDBDatabase`](../modules/input._internal_.md#idbdatabase), `ev`: [`IDBDatabaseEventMap`](input._internal_.IDBDatabaseEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`AddEventListenerOptions`](input._internal_.AddEventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.addEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8521

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

node_modules/typescript/lib/lib.dom.d.ts:8522

___

### close

▸ **close**(): `void`

Closes the connection once all running transactions have finished.

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8506

___

### createObjectStore

▸ **createObjectStore**(`name`, `options?`): [`IDBObjectStore`](../modules/input._internal_.md#idbobjectstore)

Creates a new object store with the given name and options and returns a new IDBObjectStore.

Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `options?` | [`IDBObjectStoreParameters`](input._internal_.IDBObjectStoreParameters.md) |

#### Returns

[`IDBObjectStore`](../modules/input._internal_.md#idbobjectstore)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8512

___

### deleteObjectStore

▸ **deleteObjectStore**(`name`): `void`

Deletes the object store with the given name.

Throws a "InvalidStateError" DOMException if not called within an upgrade transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8518

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

### removeEventListener

▸ **removeEventListener**<`K`\>(`type`, `listener`, `options?`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends keyof [`IDBDatabaseEventMap`](input._internal_.IDBDatabaseEventMap.md) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `K` |
| `listener` | (`this`: [`IDBDatabase`](../modules/input._internal_.md#idbdatabase), `ev`: [`IDBDatabaseEventMap`](input._internal_.IDBDatabaseEventMap.md)[`K`]) => `any` |
| `options?` | `boolean` \| [`EventListenerOptions`](input._internal_.EventListenerOptions.md) |

#### Returns

`void`

#### Overrides

EventTarget.removeEventListener

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8523

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

node_modules/typescript/lib/lib.dom.d.ts:8524

___

### transaction

▸ **transaction**(`storeNames`, `mode?`): [`IDBTransaction`](../modules/input._internal_.md#idbtransaction)

Returns a new transaction with the given mode ("readonly" or "readwrite") and scope which can be a single object store name or an array of names.

#### Parameters

| Name | Type |
| :------ | :------ |
| `storeNames` | `string` \| `string`[] |
| `mode?` | [`IDBTransactionMode`](../modules/input._internal_.md#idbtransactionmode) |

#### Returns

[`IDBTransaction`](../modules/input._internal_.md#idbtransaction)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8520
