[Droom Google Location Plugin - v1.0.9](../README.md) / [Exports](../modules.md) / [interface/plugin](../modules/interface_plugin.md) / Plugin

# Interface: Plugin

[interface/plugin](../modules/interface_plugin.md).Plugin

Plugin Function Structure.

## Table of contents

### Methods

- [bind](interface_plugin.Plugin.md#bind)
- [unbind](interface_plugin.Plugin.md#unbind)

## Methods

### bind

▸ **bind**(`selector`, `config?`): `void`

Bind an element with given config to plugin.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |
| `config?` | [`Config`](interface_plugin.Config.md) |

#### Returns

`void`

#### Defined in

[src/interface/plugin.ts:18](https://github.com/hitendrarao/location/blob/c9a9cea/src/interface/plugin.ts#L18)

___

### unbind

▸ **unbind**(`selector`): `void`

Bind an element from plugin.

#### Parameters

| Name | Type |
| :------ | :------ |
| `selector` | `string` |

#### Returns

`void`

#### Defined in

[src/interface/plugin.ts:22](https://github.com/hitendrarao/location/blob/c9a9cea/src/interface/plugin.ts#L22)
