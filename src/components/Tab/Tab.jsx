import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
import './Tab.scss'
class Tab extends Component {
    render() {
        let TabList=[{name:"首页",path:'/index'},{name:"我的",path:"/main"}]
        let Tab=TabList.map((item,index)=>{
            return(
                <NavLink className="tab" to={item.path} key={index}>
                    <span className='tabs'>{item.name}</span>
                </NavLink>
            )
        })
        return (
            <nav className='tabWarp'>
                {Tab}
            </nav>
        );
    }
}

export default Tab;