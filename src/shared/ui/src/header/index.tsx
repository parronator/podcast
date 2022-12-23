import lazyWithPreload from '../preload';

export const HeaderDefault = lazyWithPreload(() => import('./default/header-default'));

export const Header = () => {};

Header.Default = HeaderDefault;
