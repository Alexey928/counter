import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter/Counter";
import {v1} from "uuid"

export type CountType = {
    id: string
    count: number
    stepSet: number
    limit: number
    startSet: number
    erorState: boolean
};
const START_SET = 0;

const INICIAL_COUNTER = [ {
    id: v1(),
    count: 0,
    stepSet: 1,
    limit: 5,
    startSet: START_SET,
    erorState: false
},];

function App() {
    const [counters,setCouters] = useState<Array<CountType>>(INICIAL_COUNTER);
    const [saveDoneStatus, setSaveDoneStatus] = useState<false|null|string>(null)
    const incrementCounter = (counterID: string) => {
        setCouters(counters.map((el) => {
            // let tempCount = el.count+el.stepSet
            if (el.id === counterID && el.count<= el.limit) {
                console.log(el)// is too old value, fix this layter
                return el.count > el.limit? {...el,  erorState: !el.erorState} :
                    {...el, count: el.count + el.stepSet}
            } else {
                console.log(el)
                return el
            }
        }))
    };
    const resetCounter = (counterID: string) => {
        setCouters(counters.map((el) => el.id === counterID ? {...el, count: el.startSet,erorState:false} : el))
    };
    const chengeSettings = (counterID: string ,limit:number,step:number)=>{
        setCouters(counters.map((el) => el.id === counterID ? {...el, limit:limit,stepSet:step} : el));// limit step
    };
    const addCounter = ()=> {
        setCouters([...counters,{...INICIAL_COUNTER[0],id:v1()}])
    };
    const remuveCounter = (counterID: string )=>{
        setCouters( counters.filter((el)=>el.id!==counterID));
    };
    const saveTooLocalStorege = ()=>{
        setSaveDoneStatus("1");
    }// можно прям в обработчик запихать в обвертки )
    const loadSavedValues = ()=>{
        setSaveDoneStatus("0");
    }
    const clearMemory = ()=>{
        setSaveDoneStatus("2");
    }

    useEffect(()=>{

    },[])

    useEffect(()=>{
        if(saveDoneStatus==="1"){
            localStorage.save = JSON.stringify(counters);
            setCouters([...counters])
        }
        if(saveDoneStatus==="0"){
            if(localStorage.save){
                setCouters(JSON.parse(localStorage.save));
                setSaveDoneStatus("loadet");
            }else{
                setSaveDoneStatus(null)
            }
        }
        if(saveDoneStatus==="2"){
            if(localStorage.save){
                localStorage.save="";
                console.log(localStorage.save);
                setSaveDoneStatus(null);
                setCouters([...counters]);
            }
            setSaveDoneStatus(null);
        }
    },[saveDoneStatus] )




    return (
        <div className={"App"}>
            <div className={"App-container"}>
                <div className={"menu"}>
                    <button className={"menu-item"} onClick={clearMemory}>Clear mem</button>
                    <button  onClick={saveTooLocalStorege} className={saveDoneStatus?"isdone":"menu-item"}>Save to mem</button>
                    <button className={"menu-item"} onClick={loadSavedValues}>Read mem</button>
                    <button className={"menu-item"} onClick={addCounter}>+Counter</button>
                </div>

                {counters.map((el,) => {
                    return <Counter key={el.id}
                                    id={el.id}
                                    count={el.count}
                                    stepSet={el.stepSet}
                                    limit={el.limit}
                                    IncrementCount={incrementCounter}
                                    resetCounter={resetCounter}
                                    erorState={el.erorState}
                                    chengeSettings={chengeSettings}
                                    remuveCounter = {remuveCounter}
                    />
                })
                }
            </div>

        </div>
    );
}

export default App;
