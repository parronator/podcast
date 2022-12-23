import lazyWithPreload from '../preload';

export const NavbarSearch = lazyWithPreload(() => import('./search/navbar-search'));

export const Navbar = () => {};

Navbar.Search = NavbarSearch;
