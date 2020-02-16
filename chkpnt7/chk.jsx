import React from 'react';


export default class Alerta extends React.Component{

    componentDidMount(){
        setTimeout(alert("Hello message"), 2000);
    }

    render(){
        return( 
<div>hello</div>
        )
    }
}