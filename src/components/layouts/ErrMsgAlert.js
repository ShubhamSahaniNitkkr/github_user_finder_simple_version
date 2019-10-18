import React from 'react'

const ErrMsgAlert = (props) => {
    return (
        props.errMsg !== null && (
            <div className={`alert alert-${props.errMsg.type} alert-dismissible fade show `} role="alert">
                {props.errMsg.errmsg}
                <button type="button" onClick={props.hideErrMsg} className="close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        )
    )
}

export default ErrMsgAlert
