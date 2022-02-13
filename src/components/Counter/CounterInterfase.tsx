import React from 'react';
import {Display} from "../Display";
import Button from "../Button";

type countInterfasePropsType = {
    id: string
    step:number
    limit: number
    count: number
    counterEror:boolean
    IncrementCount: (counterID: string) => void
    resetCounter: (counterID: string) => void
}
const CounterInterfase = (props: countInterfasePropsType) => {
    return (
        <div className={"countInterface"}>
            <div className={"coun-worck-spase"}>
                <Display step={props.step} limit={props.limit} eror={props.count>=props.limit} vall={props.count}/>
                {props.count >= props.limit && <div style={{color: "red"}}> Oops!! ;)</div>}
                <div className={"controlContainer"}>
                    <Button id={props.id} contentent={"Add"} disebelvall={props.count >= props.limit}
                            funcCallBack={props.IncrementCount}/>

                    <Button id={props.id} contentent={"Reset"} disebelvall={props.count === 0}
                            funcCallBack={props.resetCounter}/>
                </div>
            </div>
        </div>
    );
};

export default CounterInterfase;