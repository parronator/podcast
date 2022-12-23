import './sidebar-default.css';
import { FC } from 'react';

export interface SidebarProps {
  loading?: boolean;
  image: string;
  title: string;
  subtitle: string;
  description: string;
}

export const Default: FC<SidebarProps> = ({ loading, image, title, subtitle, description }) => {
  return (
    <aside className="sidebar__default">
      <div className="sidebar__image-container">
        {loading
          ? <div className="sidebar__image-skeleton" data-testid="sidebar-skeleton"/>
          : <img src={image} alt={title} className="sidebar__image" data-testid="sidebar"/>}
      </div>
      <hr className="sidebar__divider"/>
      <div className="sidebar__content">
        <div className="sidebar__title-container">
          {loading
            ? <><h1 className="sidebar__title-skeleton">.</h1>
              <h2 className="sidebar__subtitle-skeleton">.</h2></>
            : <><h1 className="sidebar__title">{title}</h1>
              <h2 className="sidebar__subtitle">by {subtitle}</h2></>}
        </div>
        <hr className="sidebar__divider"/>
        <div className="sidebar__section">
          {loading ? <><h1 className="sidebar__title-skeleton">.</h1>
              <h2 className="sidebar__subtitle-skeleton">.</h2></>
            : <><span className="sidebar__section-title">Description:</span>
              <span className="sidebar__section-text">{description}</span></>}
        </div>
      </div>
    </aside>
  );
};

export default Default;
