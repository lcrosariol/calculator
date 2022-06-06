import React from 'react';
import './css/result.css';

function Result(props) {
    return (  
            <div className="results">
                <div className="red"></div>
                <div className="yellow"></div>
                <div className="green"></div>
                <input placeholder={props.ph} onChange={props.handleChange} className="form-control" type = "number" value={props.value}></input>
            </div>
    );
}


export default Result;