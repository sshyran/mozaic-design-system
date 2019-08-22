---
title: 'Code'
order: 2
---

## Import

Import the settings and the select `scss` files.

```css
@import 'settings-tools/_all-settings';
@import 'components/_c.select';
```

## Basic usage

Apply the classes `mc-select` on the native element of the select as in the following example :

```html
<select class="mc-select">
  <option value="">-- Choose an option --</option>
  <option value="option1">Option 1</option>
  <option value="option2">Option 2</option>
  <option value="option3">Option 3</option>
</select>
```

<preview path="src/pages/Components/Select/previews/Select-default"></preview>


## Behaviors

### Standard select states :

- `hover`
- `focus`
- `disabled`
- `is-valid`
- `is-invalid`


<preview path="src/pages/Components/Select/previews/Select-all-states"></preview>

## Default option (as a placeholder)
 By default, the first option is displayed. You can use it as a placeholder, but remember to distinguish it from the rest of options and to add an empty value attribute. Always use '--' before and after the first option with spaces between the dashes and the text.
 
 ```html
<select class="mc-select">
  <option value="">-- Select one option --</option>
  <option value="option2">Option 1</option>
  <option value="option3">Option 2</option>
  <option value="option3">Option 3</option>
</select>
```

## accessibility and semantic

Use `<option>` for elements of your list `<select>`.<br >
Each `<option>` element should have a value attribute with data.
 

<hintitem>
  You must always use the native select element.
</hintitem>

<hintitem dont="true">
Never use the "multiple" attribute on a select, prefer checkboxes instead.
</hintitem>
<hintitem dont="true">
Don't use the "hidden" attribute on an option because it is not suproted by Safari.
</hintitem>
<hintitem dont="true">
 Never add a "selected" attribute on an option.
 </hintitem>