import React, { FC, Suspense } from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import { ThemeOptions } from '@material-ui/core';
import { WhatsApp } from '@material-ui/icons';
import {
  RdsMain,
  RdsContent,
  RdsHeader,
  RdsTheme,
  RdsTitle,
  RdsLoading,
  RdsImage,
  RdsIconButton
} from '@rdsystem/components';
import LayoutProps from './Layout.props';
import logo from '../../assets/gota.svg';
import { whatsapp } from 'src/constants/links';

const Layout: FC<LayoutProps> = ({ children }) => {
  const production = process.env.NODE_ENV === 'production';

  const theme: ThemeOptions = {
    palette: {
      type: 'dark',
      primary: {
        light: '#fcf7be',
        main: '#F4E501',
        dark: '#f3b800',
        contrastText: 'rgba(0, 0, 0, 0.87)'
      },
      secondary: {
        light: '#b599ff',
        main: '#4c1fff',
        dark: '#0111f4',
        contrastText: '#fff'
      }
    }
  };

  return (
    <BrowserRouter basename={production ? '/continentetrocadeoleo' : '/'}>
      <RdsTheme theme={theme}>
        <RdsContent hasHeaderFixed hasDrawer>
          <RdsHeader fixed color="inherit">
            <RdsImage src={logo} height={38} />
            <RdsTitle type="span" margin="0 auto 0 16px">
              Continente Troca de Óleo
            </RdsTitle>
            <RdsIconButton tooltip="WhatsApp" onClick={() => window.open(whatsapp, '_blank')} margin="0 -12px 0 0">
              <WhatsApp />
            </RdsIconButton>
          </RdsHeader>
          <RdsMain fixed>
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
