import React, {ChangeEvent, useEffect, useState} from 'react';
type SetingsPropsType = {
    id:string
    limit:number
    chengeSettings:(limit:number,step:number)=>void
    step:number

}
const Setings = (props:SetingsPropsType) => {

const[stepVall, setStepVall] = useState(`${props.step}`);
const [limitVall, setLimitVall] = useState(`${props.limit}`);
const[error,setEror] = useState(false)
    const stepOnBlureHendler = (e:ChangeEvent<HTMLInputElement>)=>{
    if (+stepVall>=+limitVall){
        console.log("eroro")
        setEror(true)
    }else{
        console.log(e.currentTarget.value)//для логов пока так потом на тернар ))
        setStepVall(e.currentTarget.value)
        console.log(stepVall,limitVall)
    }
};
const limitOnblureHendler = (e:ChangeEvent<HTMLInputElement>)=>{
    if (+stepVall>=+limitVall){
        console.log("eroro")
        setEror(true)
    }else{
        console.log(e.currentTarget.value)
        setLimitVall(e.currentTarget.value)
        console.log(stepVall,limitVall)
    }
}
const buttonOnClickHendler = ()=>{
    if (+stepVall>=+limitVall){
        console.log("eroro")
        setEror(true)
    }else{
        props.chengeSettings(+limitVall,+stepVall)
    }

}

useEffect(()=>{
        if(error){
            setTimeout(()=>{
                console.log(stepVall,limitVall)
                setLimitVall(`${(+limitVall)+(+stepVall)}`)
                setEror(false)
            },2000)
        }

    },[error])

    return (
        <div className={"settings-container"}>
            <div className={"settings"}>
                <div>
                    <span>LIMIT</span>
                    <input onBlur={limitOnblureHendler}
                           onChange={(e:ChangeEvent<HTMLInputElement>)=>{+e.currentTarget.value>=0?setLimitVall(e.currentTarget.value):setLimitVall("2")}}
                           value={limitVall}
                           type="number"
                    />
                    {error?<div>Wrong</div>:false}
                </div>

                <div>
                    <span>STEP</span>
                    <input
                        onBlur={stepOnBlureHendler}
                        onChange={(e:ChangeEvent<HTMLInputElement>)=>{+e.currentTarget.value>=0?setStepVall(e.currentTarget.value):setStepVall("1")}}
                        value={stepVall}
                        type="number"
                    />
                    <button disabled={error} onClick={buttonOnClickHendler} >save </button>
                </div>
            </div>
        </div>

    );
};

export default Setings;