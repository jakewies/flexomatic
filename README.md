# Flexomatic

A component-based flexbox grid system for React, built with styled-components and based on the [Solved by Flexbox](https://philipwalton.github.io/solved-by-flexbox/demos/grids/) implementation.

## Components

### Grid

The parent container that initializes a grid system. Think of it like a row in a bootstrap grid system.

```javascript
<Grid flexCells />
```

`flexCells`

If passed to the `Grid` component, all children `Cells` will have a `display` property of `flex`.

### Cell

```javascript
<Cell flexed width />
```

`flexed`

Assigns an individual `Cell`'s `display` property to `flex`. This is useful if you want to make a specific `Cell` a flex parent without doing so to its siblings.

`width`

Explicitly sets the `width` of a given `Cell`. Can take multiple values:

// TODO:

```javascript
  // as ratio
  <Cell width={1/2} />

  // as number
  <Cell width={1} />

  // as keyword
  <Cell width={full} />
```
