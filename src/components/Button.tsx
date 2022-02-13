import React from 'react';
type ButonPropsType = {
    contentent:string
    disebelvall:boolean
    funcCallBack:(counterID:string)=>void
    id:string
}

const Button = (props:ButonPropsType) => {
    return (
        <button disabled={props.disebelvall} onClick={()=>{props.funcCallBack(props.id)}}>
            {props.contentent}
        </button>
    );
};

export default Button;