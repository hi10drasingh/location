[Droom Google Location Plugin - v1.0.15](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / IDBObjectStore

# Interface: IDBObjectStore

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).IDBObjectStore

This example shows a variety of different uses of object stores, from updating the data structure with IDBObjectStore.createIndex inside an onupgradeneeded function, to adding a new item to our object store with IDBObjectStore.add. For a full working example, see our To-do Notifications app (view example live.)

## Table of contents

### Properties

- [autoIncrement](input._internal_.IDBObjectStore.md#autoincrement)
- [indexNames](input._internal_.IDBObjectStore.md#indexnames)
- [keyPath](input._internal_.IDBObjectStore.md#keypath)
- [name](input._internal_.IDBObjectStore.md#name)
- [transaction](input._internal_.IDBObjectStore.md#transaction)

### Methods

- [add](input._internal_.IDBObjectStore.md#add)
- [clear](input._internal_.IDBObjectStore.md#clear)
- [count](input._internal_.IDBObjectStore.md#count)
- [createIndex](input._internal_.IDBObjectStore.md#createindex)
- [delete](input._internal_.IDBObjectStore.md#delete)
- [deleteIndex](input._internal_.IDBObjectStore.md#deleteindex)
- [get](input._internal_.IDBObjectStore.md#get)
- [getAll](input._internal_.IDBObjectStore.md#getall)
- [getAllKeys](input._internal_.IDBObjectStore.md#getallkeys)
- [getKey](input._internal_.IDBObjectStore.md#getkey)
- [index](input._internal_.IDBObjectStore.md#index)
- [openCursor](input._internal_.IDBObjectStore.md#opencursor)
- [openKeyCursor](input._internal_.IDBObjectStore.md#openkeycursor)
- [put](input._internal_.IDBObjectStore.md#put)

## Properties

### autoIncrement

• `Readonly` **autoIncrement**: `boolean`

Returns true if the store has a key generator, and false otherwise.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8640

___

### indexNames

• `Readonly` **indexNames**: [`DOMStringList`](../modules/input._internal_.md#domstringlist)

Returns a list of the names of indexes in the store.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8642

___

### keyPath

• `Readonly` **keyPath**: `string` \| `string`[]

Returns the key path of the store, or null if none.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8644

___

### name

• **name**: `string`

Returns the name of the store.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8646

___

### transaction

• `Readonly` **transaction**: [`IDBTransaction`](../modules/input._internal_.md#idbtransaction)

Returns the associated transaction.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8648

## Methods

### add

▸ **add**(`value`, `key?`): [`IDBRequest`](../modules/input._internal_.md#idbrequest)<[`IDBValidKey`](../modules/input._internal_.md#idbvalidkey)\>

Adds or updates a record in store with the given value and key.

If the store uses in-line keys and key is specified a "DataError" DOMException will be thrown.

If put() is used, any existing record with the key will be replaced. If add() is used, and if a record with the key already exists the request will fail, with request's error set to a "ConstraintError" DOMException.

If successful, request's result will be the record's key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `key?` | [`IDBValidKey`](../modules/input._internal_.md#idbvalidkey) |

#### Returns

[`IDBRequest`](../modules/input._internal_.md#idbrequest)<[`IDBValidKey`](../modules/input._internal_.md#idbvalidkey)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8658

___

### clear

▸ **clear**(): [`IDBRequest`](../modules/input._internal_.md#idbrequest)<`undefined`\>

Deletes all records in store.

If successful, request's result will be undefined.

#### Returns

[`IDBRequest`](../modules/input._internal_.md#idbrequest)<`undefined`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8664

___

### count

▸ **count**(`query?`): [`IDBRequest`](../modules/input._internal_.md#idbrequest)<`number`\>

Retrieves the number of records matching the given key or key range in query.

If successful, request's result will be the count.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | [`IDBValidKey`](../modules/input._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/input._internal_.md#idbkeyrange) |

#### Returns

[`IDBRequest`](../modules/input._internal_.md#idbrequest)<`number`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8670

___

### createIndex

▸ **createIndex**(`name`, `keyPath`, `options?`): [`IDBIndex`](../modules/input._internal_.md#idbindex)

Creates a new index in store with the given name, keyPath and options and returns a new IDBIndex. If the keyPath and options define constraints that cannot be satisfied with the data already in store the upgrade transaction will abort with a "ConstraintError" DOMException.

Throws an "InvalidStateError" DOMException if not called within an upgrade transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `keyPath` | `string` \| `string`[] |
| `options?` | [`IDBIndexParameters`](input._internal_.IDBIndexParameters.md) |

#### Returns

[`IDBIndex`](../modules/input._internal_.md#idbindex)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8676

___

### delete

▸ **delete**(`query`): [`IDBRequest`](../modules/input._internal_.md#idbrequest)<`undefined`\>

Deletes records in store with the given key or in the given key range in query.

If successful, request's result will be undefined.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`IDBValidKey`](../modules/input._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/input._internal_.md#idbkeyrange) |

#### Returns

[`IDBRequest`](../modules/input._internal_.md#idbrequest)<`undefined`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8682

___

### deleteIndex

▸ **deleteIndex**(`name`): `void`

Deletes the index in store with the given name.

Throws an "InvalidStateError" DOMException if not called within an upgrade transaction.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

`void`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8688

___

### get

▸ **get**(`query`): [`IDBRequest`](../modules/input._internal_.md#idbrequest)<`any`\>

Retrieves the value of the first record matching the given key or key range in query.

If successful, request's result will be the value, or undefined if there was no matching record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`IDBValidKey`](../modules/input._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/input._internal_.md#idbkeyrange) |

#### Returns

[`IDBRequest`](../modules/input._internal_.md#idbrequest)<`any`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8694

___

### getAll

▸ **getAll**(`query?`, `count?`): [`IDBRequest`](../modules/input._internal_.md#idbrequest)<`any`[]\>

Retrieves the values of the records matching the given key or key range in query (up to count if given).

If successful, request's result will be an Array of the values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | ``null`` \| [`IDBValidKey`](../modules/input._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/input._internal_.md#idbkeyrange) |
| `count?` | `number` |

#### Returns

[`IDBRequest`](../modules/input._internal_.md#idbrequest)<`any`[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8700

___

### getAllKeys

▸ **getAllKeys**(`query?`, `count?`): [`IDBRequest`](../modules/input._internal_.md#idbrequest)<[`IDBValidKey`](../modules/input._internal_.md#idbvalidkey)[]\>

Retrieves the keys of records matching the given key or key range in query (up to count if given).

If successful, request's result will be an Array of the keys.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | ``null`` \| [`IDBValidKey`](../modules/input._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/input._internal_.md#idbkeyrange) |
| `count?` | `number` |

#### Returns

[`IDBRequest`](../modules/input._internal_.md#idbrequest)<[`IDBValidKey`](../modules/input._internal_.md#idbvalidkey)[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8706

___

### getKey

▸ **getKey**(`query`): [`IDBRequest`](../modules/input._internal_.md#idbrequest)<`undefined` \| [`IDBValidKey`](../modules/input._internal_.md#idbvalidkey)\>

Retrieves the key of the first record matching the given key or key range in query.

If successful, request's result will be the key, or undefined if there was no matching record.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query` | [`IDBValidKey`](../modules/input._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/input._internal_.md#idbkeyrange) |

#### Returns

[`IDBRequest`](../modules/input._internal_.md#idbrequest)<`undefined` \| [`IDBValidKey`](../modules/input._internal_.md#idbvalidkey)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8712

___

### index

▸ **index**(`name`): [`IDBIndex`](../modules/input._internal_.md#idbindex)

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`IDBIndex`](../modules/input._internal_.md#idbindex)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8713

___

### openCursor

▸ **openCursor**(`query?`, `direction?`): [`IDBRequest`](../modules/input._internal_.md#idbrequest)<``null`` \| [`IDBCursorWithValue`](../modules/input._internal_.md#idbcursorwithvalue)\>

Opens a cursor over the records matching query, ordered by direction. If query is null, all records in store are matched.

If successful, request's result will be an IDBCursorWithValue pointing at the first matching record, or null if there were no matching records.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | ``null`` \| [`IDBValidKey`](../modules/input._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/input._internal_.md#idbkeyrange) |
| `direction?` | [`IDBCursorDirection`](../modules/input._internal_.md#idbcursordirection) |

#### Returns

[`IDBRequest`](../modules/input._internal_.md#idbrequest)<``null`` \| [`IDBCursorWithValue`](../modules/input._internal_.md#idbcursorwithvalue)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8719

___

### openKeyCursor

▸ **openKeyCursor**(`query?`, `direction?`): [`IDBRequest`](../modules/input._internal_.md#idbrequest)<``null`` \| [`IDBCursor`](../modules/input._internal_.md#idbcursor)\>

Opens a cursor with key only flag set over the records matching query, ordered by direction. If query is null, all records in store are matched.

If successful, request's result will be an IDBCursor pointing at the first matching record, or null if there were no matching records.

#### Parameters

| Name | Type |
| :------ | :------ |
| `query?` | ``null`` \| [`IDBValidKey`](../modules/input._internal_.md#idbvalidkey) \| [`IDBKeyRange`](../modules/input._internal_.md#idbkeyrange) |
| `direction?` | [`IDBCursorDirection`](../modules/input._internal_.md#idbcursordirection) |

#### Returns

[`IDBRequest`](../modules/input._internal_.md#idbrequest)<``null`` \| [`IDBCursor`](../modules/input._internal_.md#idbcursor)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8725

___

### put

▸ **put**(`value`, `key?`): [`IDBRequest`](../modules/input._internal_.md#idbrequest)<[`IDBValidKey`](../modules/input._internal_.md#idbvalidkey)\>

Adds or updates a record in store with the given value and key.

If the store uses in-line keys and key is specified a "DataError" DOMException will be thrown.

If put() is used, any existing record with the key will be replaced. If add() is used, and if a record with the key already exists the request will fail, with request's error set to a "ConstraintError" DOMException.

If successful, request's result will be the record's key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `any` |
| `key?` | [`IDBValidKey`](../modules/input._internal_.md#idbvalidkey) |

#### Returns

[`IDBRequest`](../modules/input._internal_.md#idbrequest)<[`IDBValidKey`](../modules/input._internal_.md#idbvalidkey)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8735
