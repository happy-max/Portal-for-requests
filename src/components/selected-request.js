import React, { useState } from 'react'
import { Modal, Button } from 'antd'

const SelectedRequest = ({setIsModalVisible, isModalVisible, selectedRow}) => {

  return (
    <>
      <Modal title="Selected request" visible={isModalVisible}
        onOk={()=>setIsModalVisible(false)}
        onCancel={()=>setIsModalVisible(false)}
        >
        <h3>Date:</h3> <p>{selectedRow.date}</p>
        <h3>Theme:</h3> <p>{selectedRow.theme}</p>
        <h3>Description:</h3> <p>{selectedRow.description}</p>
      </Modal>
    </>
  )
}
export default SelectedRequest