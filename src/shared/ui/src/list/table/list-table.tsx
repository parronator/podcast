import { FC, ReactElement } from 'react';
import './list-table.css';

export interface ListHeader {
  value: string;
  columns?: number;
}

export interface ListRow {
  id: string;
  values: string[];
  onClick?: () => void;
  onMouseEnter?: () => void;
}

export interface TableProps {
  loading?: boolean;
  title: string;
  header: ListHeader[];
  items: ListRow[];
}

export const Table: FC<TableProps> = ({ loading, title, header, items = [1, 2, 3] }) => {
  const mapSkeleton: () => ReactElement = () => {
    const items = [...Array(5).keys()].map((item, index) => (
      <tr key={index} className="table__skeleton">
        {header.map((h: ListHeader, i) => (
          <td data-label={h.value + ':'} key={index + i} colSpan={h.columns || 1}>
            .
          </td>
        ))}
      </tr>
    ));
    return <tbody data-testid="table-skeleton">{items}</tbody>;
  };

  const mapItems: () => ReactElement = () => {
    const i = items.map((item, index) => (
      <tr
        key={item.id}
        onClick={item.onClick}
        onMouseEnter={item.onMouseEnter}
        className={item.onClick ? 'clickable' : ''}
        data-testid="table"
      >
        {item.values.map((h, i) => (
          <td
            data-label={header[i].value + ':'}
            key={item.id + i}
            colSpan={header[i].columns || 1}
            className={item.onClick && i === 0 ? 'table__link' : ''}
          >
            {h}
          </td>
        ))}
      </tr>
    ))
    return <tbody data-testid="table">{i}</tbody>
  }
  return (
    <table>
      <caption>
        {title}: {loading ? '' : items.length}
      </caption>
      <thead>
        <tr>
          {header.map((h, i) => (
            <th key={h.value + i} colSpan={h.columns || 1} scope="col">
              {h.value}
            </th>
          ))}
        </tr>
      </thead>
      
        {loading
          ? mapSkeleton()
          : mapItems()}
    </table>
  );
};

export default Table;
