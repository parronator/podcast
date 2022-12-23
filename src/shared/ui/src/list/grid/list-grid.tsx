import { FC } from 'react';
import './list-grid.css';

export interface GridProps {
  columns?: number | 'auto-fill';
}

export const Grid: FC<GridProps> = ({ children, columns = 'auto-fill' }) => {
  return (
    <div className="list__container" style={{ 'gridTemplateColumns': `repeat(${columns}, minmax(11rem, 1fr))` }}>
      {children}
    </div>
  );
};

export default Grid;

