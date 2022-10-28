import React, {Component} from "react";
import notify from './notify.png';
import styles from './Sample.module.css';


export let count:number=0;

export class Notifications extends Component{
    public myStyle:any ={height:'50px', width:'50px'}
    public custom:any={backgroundColor:'white', borderWidth:'50px'}
    //override the render method
    render(): React.ReactNode{
        return (
            <button style={this.custom}>
                <img src={notify} style={this.myStyle}/>
                <span className={styles.bage}>{count++}</span>
            </button>
        )
    }
}