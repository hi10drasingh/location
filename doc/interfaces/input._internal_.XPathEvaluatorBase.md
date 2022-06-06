[Droom Google Location Plugin - v1.0.11](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / XPathEvaluatorBase

# Interface: XPathEvaluatorBase

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).XPathEvaluatorBase

## Hierarchy

- **`XPathEvaluatorBase`**

  ↳ [`Document`](input._internal_.Document.md)

## Table of contents

### Methods

- [createExpression](input._internal_.XPathEvaluatorBase.md#createexpression)
- [createNSResolver](input._internal_.XPathEvaluatorBase.md#creatensresolver)
- [evaluate](input._internal_.XPathEvaluatorBase.md#evaluate)

## Methods

### createExpression

▸ **createExpression**(`expression`, `resolver?`): [`XPathExpression`](../modules/input._internal_.md#xpathexpression)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `resolver?` | ``null`` \| [`XPathNSResolver`](../modules/input._internal_.md#xpathnsresolver) |

#### Returns

[`XPathExpression`](../modules/input._internal_.md#xpathexpression)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17084

___

### createNSResolver

▸ **createNSResolver**(`nodeResolver`): [`XPathNSResolver`](../modules/input._internal_.md#xpathnsresolver)

#### Parameters

| Name | Type |
| :------ | :------ |
| `nodeResolver` | [`Node`](../modules/input._internal_.md#node) |

#### Returns

[`XPathNSResolver`](../modules/input._internal_.md#xpathnsresolver)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17085

___

### evaluate

▸ **evaluate**(`expression`, `contextNode`, `resolver?`, `type?`, `result?`): [`XPathResult`](../modules/input._internal_.md#xpathresult)

#### Parameters

| Name | Type |
| :------ | :------ |
| `expression` | `string` |
| `contextNode` | [`Node`](../modules/input._internal_.md#node) |
| `resolver?` | ``null`` \| [`XPathNSResolver`](../modules/input._internal_.md#xpathnsresolver) |
| `type?` | `number` |
| `result?` | ``null`` \| [`XPathResult`](../modules/input._internal_.md#xpathresult) |

#### Returns

[`XPathResult`](../modules/input._internal_.md#xpathresult)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:17086
