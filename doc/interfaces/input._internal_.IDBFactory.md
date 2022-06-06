[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / IDBFactory

# Interface: IDBFactory

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).IDBFactory

In the following code snippet, we make a request to open a database, and include handlers for the success and error cases. For a full working example, see our To-do Notifications app (view example live.)

## Table of contents

### Methods

- [cmp](input._internal_.IDBFactory.md#cmp)
- [databases](input._internal_.IDBFactory.md#databases)
- [deleteDatabase](input._internal_.IDBFactory.md#deletedatabase)
- [open](input._internal_.IDBFactory.md#open)

## Methods

### cmp

▸ **cmp**(`first`, `second`): `number`

Compares two values as keys. Returns -1 if key1 precedes key2, 1 if key2 precedes key1, and 0 if the keys are equal.

Throws a "DataError" DOMException if either input is not a valid key.

#### Parameters

| Name | Type |
| :------ | :------ |
| `first` | `any` |
| `second` | `any` |

#### Returns

`number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8539

___

### databases

▸ **databases**(): `Promise`<[`IDBDatabaseInfo`](input._internal_.IDBDatabaseInfo.md)[]\>

#### Returns

`Promise`<[`IDBDatabaseInfo`](input._internal_.IDBDatabaseInfo.md)[]\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8540

___

### deleteDatabase

▸ **deleteDatabase**(`name`): [`IDBOpenDBRequest`](../modules/input._internal_.md#idbopendbrequest)

Attempts to delete the named database. If the database already exists and there are open connections that don't close in response to a versionchange event, the request will be blocked until all they close. If the request is successful request's result will be null.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |

#### Returns

[`IDBOpenDBRequest`](../modules/input._internal_.md#idbopendbrequest)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8542

___

### open

▸ **open**(`name`, `version?`): [`IDBOpenDBRequest`](../modules/input._internal_.md#idbopendbrequest)

Attempts to open a connection to the named database with the current version, or 1 if it does not already exist. If the request is successful request's result will be the connection.

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `version?` | `number` |

#### Returns

[`IDBOpenDBRequest`](../modules/input._internal_.md#idbopendbrequest)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:8544
