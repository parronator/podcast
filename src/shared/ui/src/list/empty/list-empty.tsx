import './list-empty.css';
import { FC } from 'react';

export interface EmptyProps {
  title: string;
}

export const Empty: FC<EmptyProps> = ({ title }: EmptyProps) => {
  return (
    <div className="empty">
      <h1 className="empty__title">{title}</h1>
    </div>
  );
};

export default Empty;

