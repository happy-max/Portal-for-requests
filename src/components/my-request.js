import React, { useState } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'

import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import SelectedRequest from './selected-request'

const MyRequest = () => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [selectedRow, setSelectedRow] = useState({})
  
    const [rowData, setRowData] = useState([
        { date: "24-05-21", theme: "theme", description: "description" },
        { date: "24-05-21", theme: "theme", description: "description" },
        { date: "24-05-21", theme: "theme", description: "description" }
    ])
    const onRowCliked = (e) => {
        setIsModalVisible(true)
        setSelectedRow(rowData[e.rowIndex])
    
        }
      
    return (
        <>
        <div className="ag-theme-alpine" >
            <AgGridReact
                rowData={rowData}
                onRowClicked={onRowCliked}
            >
                <AgGridColumn field="date" flex={1} ></AgGridColumn>
                <AgGridColumn field="theme"flex={1}></AgGridColumn>
            </AgGridReact>
         
        </div>
           <SelectedRequest setIsModalVisible={setIsModalVisible}
            isModalVisible={isModalVisible} selectedRow={selectedRow}/>
           </>
    )
}

export default MyRequest