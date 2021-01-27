import React from 'react';
import { DynamicRow } from '../DynamicRow/DynamicRow';

const listColumns = [
  { field: 'id', type: 'string' },
  { field: 'name', type: 'string' },
];
const listData = [
  ['3242', 'Vasil1'],
  ['3243', 'Vasil2'],
  ['3244', 'Vasil3'],
  ['3245', 'Vasil4'],
];
export const List = () => {
  const Row = DynamicRow({ rowColumns: listColumns });

  const rows = listData.map((row: any) => <Row key={row.id} values={row} />);

  return <ul>{rows}</ul>;
};
