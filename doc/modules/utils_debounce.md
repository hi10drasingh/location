[Droom Google Location Plugin - v1.0.4](../README.md) / [Exports](../modules.md) / utils/debounce

# Module: utils/debounce

## Table of contents

### References

- [default](utils_debounce.md#default)

### Functions

- [Debounce](utils_debounce.md#debounce)

## References

### default

Renames and re-exports [Debounce](utils_debounce.md#debounce)

## Functions

### Debounce

▸ **Debounce**<`F`\>(`fn`, `delay`): `F`

Creates a debounced function that delays invoking `func` until after `wait` milliseconds have elapsed since the last time the debounced function was invoked.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `F` | extends (...`params`: `never`[]) => `void` |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fn` | `F` | Function that  needs to be delayed. |
| `delay` | `number` | Time in milliseconds. |

#### Returns

`F`

- Debounced function with same signature as the param function.

#### Defined in

[src/utils/debounce.ts:10](https://github.com/hitendrarao/location/blob/90b33a2/src/utils/debounce.ts#L10)
