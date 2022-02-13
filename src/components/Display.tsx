import React from 'react';

type DisplayPropsType = {
    eror:boolean
    vall:number
    limit:number
    step:number
}

export const Display = (props:DisplayPropsType) => {
    console.log(props.eror)
    return (
        <div className={"display"}>
            <span>{`lim "${props.limit}"`}</span>
            <span>{`st "${props.step}"`}</span>
            <div className={props.eror?"dIsplayEror":"displayNormal"}>
                {props.vall}
            </div>
        </div>

    );
};

