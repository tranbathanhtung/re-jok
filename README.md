
<img src='http://res.cloudinary.com/lighter/image/upload/v1532614796/logo-preview-4851acb3-1251-4cc4-af87-3646f0407894_hdubzv.jpg' width='128' height='128' />

# Re-jok

Re-jok is a React UI component library
built with [styled-system][system]


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
    <React.Fragment>
      <Button>Hello World</Button>
    </React.Fragment>
  </JokTheme>
)
```
