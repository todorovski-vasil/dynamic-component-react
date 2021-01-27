import React from 'react'

interface DynamicRowProps {
    rowColumns: Array<{ field: string; type: string;}>
}

interface RowProps {
    id: string;
    name: string;
}

export function dynamicRow ({ rowColumns}: DynamicRowProps) {
    return ({id, name}: RowProps) => <li>rowId: {id}, name: {name}</li>
}