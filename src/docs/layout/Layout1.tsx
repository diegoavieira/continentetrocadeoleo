import React, { FC, Suspense, useEffect, useState } from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import { ThemeOptions, useTheme, useMediaQuery } from '@material-ui/core';
import { BrightnessHigh as BrightnessHighIcon, BrightnessLow as BrightnessLowIcon } from '@material-ui/icons';
import {
  RdsMain,
  RdsContent,
  RdsDrawer,
  RdsHeader,
  RdsNav,
  RdsTheme,
  RdsContainer,
  RdsTitle,
  RdsAvatar,
  RdsText,
  RdsLoading,
  RdsIconButton
} from '@rdsystem/components';
import RdsNavProps from '@rdsystem/components/RdsNav/RdsNav.props';
import {
  PlayCircleOutlineOutlined as PlayCircleOutlineOutlinedIcon,
  DashboardOutlined as DashboardOutlinedIcon
} from '@material-ui/icons';
import RdsListItemProps from '@rdsystem/components/RdsListItem/RdsListItem.props';
import moment from 'moment';
import 'moment/locale/pt-br';

moment.locale('pt-br');

const drawerNavItems: RdsNavProps['items'] = [
  {
    key: 'main',
    items: [
      {
        key: 'route',
        title: 'Route',
        icon: <PlayCircleOutlineOutlinedIcon />,
        path: '/'
      },
      {
        key: 'collapse',
        title: 'Collapse',
        icon: <DashboardOutlinedIcon />,
        items: [
          {
            key: 'collapsed',
            title: 'Collapsed',
            path: '/collapse/collapsed'
          }
        ]
      }
    ]
  }
];

// Prop document is injected by the documentation to work in an iframe.
// You won't need it on your project.

const Layout1: FC<{ document?: Document }> = ({ document }) => {
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

  const avatrItems: RdsListItemProps['item'][] = [
    {
      key: 'user',
      primary: 'User'
    },
    {
      key: 'theme',
      primary: 'Brightness',
      secondaryAction: (
        <RdsIconButton document={document} margin="0 -12px 0 0" onClick={onType} tooltip="Toggle ligh/dark theme">
          {type === 'light' ? <BrightnessHighIcon /> : <BrightnessLowIcon />}
        </RdsIconButton>
      )
    },
    {
      key: 'logout',
      primary: 'Logout',
      action: (item) => console.log(item)
    }
  ];

  useEffect(() => {
    if (isMobile) {
      setToggle(false);
    }
  }, [isMobile]);

  // MemoryRouter is used to work in an iframe.
  // You won't need it on your project. Use BrowserRouter.

  return (
    <MemoryRouter>
      <RdsTheme theme={theme}>
        <RdsContent hasHeaderFixed hasDrawer>
          <RdsHeader fixed onToggle={onToggle} document={document} toggleTooltip="Toggle open/close drawer">
            <RdsTitle type="span" margin="0 auto 0 0">
              Layout 1
            </RdsTitle>
            <RdsIconButton
              document={document}
              margin="0 8px 0 0"
              color="inherit"
              onClick={onType}
              tooltip="Toggle ligh/dark theme"
            >
              {type === 'light' ? <BrightnessHighIcon /> : <BrightnessLowIcon />}
            </RdsIconButton>
            <RdsAvatar items={avatrItems} document={document} tooltip="Profile" />
          </RdsHeader>
          <RdsDrawer hasHeaderFixed isMobile={isMobile} toggle={toggle} onToggle={onToggle} document={document}>
            <RdsNav
              document={document}
              items={drawerNavItems}
              toggle={toggle}
              onToggle={isMobile ? onToggle : undefined}
            />
          </RdsDrawer>
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
                  </RdsContainer>
                </Route>
                <Route path="/collapse/collapsed">
                  <RdsContainer>
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

export default Layout1;
