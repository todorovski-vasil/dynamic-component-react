import React from 'react';

interface DynamicRowProps {
  rowColumns: Array<{ field: string; type: string }>;
}

interface RowProps {
  values: Array<string>;
}

const DynamicField = ({ field, type }: { field: string; type: string }) => (
  value: string,
) =>
  type === 'string' ? (
    <span>
      {field}: {value}{' '}
    </span>
  ) : (
    <span>
      {field}={value}
    </span>
  );

export const DynamicRow = ({ rowColumns }: DynamicRowProps) => {
  const fields = rowColumns.map((column) => DynamicField(column));

  return ({ values }: RowProps) => (
    <li>{fields.map((field, index) => field(values[index]))}</li>
  );
};
