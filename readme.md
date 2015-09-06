# Flask

[![Build Status](https://api.travis-ci.org/jaradlight/flask.png?branch=master)](https://travis-ci.org/jaradlight/flask)

Helper files for fonts and colours in Sass projects.

## Installation

Install from your preferred package manager:

- **NPM**: `npm install flask`
- **Bower**: `bower install flask`

Import to your stylesheets:

``` sass
// Installed with NPM
@import '../node_modules/flask/sass/flask';

// Installed with Bower
@import '../bower_components/flask/sass/flask';
```

### Importing specific features

If you would like to use one or more features without importing everything, simply import the Flask core followed by the features you need.

``` sass
// Import Flask Core.
@import '../node_modules/flask/sass/flask/core/core';

// Import Flask Palette feature.
@import '../node_modules/flask/sass/flask/palette/palette';
```

## Palette

### Usage

``` sass
.teal-base  {
  color: palette(teal);          // #2ed399
}

.teal-light {
  color: palette(teal, light);   // #58dcae
}

.teal-alias {
  color: palette(brand-primary); // #2ed399
}
```

### Setup

[Example](https://github.com/jaradlight/flask/blob/master/test/setup/_palette.scss)

Begin by defining base colours. You can simply define these inside the palette map instead, but separate base variables make it easier to programmatically define variants.

``` sass
$flask-color-teal-base: #2ed399;
```

#### $palettes

Next create the palette map. This variable will contain all colours and their variants. A colour group is defined by a nested map within the main palette map. The colour group key and any variant keys can be anything you like. However, every colour group needs one colour with the `base` key. Variants are optional.

``` sass
$palettes: (
  teal: (                                      // Colour group key
    base: $flask-color-teal-base,              // Base colour
    dark: darken($flask-color-teal-base, 10),  // Dark Variant
    light: lighten($flask-color-teal-base, 10) // Light Variant
  )
);
```

#### $palette-aliases

Optionally, a `$palette-aliases` map can assign aliases to colour groups. Aliases can be used in place of colour group keys as the first argument to `palette()`.

``` sass
$palette-aliases: (
  brand-primary: teal
);
```


## Fonts

### Usage

``` sass
.font-stack {
   font-family: font-stack(open-sans);
// font-family: "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif
}

.font-name {
   font-family: font-name(open-sans);
// font-family: "Open Sans";
}

font-type(open-sans);     // sans-serif

font-fallback(open-sans); // "Helvetica Neue", Helvetica, Arial, sans-serif
```

### Setup

[Example](https://github.com/jaradlight/flask/blob/master/test/setup/_font.scss)

#### $fonts

The fonts map contains all font names, variants, and fallbacks (if applicable).
Each font should have its own group. For example, if you are using 'Merriweather', you may define a font group under the key `merriweather`.

For each font group, required keys are:

* `font-type` The font family's type. ie: serif, sans-serif, glyph, etc
* `regular` The name of the basic version of the font.

Optional keys:
* `fallback` A map of fallback fonts for this font family. If set, will override the fallback used from `$font-fallbacks` which is based on `font-type`.



``` sass
$fonts: (
  merriweather: (
    font-type:    serif,
    regular:      'Merriweather',
    fallback: (
      'Georgia',
      serif
    )
  )
);
```

#### $font-fallbacks

`$font-fallbacks` map variable:

``` sass
$font-fallbacks: (
  serif: (
    'Georgia',
    serif
  ),
  sans-serif: (
    'Helvetica Neue',
    Helvetica,
    Arial,
    sans-serif
  )
);
```

#### $font-aliases

Optionally, a `$font-aliases` map can assign aliases to fonts. Aliases can be used in place of font group keys in `font` functions.

``` sass
$font-aliases: (
  primary-serif: merriweather,
  primary-sans-serif: open-sans
);
```

#### Additional Functions

``` sass
font-name(open-sans);        // "Open Sans"

font-type(merriweather);     // serif

font-fallback(merriweather); // "Georgia", serif
```
