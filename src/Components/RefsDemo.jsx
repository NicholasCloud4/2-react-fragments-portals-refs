import React, { useRef } from 'react'

export default function RefsDemo() {

    const nameInputRef = useRef()
    // console.log(nameInputRef)

    function showNameEventHandler() {
        console.log(nameInputRef.current.value)
    }

    return (
        <>
            <span>Name:</span>
            <input type="text" ref={nameInputRef} />
            <button onClick={showNameEventHandler}>Show Name</button>
        </>
    )
}
