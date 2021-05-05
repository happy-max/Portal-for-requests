import React, { useState } from 'react'
import { AgGridColumn, AgGridReact } from 'ag-grid-react'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'
import SelectedRequest from './selected-request'
import Modal from "antd/es/modal/Modal"


const MyRequest = ({currentUser, setCurrentUser}) => {
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isDeleteVisible, setIsDeleteVisible] = useState(false)
    const [selectedRow, setSelectedRow] = useState({})

    const onRowCliked = (e) => {
        setIsModalVisible(true)
        setSelectedRow(currentUser.notes[e.rowIndex])
        }
    function onDeleteRow(){
        setIsModalVisible(false)
        setIsDeleteVisible(true)
    }
    const approvedDeleteRequest = () => {
        let newNotes = currentUser.notes.filter(item => item !== selectedRow)
        setCurrentUser(prevState => ({...prevState, notes: newNotes}))
        setIsDeleteVisible(false)
    }
      
    return (
        <>
        <div className="ag-theme-alpine" >
            <AgGridReact
                rowData={currentUser.notes}
                onRowClicked={onRowCliked}
            >
                <AgGridColumn field="date" flex={1} ></AgGridColumn>
                <AgGridColumn field="theme"flex={1}></AgGridColumn>
            </AgGridReact>
        </div>
           <SelectedRequest setIsModalVisible={setIsModalVisible}
            isModalVisible={isModalVisible} selectedRow={selectedRow}
                            onDeleteRow={onDeleteRow}/>
            <Modal title="Deletion"
                   visible={isDeleteVisible}
                   onOk={approvedDeleteRequest}
                   onCancel={()=>setIsDeleteVisible(false)}
            > <h2>Do you want to delete this request?</h2></Modal>
           </>
    )
}

export default MyRequest