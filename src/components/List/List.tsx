import React from 'react'
import { dynamicRow } from '../DynamicRow/DynamicRow' 

const listColumns = [
    { field: 'id', type: 'string'}, { field: 'name', type: 'string' }
]
const listData = [
    { id: '3242', name: 'Vasil1'},
    { id: '3243', name: 'Vasil2'},
    { id: '3244', name: 'Vasil3'},
    { id: '3245', name: 'Vasil4'}
]
export const List = () => {
    const Row = dynamicRow({ rowColumns: listColumns })

    const rows = listData.map((row: any) => <Row key={row.id} id={row.id} name={row.name} />)

    return <ul>
        {rows}
    </ul>
} 