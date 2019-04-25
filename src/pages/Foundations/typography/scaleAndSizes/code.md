---
title: 'SCSS'
order: 1
---

# The font-scale mixin :

> The font scale mixin returns a font-size and a line-height for a given font-size token

<hintitem>
   Always use the font-scale mixin to define font-size and line-height
</hintitem>

Params :

- `$size` : **required**, any value between `01` to `12` corresponding to the `size.font.[xx]` tokens
- `$line-height` : **optional** / `xs`, `s` , `m` or `l`, default : `l`

```scss
@import 'settings-tools/_all-settings.scss';

@include font-scale('08');
@include font-scale('05', 'm');
```

> note : the fontscale mixin return a line-height ratio based on the font-size that is calculated

<br>

# Using tokens and variables :

<hintitem>
   If, for some reason you are forced to use another line-height, try to use an authorized magic unit value.
</hintitem>
<hintitem dont="true">
   Never use other font-sizes values than the dedicated tokens
</hintitem>

```scss
@import 'settings-tools/_all-settings.scss';

.some-classes {
  font-size: $size-font-05;
  line-height: $size-line-05-l; // using the corresponding token
  // or
  line-height: $mu200; // any magic unit value that seem fit to your use-case
}
```