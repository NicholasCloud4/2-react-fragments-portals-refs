import React, { useState } from 'react'
import PortalComponent from './PortalComponent'
import Modal from './Modal'

export default function Component2() {
    const [showModal, setShowModal] = useState(false)
    function displayModal() {
        setShowModal(true)
    }

    function hideModal() {
        setShowModal(false)
    }

    return (
        <div style={{ width: "300px", position: "relative" }}>
            <h3>This is Component 2</h3>
            <p>This is a paragraph</p>
            {/* <PortalComponent /> */}
            <button onClick={displayModal}>Show Modal</button>
            <Modal showModal={showModal} hideModal={hideModal} />
        </div>
    )
}
