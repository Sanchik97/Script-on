import React from 'react'
import Navigate from '../../components/Navbar/Navbar'


export default class Layout extends React.Component{
    render(){
        return(
            <main>
                <Navigate/>
                {this.props.children}
            </main>
        )
    }
}
