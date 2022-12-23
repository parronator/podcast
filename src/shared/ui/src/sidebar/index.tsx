import lazyWithPreload from '../preload';

export const SidebarDefault = lazyWithPreload(() => import('./default/sidebar-default'));

export const Sidebar = () => {};

Sidebar.Default = SidebarDefault;
