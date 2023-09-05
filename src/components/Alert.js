import React from 'react'

export default function Alert(props) {
    return (
        <>
            <div style={{height:'38px'}}>
                <div className={`alert alert-${props.alert.type} mt-2 mx-2 py-1 px-3 " role="alert`}>
                    <strong>{props.alert.type}</strong> {props.alert.msg}
                </div>
            </div>
        </>
    )
}
