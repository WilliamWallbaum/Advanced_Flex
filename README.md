# Advanced_Flex
Advance Flex is an updated and customized version of the flex theme used on Advanced Affordable Hearings Shopify store
 [sale.advancedhearing.com](https://sale.advancedhearing.com/)

## Templates
### Landing Page
Landing pages have several custom sections. Each with their own set of options built to customize via the theme editor. All sections have the options to show or not. Plus it's built useing Shopify 2.0 template, allowing user to rearrange sections or add new sections. There are also global options in the Settings_Schema.

#### Landing Header
The landing header is the cornerstone of the landing page including scripts and styles to be used on the rest of the page
It features:
- User set Title and Description
- User set background
- Choice of featured product
    - Sets image to right, to featured product image
    - Sets price and sale price
- Choice of alternate featured image

#### Landing Promo
The promo section is made to accept universal messaging including:
- Title
- Intro text
- Promo advertisment

#### Landing Variant
This is the first section that with the ability to buy hearing aids. Product will set left, pair, and right. The pair button displays pair variant, but adds right and left variants in the cart.
- User set product
- User set title & description

#### Landing Gallery
The gallery adds 4 images including 1 featured image. It also allows the room to add another paragraph and title.
- User set title & description
- User set featured image
- User set images

#### Landing Features
The fetures section is desinger to allow rich text an image and optional button.
- User set image
- User set title & rich description
- Optional button

#### Landing Buy Bar
This section offers is a small section designed to allow for a second chance to buy. It works similarly to the variant section.
- User set product
- User set background

#### Landing Support
This setion sandwiches copy between pictures. It's designed to advertise remote support.
- User set pictures
- User set title & rich description

## Settings_Schema
adds `Landing Pages` options
### `Landing Pages`
- Section Width Range
Allows user to set custom widths supporting mobile devices. ranges from 50-100%
 - Desktop
 Defaults to 80% of the screen's width
 - Tablet
 Defaults to 90% of the screen's width
 - Mobile
 Defaults to 100% of the screen's width
- Global Gap Range
Allows user to set custom gap sizes from 1-5rem

## Modules
### addPair.js
This module stores a function that takes on three variables:
- the class of the elements to assign a click handler (`listeningEl`)
- the variant ids for the left and right (`leftVariant`, `rightVariant`).

On click uses a fetch call to wait for both variants to be loaded into the cart before moving to the cart page.