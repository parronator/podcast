import lazyWithPreload from '../preload';

export const LayoutList = lazyWithPreload(() => import('./list/layout-list'));
export const LayoutSidebarContent = lazyWithPreload(() => import('./sidebarContent/layout-sidebarContent'));

export const Layout = () => {};

Layout.List = LayoutList;
Layout.SidebarContent = LayoutSidebarContent;
