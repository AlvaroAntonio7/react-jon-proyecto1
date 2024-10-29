import React, {Component } from "react";

//La forma correcta seria que cada una de las funcions vayan en archivos separados
function Login(){
    return(
        <h3>Login</h3>
    );
}

function Logout(){
    return(
        <h3>Logout</h3>
    );
}
class RenderizadoCondicional extends Component{
    constructor(props){
        super(props);
        this.state={
            session:false,
        };
    }
    render(){
        return(
            <div>
                <h2>Renderizado Condicional</h2>
                {this.state.session?<Login/>:<Logout/>}
                
                
            </div>    

        );
    }
}
export default RenderizadoCondicional;

