import RdsNavProps from '@rdsystem/components/RdsNav/RdsNav.props';

export default interface LayoutProps {
  children: JSX.Element | JSX.Element[];
  drawerNavItems: RdsNavProps['items'];
}
