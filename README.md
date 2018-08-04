
<img src='http://res.cloudinary.com/lighter/image/upload/v1532614796/logo-preview-4851acb3-1251-4cc4-af87-3646f0407894_hdubzv.jpg' width='128' height='128' />

# Re-jok

Re-jok is a React UI component library
built with [styled-components][sc]. It's a collection of components that help you design websites fast and beautiful easily. Now, it's very young, few components or somewhere looks like stupid but we always try to improve and add more components in the shortest time.

[sc]: https://github.com/styled-components/styled-components

## Why Re-Jok

- Very lightweight... About 38KB min+gzip
- Easy to customize component
- Easy to customize theme

## Installed

```sh
npm i --save re-jok
```
## Getting Started

```jsx
import React from 'react'
import { globalConfig, JokTheme, Button } from 're-jok'

globalConfig();

const App = props => (
  <JokTheme>
      <Button>Hello World</Button>
  </JokTheme>
)
```

## Documentation

- [Docs](https://re-jok.herokuapp.com/)
