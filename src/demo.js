import {Component} from "react";
import {Show} from "./show";

export class Demo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: "Hello World",
            isShow: false,
            name: "Tuan",
            color: "",
        };
    }

    change = (e) => {
        this.setState({data: e.target.value
        , [e.target.name]: e.target.value})
    }

    show = () => {
        this.setState({isShow: !this.state.isShow});
    }

    componentDidMount() {
        setTimeout(() => {
            this.setState({ color: 'red' });
        }, 2000);
    }

    componentDidUpdate() {
        setTimeout(() => {
            this.setState({ color: 'orange' });
        }, 2000);
    }

    render() {
        return (
            <>
                <div style={{backgroundColor:this.state.color}}>
                    <h1>{this.state.data}</h1>
                    <h1>{this.state.name}</h1>
                    <h1>{this.props.data}</h1>
                    <input type="text" name="name" onChange={this.change}/>
                    <br/><br/>

                    <button onClick={this.show}>{this.state.isShow ? "Hide" : "Show"}</button>
                    {this.state.isShow && <Show/>}
                    <button onClick={()=>this.setState({color: 'green'})}>Color</button>
                </div>
            </>

        );
    }
}

