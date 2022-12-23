import './list-box.css';
import { FC } from 'react';

export const BoxSkeleton: FC = () => {
  return (
    <div className="box-skeleton">
    <div className="box">
      <div className="box__image"/>
      <div className="box__content-skeleton">
        <h1 className="box__title-skeleton">.</h1>
        <h2 className="box__subtitle-skeleton">.</h2>
      </div>
    </div>
    </div>
  );
};

export default BoxSkeleton;

