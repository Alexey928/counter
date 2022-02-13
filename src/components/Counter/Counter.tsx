import React, {useState} from 'react';
import {Display} from "../Display";
import Button from "../Button";
import CounterInterfase from "./CounterInterfase";
import Setings from "./Setings";

type CounterProps = {
    id:string
    count:number
    stepSet:number
    limit:number
    IncrementCount:(counterID:string)=>void
    resetCounter:(counterID:string)=>void
    erorState:boolean
    chengeSettings:(counterID: string ,limit:number,step:number) =>void
    remuveCounter:(counterID:string)=>void


}

const Counter = (props:CounterProps) => {

    const [setingsTriger, setsetingsTriger] = useState<boolean>(false);

    return (
        <div className={"counter"}>
            <button className={'remuve-counter'} onClick={()=>props.remuveCounter(props.id)}>x</button>
            <button onClick={()=>setsetingsTriger(true)}>close set</button>
            <div className={"counterContainer"}>
                <CounterInterfase id={props.id}
                                  limit={props.limit}
                                  step={props.stepSet}
                                  count={props.count}
                                  counterEror  = {props.erorState}
                                  IncrementCount={props.IncrementCount}
                                  resetCounter={props.resetCounter}
                />
                <Setings chengeSettings = {(limit:number,step:number)=>props.chengeSettings(props.id,limit,step)}
                         id = {props.id}
                         limit = {props.limit}
                         step ={props.stepSet}
                />
            </div>

        </div>


    );
};

export default Counter;