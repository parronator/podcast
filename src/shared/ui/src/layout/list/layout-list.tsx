import { FC } from 'react';
import'./layout-list.css';
import { Header, Navbar } from '../../';

export interface ListProps {
  loading?: boolean;
  searchPlaceholder: string;
  searchCallback: (val: string) => unknown;
}

export const List: FC<ListProps> = ({children, loading = true, searchPlaceholder,searchCallback}) => {
  return (
    <section>
      <Header.Default loading={loading}/>
      <section className="layout__container">
        <Navbar.Search placeholder={searchPlaceholder} callback={searchCallback}/>
        <section className="layout__content">{children}</section>
      </section>
    </section>
  );
}

export default List;

