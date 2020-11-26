import React from "react";

export default function Card(props){
    return(
        <div class="ui cards">
            <div class="card">
                <div class="content">
                    <div class="header">
                        {props.header}
                    </div>

                    <div class="meta des" >{props.mat}<span>: </span></div>
                    <div class="description des">
                        {props.matdes}
                    </div>
                    <br/>

                    <div class="meta des" >{props.dim} <span>: </span></div>
                    <div class="description des">
                        {props.dimdes}
                    </div>
                    <br/>

                    <div class="meta des" >{props.pri} <span>: </span></div>
                    <div class="description des">
                        {props.prides}
                    </div>
                    <br/>

                    <div class="meta dow">
                        <u>Remove</u>
                    </div>
                </div>
                
            </div>
        </div>
    );
}