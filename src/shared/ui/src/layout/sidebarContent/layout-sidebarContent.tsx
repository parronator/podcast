import './layout-sidebarContent.css';
import React, { FC } from 'react';
import { Header, Sidebar } from '../../';

export interface LayoutProps {
  loading?: boolean;
  sidebarImage: string;
  sidebarTitle: string;
  sidebarSubtitle: string;
  sidebarDescription: string;
}

Header.Default.preload();
Sidebar.Default.preload();

export const SidebarContent: FC<LayoutProps> = ({ children, loading, sidebarTitle, sidebarSubtitle, sidebarImage, sidebarDescription }) => {
  return (
    <section>
      <Header.Default loading={loading}/>
      <section className="layout-sidebar__container">
        <Sidebar.Default loading={loading}
                         image={sidebarImage}
                         title={sidebarTitle}
                         subtitle={sidebarSubtitle}
                         description={sidebarDescription}/>
        <section className="layout-sidebar__content">{children}</section>
      </section>
    </section>
  );
};

export default SidebarContent;
