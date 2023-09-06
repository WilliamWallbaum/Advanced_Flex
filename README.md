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

It uses javascript to search the url for `-promoCode` removes the `-` and applies it as the promo code on the page. So if the landing page is `https://sale.advancedhearing.com/pages/hcra-23fbc`, `23fbc` is extracted and applied to the promo code in the section. If there is no promo code `23fba` is used.

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


### Collection Section
This section is a customizable and dynamic collection display component for an e-commerce website. It allows users to showcase a selected collection with various options for displaying products, including a banner, product cards, and a sidebar.

#### Features and Customization:
Show Collection Section: Allows users to toggle the visibility of the collection section on their website.

#### Collection Settings:
**Collection Name:** Users can provide a custom name for the collection that will be displayed as the header.
**Select Collection:** Users can choose the specific collection to display products from.
**Banner Image: Users** can upload an optional banner image to showcase at the top of the collection section.
**Width:** Users can select from three width options for the collection section: "Half," "Standard," or "Wide."

#### Product Card Settings:
**Card Width in Pixels:** Users can set the width of the product cards in pixels.
**Show Product Description:** Allows users to toggle the display of product descriptions on the product cards.
**Button Text:** Users can specify the label for the button displayed on each product card. The default value is "View Product."
**Button Style:** Users can choose from three button styles: "Default," "Primary," or "Secondary."
**Button Class (optional):** Users can provide an optional custom class for the product card buttons.

#### Sidebar Settings:
**Show Sidebar:** Users can toggle the visibility of the sidebar on their website.

#### Banner Settings:
**Show Banner:** Allows users to toggle the visibility of the banner at the top of the collection section.
**Banner Text:** Users can provide custom descriptive text for the banner.

#### How It's Made:
The section consists of a main container for the collection section, which includes optional elements such as a banner, product cards, and a sidebar, based on user settings. The product cards are dynamically generated based on the selected collection and the specified product count. Each product card includes information such as the product image, title, price, and a customizable button.

The user can also set the width of the product cards, toggle the display of product descriptions, and choose the button style for the product cards. Additionally, the user has the option to display a banner at the top of the section with custom text and an optional banner image.

## Modules/Assets
### addPair.js
This module stores a function that takes on three variables:
- the class of the elements to assign a click handler (`listeningEl`)
- the variant ids for the left and right (`leftVariant`, `rightVariant`).

On click uses a fetch call to wait for both variants to be loaded into the cart before moving to the cart page.