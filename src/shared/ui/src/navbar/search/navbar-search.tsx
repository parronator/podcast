import { FC, ChangeEvent, useEffect, useState } from 'react';
import './navbar-search.css';
import { useDebounce } from './debounce-hook';

export interface SearchProps {
  placeholder?: string;
  callback: (value: string) => void;
}

export const Search: FC<SearchProps> = ({ placeholder, callback }) => {
  const [state, setState] = useState('');
  const debouncedValue = useDebounce<string>(state, 300);

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    setState(e.target.value);
  };

  useEffect(() => {
    callback(state);
  }, [debouncedValue]);

  return (
    <nav className="nav">
      <input type="text"
             data-testid="nav-search"
             className="nav__search"
             placeholder={placeholder}
             value={state}
             onChange={handleChange}/>
    </nav>
  );
};

export default Search;

