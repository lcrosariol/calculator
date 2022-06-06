import React from 'react';

function rowMake(i , props){
    return (
    <div className="btn-row">
    <button className="btnnums" value = {i} onClick={props.handleIncrement}>{i}</button>
    <button className="btnnums " value={i+1} onClick={props.handleIncrement}>{i+1}</button>
    <button className="btnnums " value={i+2} onClick={props.handleIncrement}>{i+2}</button>
   </div>)
}

function CalcArea(props) {
    return ( 
    
        <div className="btn-area">
            {rowMake(1 , props)}
            {rowMake(4 , props)}
            {rowMake(7 , props)}
           
           <div className="btn-row">
            <button className="btnbtm"onClick={props.handleReset}>C</button>
            <button className="btnbtm" value="0" onClick={props.handleIncrement}>0</button>
            <button className="btnbtm" style={props.myStyler} onClick={props.handleCalc}>=</button>
           </div>


        </div>
 
        
     );

     
   
 
 
}


export default CalcArea;