[Droom Google Location Plugin - v1.0.15](../README.md) / [Exports](../modules.md) / [map/map](../modules/map_map.md) / [<internal\>](../modules/map_map._internal_.md) / PlaceReview

# Interface: PlaceReview

[map/map](../modules/map_map.md).[<internal>](../modules/map_map._internal_.md).PlaceReview

Represents a single review of a place.

## Table of contents

### Properties

- [aspects](map_map._internal_.PlaceReview.md#aspects)
- [author\_name](map_map._internal_.PlaceReview.md#author_name)
- [author\_url](map_map._internal_.PlaceReview.md#author_url)
- [language](map_map._internal_.PlaceReview.md#language)
- [profile\_photo\_url](map_map._internal_.PlaceReview.md#profile_photo_url)
- [rating](map_map._internal_.PlaceReview.md#rating)
- [relative\_time\_description](map_map._internal_.PlaceReview.md#relative_time_description)
- [text](map_map._internal_.PlaceReview.md#text)
- [time](map_map._internal_.PlaceReview.md#time)

## Properties

### aspects

• `Optional` **aspects**: [`PlaceAspectRating`](map_map._internal_.PlaceAspectRating.md)[]

The aspects rated by the review. The ratings on a scale of 0 to 3.

**`deprecated`** This field is no longer available.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9892

___

### author\_name

• **author\_name**: `string`

The name of the reviewer.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9896

___

### author\_url

• `Optional` **author\_url**: `string`

A URL to the reviewer&#39;s profile. This will be <code>undefined</code>
when the reviewer&#39;s profile is unavailable.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9901

___

### language

• **language**: `string`

An IETF language code indicating the language in which this review is
written. Note that this code includes only the main language tag without
any secondary tag indicating country or region. For example, all the
English reviews are tagged as <code>'en'</code> rather than
&#39;en-AU&#39; or
&#39;en-UK&#39;.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9910

___

### profile\_photo\_url

• **profile\_photo\_url**: `string`

A URL to the reviwer&#39;s profile image.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9914

___

### rating

• `Optional` **rating**: `number`

The rating of this review, a number between 1.0 and 5.0 (inclusive).

#### Defined in

node_modules/@types/google.maps/index.d.ts:9918

___

### relative\_time\_description

• **relative\_time\_description**: `string`

A string of formatted recent time, expressing the review time relative to
the current time in a form appropriate for the language and country. For
example <code>&quot;a month ago&quot;</code>.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9924

___

### text

• **text**: `string`

The text of a review.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9928

___

### time

• **time**: `number`

Timestamp for the review, expressed in seconds since epoch.

#### Defined in

node_modules/@types/google.maps/index.d.ts:9932
