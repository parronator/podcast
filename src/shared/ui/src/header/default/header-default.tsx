import './header-default.css';
import { FC } from 'react';
import { NavLink } from 'react-router-dom';

export interface HeaderProps {
  loading?: boolean;
}

export const Default: FC<HeaderProps> = ({ loading = false }) => {
  return (
    <header className="header">
      <NavLink to="/" data-testid="header-link">
        <h1 className="header__title">Podcaster</h1>
      </NavLink>
      <div data-testid="header-spinner" className="header__spinner" hidden={!loading}/>
    </header>

  );
};

export default Default;

