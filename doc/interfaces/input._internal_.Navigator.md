[Droom Google Location Plugin - v1.0.10](../README.md) / [Exports](../modules.md) / [input](../modules/input.md) / [<internal\>](../modules/input._internal_.md) / Navigator

# Interface: Navigator

[input](../modules/input.md).[<internal>](../modules/input._internal_.md).Navigator

The state and the identity of the user agent. It allows scripts to query it and to register themselves to carry on some activities.

## Hierarchy

- [`NavigatorAutomationInformation`](input._internal_.NavigatorAutomationInformation.md)

- [`NavigatorConcurrentHardware`](input._internal_.NavigatorConcurrentHardware.md)

- [`NavigatorContentUtils`](input._internal_.NavigatorContentUtils.md)

- [`NavigatorCookies`](input._internal_.NavigatorCookies.md)

- [`NavigatorID`](input._internal_.NavigatorID.md)

- [`NavigatorLanguage`](input._internal_.NavigatorLanguage.md)

- [`NavigatorLocks`](input._internal_.NavigatorLocks.md)

- [`NavigatorNetworkInformation`](input._internal_.NavigatorNetworkInformation.md)

- [`NavigatorOnLine`](input._internal_.NavigatorOnLine.md)

- [`NavigatorPlugins`](input._internal_.NavigatorPlugins.md)

- [`NavigatorStorage`](input._internal_.NavigatorStorage.md)

  ↳ **`Navigator`**

## Table of contents

### Properties

- [appCodeName](input._internal_.Navigator.md#appcodename)
- [appName](input._internal_.Navigator.md#appname)
- [appVersion](input._internal_.Navigator.md#appversion)
- [clipboard](input._internal_.Navigator.md#clipboard)
- [connection](input._internal_.Navigator.md#connection)
- [cookieEnabled](input._internal_.Navigator.md#cookieenabled)
- [credentials](input._internal_.Navigator.md#credentials)
- [doNotTrack](input._internal_.Navigator.md#donottrack)
- [geolocation](input._internal_.Navigator.md#geolocation)
- [hardwareConcurrency](input._internal_.Navigator.md#hardwareconcurrency)
- [language](input._internal_.Navigator.md#language)
- [languages](input._internal_.Navigator.md#languages)
- [locks](input._internal_.Navigator.md#locks)
- [maxTouchPoints](input._internal_.Navigator.md#maxtouchpoints)
- [mediaCapabilities](input._internal_.Navigator.md#mediacapabilities)
- [mediaDevices](input._internal_.Navigator.md#mediadevices)
- [mediaSession](input._internal_.Navigator.md#mediasession)
- [mimeTypes](input._internal_.Navigator.md#mimetypes)
- [onLine](input._internal_.Navigator.md#online)
- [pdfViewerEnabled](input._internal_.Navigator.md#pdfviewerenabled)
- [permissions](input._internal_.Navigator.md#permissions)
- [platform](input._internal_.Navigator.md#platform)
- [plugins](input._internal_.Navigator.md#plugins)
- [product](input._internal_.Navigator.md#product)
- [productSub](input._internal_.Navigator.md#productsub)
- [serviceWorker](input._internal_.Navigator.md#serviceworker)
- [storage](input._internal_.Navigator.md#storage)
- [userAgent](input._internal_.Navigator.md#useragent)
- [vendor](input._internal_.Navigator.md#vendor)
- [vendorSub](input._internal_.Navigator.md#vendorsub)
- [webdriver](input._internal_.Navigator.md#webdriver)

### Methods

- [canShare](input._internal_.Navigator.md#canshare)
- [getGamepads](input._internal_.Navigator.md#getgamepads)
- [javaEnabled](input._internal_.Navigator.md#javaenabled)
- [registerProtocolHandler](input._internal_.Navigator.md#registerprotocolhandler)
- [requestMIDIAccess](input._internal_.Navigator.md#requestmidiaccess)
- [requestMediaKeySystemAccess](input._internal_.Navigator.md#requestmediakeysystemaccess)
- [sendBeacon](input._internal_.Navigator.md#sendbeacon)
- [share](input._internal_.Navigator.md#share)
- [vibrate](input._internal_.Navigator.md#vibrate)

## Properties

### appCodeName

• `Readonly` **appCodeName**: `string`

**`deprecated`**

#### Inherited from

[NavigatorID](input._internal_.NavigatorID.md).[appCodeName](input._internal_.NavigatorID.md#appcodename)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9980

___

### appName

• `Readonly` **appName**: `string`

**`deprecated`**

#### Inherited from

[NavigatorID](input._internal_.NavigatorID.md).[appName](input._internal_.NavigatorID.md#appname)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9982

___

### appVersion

• `Readonly` **appVersion**: `string`

**`deprecated`**

#### Inherited from

[NavigatorID](input._internal_.NavigatorID.md).[appVersion](input._internal_.NavigatorID.md#appversion)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9984

___

### clipboard

• `Readonly` **clipboard**: [`Clipboard`](../modules/input._internal_.md#clipboard)

Available only in secure contexts.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9930

___

### connection

• `Readonly` **connection**: [`NetworkInformation`](../modules/input._internal_.md#networkinformation)

#### Inherited from

[NavigatorNetworkInformation](input._internal_.NavigatorNetworkInformation.md).[connection](input._internal_.NavigatorNetworkInformation.md#connection)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10008

___

### cookieEnabled

• `Readonly` **cookieEnabled**: `boolean`

#### Inherited from

[NavigatorCookies](input._internal_.NavigatorCookies.md).[cookieEnabled](input._internal_.NavigatorCookies.md#cookieenabled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9975

___

### credentials

• `Readonly` **credentials**: [`CredentialsContainer`](../modules/input._internal_.md#credentialscontainer)

Available only in secure contexts.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9932

___

### doNotTrack

• `Readonly` **doNotTrack**: ``null`` \| `string`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9933

___

### geolocation

• `Readonly` **geolocation**: [`Geolocation`](../modules/input._internal_.md#geolocation)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9934

___

### hardwareConcurrency

• `Readonly` **hardwareConcurrency**: `number`

#### Inherited from

[NavigatorConcurrentHardware](input._internal_.NavigatorConcurrentHardware.md).[hardwareConcurrency](input._internal_.NavigatorConcurrentHardware.md#hardwareconcurrency)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9966

___

### language

• `Readonly` **language**: `string`

#### Inherited from

[NavigatorLanguage](input._internal_.NavigatorLanguage.md).[language](input._internal_.NavigatorLanguage.md#language)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9998

___

### languages

• `Readonly` **languages**: readonly `string`[]

#### Inherited from

[NavigatorLanguage](input._internal_.NavigatorLanguage.md).[languages](input._internal_.NavigatorLanguage.md#languages)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9999

___

### locks

• `Readonly` **locks**: [`LockManager`](../modules/input._internal_.md#lockmanager)

#### Inherited from

[NavigatorLocks](input._internal_.NavigatorLocks.md).[locks](input._internal_.NavigatorLocks.md#locks)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10004

___

### maxTouchPoints

• `Readonly` **maxTouchPoints**: `number`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9935

___

### mediaCapabilities

• `Readonly` **mediaCapabilities**: [`MediaCapabilities`](../modules/input._internal_.md#mediacapabilities)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9936

___

### mediaDevices

• `Readonly` **mediaDevices**: [`MediaDevices`](../modules/input._internal_.md#mediadevices)

Available only in secure contexts.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9938

___

### mediaSession

• `Readonly` **mediaSession**: [`MediaSession`](../modules/input._internal_.md#mediasession)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9939

___

### mimeTypes

• `Readonly` **mimeTypes**: [`MimeTypeArray`](../modules/input._internal_.md#mimetypearray)

**`deprecated`**

#### Inherited from

[NavigatorPlugins](input._internal_.NavigatorPlugins.md).[mimeTypes](input._internal_.NavigatorPlugins.md#mimetypes)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10017

___

### onLine

• `Readonly` **onLine**: `boolean`

#### Inherited from

[NavigatorOnLine](input._internal_.NavigatorOnLine.md).[onLine](input._internal_.NavigatorOnLine.md#online)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10012

___

### pdfViewerEnabled

• `Readonly` **pdfViewerEnabled**: `boolean`

#### Inherited from

[NavigatorPlugins](input._internal_.NavigatorPlugins.md).[pdfViewerEnabled](input._internal_.NavigatorPlugins.md#pdfviewerenabled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10018

___

### permissions

• `Readonly` **permissions**: [`Permissions`](../modules/input._internal_.md#permissions)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9940

___

### platform

• `Readonly` **platform**: `string`

**`deprecated`**

#### Inherited from

[NavigatorID](input._internal_.NavigatorID.md).[platform](input._internal_.NavigatorID.md#platform)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9986

___

### plugins

• `Readonly` **plugins**: [`PluginArray`](../modules/input._internal_.md#pluginarray)

**`deprecated`**

#### Inherited from

[NavigatorPlugins](input._internal_.NavigatorPlugins.md).[plugins](input._internal_.NavigatorPlugins.md#plugins)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10020

___

### product

• `Readonly` **product**: `string`

**`deprecated`**

#### Inherited from

[NavigatorID](input._internal_.NavigatorID.md).[product](input._internal_.NavigatorID.md#product)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9988

___

### productSub

• `Readonly` **productSub**: `string`

**`deprecated`**

#### Inherited from

[NavigatorID](input._internal_.NavigatorID.md).[productSub](input._internal_.NavigatorID.md#productsub)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9990

___

### serviceWorker

• `Readonly` **serviceWorker**: [`ServiceWorkerContainer`](../modules/input._internal_.md#serviceworkercontainer)

Available only in secure contexts.

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9942

___

### storage

• `Readonly` **storage**: [`StorageManager`](../modules/input._internal_.md#storagemanager)

#### Inherited from

[NavigatorStorage](input._internal_.NavigatorStorage.md).[storage](input._internal_.NavigatorStorage.md#storage)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10027

___

### userAgent

• `Readonly` **userAgent**: `string`

#### Inherited from

[NavigatorID](input._internal_.NavigatorID.md).[userAgent](input._internal_.NavigatorID.md#useragent)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9991

___

### vendor

• `Readonly` **vendor**: `string`

#### Inherited from

[NavigatorID](input._internal_.NavigatorID.md).[vendor](input._internal_.NavigatorID.md#vendor)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9992

___

### vendorSub

• `Readonly` **vendorSub**: `string`

**`deprecated`**

#### Inherited from

[NavigatorID](input._internal_.NavigatorID.md).[vendorSub](input._internal_.NavigatorID.md#vendorsub)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9994

___

### webdriver

• `Readonly` **webdriver**: `boolean`

#### Inherited from

[NavigatorAutomationInformation](input._internal_.NavigatorAutomationInformation.md).[webdriver](input._internal_.NavigatorAutomationInformation.md#webdriver)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9962

## Methods

### canShare

▸ **canShare**(`data?`): `boolean`

Available only in secure contexts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ShareData`](input._internal_.ShareData.md) |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9944

___

### getGamepads

▸ **getGamepads**(): (``null`` \| [`Gamepad`](../modules/input._internal_.md#gamepad))[]

#### Returns

(``null`` \| [`Gamepad`](../modules/input._internal_.md#gamepad))[]

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9945

___

### javaEnabled

▸ **javaEnabled**(): `boolean`

**`deprecated`**

#### Returns

`boolean`

#### Inherited from

[NavigatorPlugins](input._internal_.NavigatorPlugins.md).[javaEnabled](input._internal_.NavigatorPlugins.md#javaenabled)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:10022

___

### registerProtocolHandler

▸ **registerProtocolHandler**(`scheme`, `url`): `void`

Available only in secure contexts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `scheme` | `string` |
| `url` | `string` \| `URL` |

#### Returns

`void`

#### Inherited from

[NavigatorContentUtils](input._internal_.NavigatorContentUtils.md).[registerProtocolHandler](input._internal_.NavigatorContentUtils.md#registerprotocolhandler)

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9971

___

### requestMIDIAccess

▸ **requestMIDIAccess**(`options?`): `Promise`<[`MIDIAccess`](../modules/input._internal_.md#midiaccess)\>

Available only in secure contexts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`MIDIOptions`](input._internal_.MIDIOptions.md) |

#### Returns

`Promise`<[`MIDIAccess`](../modules/input._internal_.md#midiaccess)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9947

___

### requestMediaKeySystemAccess

▸ **requestMediaKeySystemAccess**(`keySystem`, `supportedConfigurations`): `Promise`<[`MediaKeySystemAccess`](../modules/input._internal_.md#mediakeysystemaccess)\>

Available only in secure contexts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `keySystem` | `string` |
| `supportedConfigurations` | [`MediaKeySystemConfiguration`](input._internal_.MediaKeySystemConfiguration.md)[] |

#### Returns

`Promise`<[`MediaKeySystemAccess`](../modules/input._internal_.md#mediakeysystemaccess)\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9949

___

### sendBeacon

▸ **sendBeacon**(`url`, `data?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` \| `URL` |
| `data?` | ``null`` \| [`BodyInit`](../modules/input._internal_.md#bodyinit) |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9950

___

### share

▸ **share**(`data?`): `Promise`<`void`\>

Available only in secure contexts.

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`ShareData`](input._internal_.ShareData.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9952

___

### vibrate

▸ **vibrate**(`pattern`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `pattern` | [`VibratePattern`](../modules/input._internal_.md#vibratepattern) |

#### Returns

`boolean`

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:9953
