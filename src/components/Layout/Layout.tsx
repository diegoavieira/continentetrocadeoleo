import React, { FC, Suspense, useEffect, useState } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeOptions, useTheme, useMediaQuery } from '@material-ui/core';
import { BrightnessHigh as BrightnessHighIcon, BrightnessLow as BrightnessLowIcon } from '@material-ui/icons';
import {
  RdsMain,
  RdsContent,
  RdsDrawer,
  RdsHeader,
  RdsNav,
  RdsTheme,
  RdsTitle,
  RdsLoading,
  RdsIconButton
} from '@rdsystem/components';
import LayoutProps from './Layout.props';

const Layout: FC<LayoutProps> = ({ children, drawerNavItems }) => {
  const production = process.env.NODE_ENV === 'production';
  const isMobile = useMediaQuery(useTheme().breakpoints.down('sm'));
  const [toggle, setToggle] = useState(true);
  const [type, setType] = useState<'light' | 'dark'>('light');

  const onToggle = () => setToggle(!toggle);
  const onType = () => setType(type === 'light' ? 'dark' : 'light');

  const theme: ThemeOptions = {
    palette: {
      type,
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

  useEffect(() => {
    if (isMobile) {
      setToggle(false);
    }
  }, [isMobile]);

  return (
    <BrowserRouter basename={production ? '/rdsystem' : '/'}>
      <RdsTheme theme={theme}>
        <RdsContent hasHeaderFixed hasDrawer>
          <RdsHeader
            fixed
            onToggle={onToggle}
            toggleTooltip="Toggle open/close drawer"
            color={type === 'light' ? 'primary' : 'inherit'}
          >
            <RdsTitle type="span" margin="0 auto 0 0">
              React Design System
            </RdsTitle>
            <RdsIconButton margin="0 -8px 0 0" color="inherit" onClick={onType} tooltip="Toggle ligh/dark theme">
              {type === 'light' ? <BrightnessHighIcon /> : <BrightnessLowIcon />}
            </RdsIconButton>
          </RdsHeader>
          <RdsDrawer hasHeaderFixed isMobile={isMobile} toggle={toggle} onToggle={onToggle}>
            <RdsNav
              nested={production ? 1 : 0}
              items={drawerNavItems}
              toggle={toggle}
              onToggle={isMobile ? onToggle : undefined}
            />
          </RdsDrawer>
          <RdsMain>
            <Suspense fallback={<RdsLoading />}>
              <Switch>{children}</Switch>
            </Suspense>
          </RdsMain>
        </RdsContent>
      </RdsTheme>
    </BrowserRouter>
  );
};

export default Layout;
