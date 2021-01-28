import React from 'react';

interface DynamicRowProps {
  rowColumns: Array<{ field: string; type: string }>;
}

interface RowProps {
  values: any;
}

const DynamicField = ({ field, type }: { field: string; type: string }) =>
  type === 'string'
    ? (value: string) => (
        <span>
          {field}: {value}{' '}
        </span>
      )
    : (value: string) => (
        <span>
          {field}={value}{' '}
        </span>
      );

export const DynamicRow = ({ rowColumns }: DynamicRowProps) => {
  const fields = rowColumns.map((column) => ({
    field: column.field,
    component: DynamicField(column),
  }));

  const componentFields = fields.map;
  return ({ values }: RowProps) => (
    <li>{fields.map((field) => field.component(values[field.field]))}</li>
  );
};
