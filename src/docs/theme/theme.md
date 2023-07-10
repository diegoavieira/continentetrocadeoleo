# Theme

**RdsTheme** is the component responsible for changing the theme. The **theme** attribute receives all the properties of the [Default Theme - Material-UI ](https://v4.mui.com/customization/default-theme/#default-theme).

## Color

This documentation uses the schema:

```tsx
const theme: ThemeOptions = {
  palette: {
    type: 'light',
    primary: {
      light: '#80e27e',
      main: '#4caf50',
      dark: '#087f23',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ffff8b',
      main: '#ffee58',
      dark: '#c9bc1f',
      contrastText: 'rgba(0, 0, 0, 0.87)'
    }
  }
};

<RdsTheme theme={theme}>children</RdsTheme>;
```
