---
title: 'Magic Unit'
order: 3
---

> **The magic unit is a base unit for any element or property that require a defined dimension**. It is equal to **16px** but is expressed in **rem**.<br> We multiply or divide it to define white spaces, icons sizes, lines heights etc...

## Why do we use the magic unit ?

Using a magic unit have multiples benefits.

- It make the overall compositions feels more **harmonious and organised**.
- It help create a sense of vertical rythm (or baseline)
- It help create **consistantly sized and spaced elements**
- Therefore it improve **modularity, and reusability**. _Just drop common elements next to each others, there is a good chance that they will fit the same vertical space and be perfectly aligned_.

<br>

In the folowing exemple, we see a **grid in the background that is based on the magic unit**. It is subdivised in halfs and quarters to give us more fine control for small elements that require it.
We can see the red squares snaping to the magic unit grid.
By **hovering the squares**, you can see how we used the magic unit and the conrresponding values in Px :

<preview path="src/pages/Foundations/MagicUnit/previews/magic-unit"></pattern>

<br><br>

## How to use it?

The level of granularity that can be used depend of the size of what you are trying to define.

<br>
<hintitem>
  Use <b>quarter</b> of magic unit for sizes <b>less than two times the magic unit</b>
</hintitem>
<hintitem>
  Use <b>alfs</b> of magic unit for sizes <b>between two and four times the magic unit</b>
</hintitem>
<hintitem>
  Use magic unit <b>multiplied by integers</b> numbers for sizes <b>greater than 4 magic units</b>
</hintitem>

<br>

### Exemples of good values:

<hint title="A good usage of the magic unit">
<table>
  <thead>
    <tr>
      <th>Multiplier (less than 2)</th>
      <th>Pixel value</th>
      <th>Reference name</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>magic-unit x 0.25</td>
      <td>4px</td>
      <td>mu025</td>
    </tr>
    <tr>
      <td>magic-unit x 0.50</td>
      <td>8px</td>
      <td>mu050</td>
    </tr>
    <tr>
      <td>magic-unit x 0.75</td>
      <td>12px</td>
      <td>mu075</td>
    </tr>
    <tr>
      <td>magic-unit x 1</td>
      <td>16px</td>
      <td>mu100</td>
    </tr>
    <tr>
      <td>magic-unit x 1.25</td>
      <td>20px</td>
      <td>mu125</td>
    </tr>
    <tr>
      <td>magic-unit x 1.50</td>
      <td>24px</td>
      <td>mu150</td>
    </tr>
    <tr>
      <td>magic-unit x 1.75</td>
      <td>28px</td>
      <td>mu175</td>
    </tr>
    <tr>
      <td>magic-unit x 2</td>
      <td>32px</td>
      <td>mu200</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th>Multiplier (between 2 and 4)</th>
      <th>-</th>
      <th>-</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>magic-unit x 2.5</td>
      <td>40px</td>
      <td>mu250</td>
    </tr>
    <tr>
      <td>magic-unit x 3</td>
      <td>48px</td>
      <td>mu300</td>
    </tr>
    <tr>
      <td>magic-unit x 3.5</td>
      <td>56px</td>
      <td>mu350</td>
    </tr>
    <tr>
      <td>magic-unit x 4</td>
      <td>64px</td>
      <td>mu400</td>
    </tr>
  </tbody>
  <thead>
    <tr>
      <th>Multiplier (more than 4)</th>
      <th>-</th>
      <th>-</th>
    </tr>
  </thead>
  <tbody>
      <tr>
        <td>magic-unit x 5</td>
        <td>80px</td>
        <td>mu500</td>
      </tr>
      <tr>
        <td>magic-unit x 6</td>
        <td>96px</td>
        <td>mu600</td>
      </tr>
      <tr>
        <td>magic-unit x 7</td>
        <td>112px</td>
        <td>mu700</td>
      </tr>
      <tr>
        <td>etc...</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </tbody>
</table>
</hint>

### Magic unit usage by properties :

<br>

<hintitem>
  Use for lines heights
</hintitem>
<hintitem>
  Use for max-height, min-height, max-width, min-width, to determine the standards desired sizes
</hintitem>
<hintitem>
  Use for margin and paddings
</hintitem>
<hintitem>
  Use for width and height of determined sized elements (icons, checkboxes, some images)
</hintitem>
<hintitem dont="true">
  Think twice before using the magic unit for widths and heights
</hintitem>

<br>

#### Keep in mind that most elements should be designed to be able to grow and and strech with responsiveness and accessibility in mind :

- Elements may be used by other teams in various layout configurations.
- Browsers, devices, or even plugins dedicated to disabled users may change the way things are displayed.
- User customized browser zooms and font-sizes may break your ideal composition.
- New devices form factors that we didn't expect may appear in the future.

All thoses reasons may very well make your perfect one line button break into multiple lines in your user's hands.

> Building a **resiliant and elegant system** require a design that fit perfectly for the most common cases but **degrade gracefully** in the most unexpected ones.