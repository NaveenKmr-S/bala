import { PagesSharp } from '@material-ui/icons';
import React from 'react';

export default function Cartnum(){
    var [count,setCount]=React.useState(0);
    function onAdd(){
        return setCount(count+1);
    }
    function onSub(){
        if(count === 0){
            setCount(0);
        }
        else{
            setCount(count-1);
        }
        
    }
    return(
        <div class="ui basic buttons input ">
            <div class="ui button right" onClick={onSub} style={{ borderRight:"1px solid rgba(34,36,38,.15)"}}>
                <i class="minus icon"></i>
            </div>
            <input type="text" style={{width:"50px" , border:"none" , textAlign:"center"}} value={count}/>
            <div class="ui button left" onClick={onAdd}>
                <i class="plus icon"></i> 
            </div>
        </div>
    );
}
