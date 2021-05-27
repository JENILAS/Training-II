import React from 'react'

export default function FilterButton(props) {
    return (
        <>
        <button onClick ={() =>props.setFilter(props.name)}>
            <span>Show</span>
            <span>{props.name}</span>
            <span>Tasks</span> 
           
        </button><span> </span>
        </>
    )
}
