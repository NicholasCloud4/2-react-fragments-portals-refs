import React from 'react'
import ReactDOM from 'react-dom'

export default function PortalComponent() {
    return ReactDOM.createPortal(<h1>This is the Portal Component</h1>, document.getElementById('root-portal'))


}
