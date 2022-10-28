import React, {Component} from "react";

export class WithHttp extends Component<{},{data:any}>{
    constructor(props:any){
        super(props)
        this.state={data:{}}
    }

    public getData(){
        let url='https://jsonplaceholder.typicode.com/posts/1'
        fetch(url).then((data)=>data.json())
                    .then((subdata)=>{console.log(subdata)
                    this.setState({data:subdata})
                })
    }
    render(): React.ReactNode{
        return(
            <>
            <button onClick={()=>this.getData()}>see data in console</button>
            <table className="boarder">
                <tr className="boarder">
                    <td className="boarder">UserId:{this.state.data.userId}</td>
                    <td className="boarder">Title:{this.state.data.title}</td>
                    <td className="boarder">Content: {this.state.data.body}</td>
                </tr>
            </table>
            </>
        )
    }
}
