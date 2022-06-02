[my-webpack-project](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / PromiseLike

# Interface: PromiseLike<T\>

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).PromiseLike

## Type parameters

| Name |
| :------ |
| `T` |

## Table of contents

### Methods

- [then](input._internal_.PromiseLike.md#then)

## Methods

### then

▸ **then**<`TResult1`, `TResult2`\>(`onfulfilled?`, `onrejected?`): [`PromiseLike`](input._internal_.PromiseLike.md)<`TResult1` \| `TResult2`\>

Attaches callbacks for the resolution and/or rejection of the Promise.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TResult1` | `T` |
| `TResult2` | `never` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `onfulfilled?` | ``null`` \| (`value`: `T`) => `TResult1` \| [`PromiseLike`](input._internal_.PromiseLike.md)<`TResult1`\> | The callback to execute when the Promise is resolved. |
| `onrejected?` | ``null`` \| (`reason`: `any`) => `TResult2` \| [`PromiseLike`](input._internal_.PromiseLike.md)<`TResult2`\> | The callback to execute when the Promise is rejected. |

#### Returns

[`PromiseLike`](input._internal_.PromiseLike.md)<`TResult1` \| `TResult2`\>

A Promise for the completion of which ever callback is executed.

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:1495
