# Getting Started

**React Design System** contains components, hooks and other utilities. To be used, your project must contain the dependencies:

```json
"dependencies": {
  "@material-ui/core": "^4.12.2",
  "@material-ui/icons": "^4.11.2",
  "react": "^17.0.1",
  "react-dom": "^17.0.1"
}
```

## Font and Icons

Apply the CDNs to the head of **public/index.html**.

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
<link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
```

## Locale and Date

Configure location language with **moment** library.

```sh
npm i moment@2.29.1
```

Apply the snipped in the Layout component.

```tsx
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');
```
