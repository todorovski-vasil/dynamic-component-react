import React from 'react';
import { DynamicRow } from '../DynamicRow/DynamicRow';

const listColumns = [
  { field: 'id', type: 'id' },
  { field: 'name', type: 'string' },
];
const listData = [
  { id: '3242', name: 'Vasil1' },
  { id: '3243', name: 'Vasil2' },
  { id: '3247', name: 'Vasil3' },
  { id: '3245', name: 'Vasil4' },
];

export const List = () => {
  const Row = DynamicRow({ rowColumns: listColumns });

  const rows = listData.map((row: any) => <Row key={row.id} values={row} />);

  return <ul>{rows}</ul>;
};
