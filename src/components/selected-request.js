import React  from 'react'
import {Button, Modal} from 'antd'

const SelectedRequest = ({setIsModalVisible, isModalVisible, selectedRow, onDeleteRow}) => {

  return (
    <>
      <Modal title="Selected request" visible={isModalVisible}
        onOk={()=>setIsModalVisible(false)}
        onCancel={()=>setIsModalVisible(false)}
             footer={[
                 <Button key="back" onClick={()=>setIsModalVisible(false)}>
                     Cancel
                 </Button>,
                 <Button key="submit" type="primary"  onClick={onDeleteRow}>
                     Delete
                 </Button>
             ]}
        >
        <h3>Date of creation:</h3> <p>{selectedRow.date}</p>
        <h3>Theme:</h3> <p>{selectedRow.theme}</p>
        <h3>Description:</h3> <p>{selectedRow.description}</p>
      </Modal>
    </>
  )
}
export default SelectedRequest