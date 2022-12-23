import './list-box.css';
import { NavLink } from 'react-router-dom';
import { FC } from 'react';

export interface BoxProps {
  image: string;
  title: string;
  subtitle: string;
  link: string;
}

export const Box: FC<BoxProps> = ({ image, title, subtitle, link, preload }: BoxProps) => {
  return (
    <NavLink to={link} onMouseEnter={preload}>
      <div className="box">
        <img className="box__image" src={image} loading="lazy" alt={title}/>
        <div className="box__content">
          <h1 className="box__title">{title}</h1>
          <h2 className="box__subtitle">Author: {subtitle}</h2>
        </div>
      </div>
    </NavLink>
  );
};

export default Box;

