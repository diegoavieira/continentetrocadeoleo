import React, { Suspense } from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { ThemeOptions } from '@material-ui/core';
import {
  RdsMain,
  RdsContent,
  RdsHeader,
  RdsTheme,
  RdsContainer,
  RdsTitle,
  RdsAvatar,
  RdsText,
  RdsLoading
} from '@rdsystem/components';
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

const Layout2 = () => {
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

  // MemoryRouter is used to work in an iframe.
  // You won't need it on your project. Use BrowserRouter.

  return (
    <MemoryRouter>
      <RdsTheme theme={theme}>
        <RdsContent>
          <RdsHeader>
            <RdsTitle type="span" margin="0 auto 0 0">
              Layout 2
            </RdsTitle>
            <RdsAvatar />
          </RdsHeader>
          <RdsMain>
            <Suspense fallback={<RdsLoading />}>
              <Switch>
                <Route exact path="/">
                  <RdsContainer>
                    <RdsText margin="0 0 16px">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
                      Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
                      tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
                      commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer
                      quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
                      fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat.
                      Vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                      ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                    </RdsText>
                    <RdsText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
                      Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
                      tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
                      commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies integer
                      quis. Cursus euismod quis viverra nibh cras. Metus vulputate eu scelerisque felis imperdiet proin
                      fermentum leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
                      vivamus at augue. At augue eget arcu dictum varius duis at consectetur lorem. Velit sed
                      ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                    </RdsText>
                    <RdsText>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
                      Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum quisque non
                      tellus. Convallis convallis tellus id interdum velit laoreet id donec ultrices. Odio morbi quis
                      commodo odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
                    </RdsText>
                  </RdsContainer>
                </Route>
              </Switch>
            </Suspense>
          </RdsMain>
        </RdsContent>
      </RdsTheme>
    </MemoryRouter>
  );
};

export default Layout2;
