import React, { lazy } from 'react';
import { Layout } from '@components';
import { Route } from 'react-router-dom';
import RdsNavProps from '@rdsystem/components/RdsNav/RdsNav.props';
import {
  PlayCircleOutlineOutlined as PlayCircleOutlineOutlinedIcon,
  DashboardOutlined as DashboardOutlinedIcon,
  WebOutlined as WebOutlinedicon,
  ColorLensOutlined as ColorLensOutlinedIcon,
  ListAltOutlined as ListAltOutlinedIcon,
  BubbleChartOutlined as BubbleChartOutlinedIcon
} from '@material-ui/icons';

const GettingStartedPage = lazy(() => import('@pages/GettingStartedPage'));
const LayoutPage = lazy(() => import('@pages/LayoutPage'));
const ThemePage = lazy(() => import('@pages/ThemePage'));
const FormPage = lazy(() => import('@pages/FormPage'));
const InstallComponentsPage = lazy(() => import('@pages/InstallComponentsPage'));
const RdsTablePage = lazy(() => import('@pages/RdsTablePage'));

const drawerNavItems: RdsNavProps['items'] = [
  {
    key: 'main',
    items: [
      {
        key: 'getting-started',
        title: 'Getting Started',
        icon: <PlayCircleOutlineOutlinedIcon />,
        path: '/'
      },
      {
        key: 'layout',
        title: 'Layout',
        icon: <WebOutlinedicon />,
        path: '/layout'
      },
      {
        key: 'theme',
        title: 'Theme',
        icon: <ColorLensOutlinedIcon />,
        path: '/theme'
      },
      {
        key: 'form',
        title: 'Form',
        icon: <ListAltOutlinedIcon />,
        path: '/form'
      },
      {
        key: 'components',
        title: 'Components',
        icon: <DashboardOutlinedIcon />,
        items: [
          {
            key: 'installation',
            title: 'Installation',
            path: '/components/installation'
          },
          {
            key: 'rds-table',
            title: 'RdsTable',
            path: '/components/rds-table'
          }
        ]
      },
      {
        key: 'hooks',
        title: 'Hooks',
        icon: <BubbleChartOutlinedIcon />,
        items: [
          {
            key: 'rds-use-fetch',
            title: 'rdsUseFetch',
            path: '/hooks/rds-use-fetch'
          }
        ]
      }
    ]
  }
];

const App = () => (
  <Layout drawerNavItems={drawerNavItems}>
    <Route exact path="/">
      <GettingStartedPage />
    </Route>
    <Route path="/layout">
      <LayoutPage />
    </Route>
    <Route path="/theme">
      <ThemePage />
    </Route>
    <Route path="/form">
      <FormPage />
    </Route>
    <Route path="/components/installation">
      <InstallComponentsPage />
    </Route>
    <Route path="/components/rds-table">
      <RdsTablePage />
    </Route>
  </Layout>
);

export default App;
