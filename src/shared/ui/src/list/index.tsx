import lazyWithPreload from '../preload';
export * from './table/list-table';

export const ListTable = lazyWithPreload(() => import('./table/list-table'));
export const ListGrid = lazyWithPreload(() => import('./grid/list-grid'));
export const ListBox = lazyWithPreload(() => import('./box/list-box'));
export const ListEmpty = lazyWithPreload(() => import('./empty/list-empty'));
export const ListBoxSkeleton = lazyWithPreload(() => import('./box/list-box-skeleton'));

export const List = () => {};

List.Grid = ListGrid;
List.Table = ListTable;
List.Box = ListBox;
List.BoxSkeleton = ListBoxSkeleton;
List.Empty = ListEmpty;
