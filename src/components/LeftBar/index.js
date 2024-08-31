import { Component } from "react"
import {NavLink} from "react-router-dom"
import { AiOutlineMenu } from 'react-icons/ai'
import { BsChevronDown } from 'react-icons/bs'

import "./index.css"



class LeftBar extends Component {

    state = {isOpen:false }

    toggleDropdown = ()=> {
        this.setState((prevState)=> ({isOpen:!prevState.isOpen}))
    }


    closeDropDown =()=> {
        this.setState({isOpen:false})
    }

    render(){
        const {isOpen} = this.state
        return(
            <>
            
            <div className="left-bar">
                <ul  className="unorder-list">
               
               
                    <NavLink to ="/dashboard" className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")} >
                        <li >
                            Dashboard
                        </li>
                        </NavLink>

                    <NavLink to ="/inventory"  className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                        <li >
                        Inventory
                        </li>
                    </NavLink>

                    <NavLink to ="/order" className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                        <li>Order</li>
                    </NavLink>

                    <NavLink to ="/return" className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                        <li >Returns</li>
                    </NavLink>

                    <NavLink to ="/customer"className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                        <li >Customer</li>
                    </NavLink>

                    <NavLink to= "/shipping"className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                        <li  >Shipping</li>
                    </NavLink>

                    <NavLink to = "/channel"className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                        <li>Channel</li>
                    </NavLink >
                    
                    <NavLink to= "/integrations" className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                        <li>Intgrations</li>
                    </NavLink>

                    <NavLink to ="/calculators" className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                        <li >Calculators </li>
                        <BsChevronDown size  ={15} />
                    </NavLink>

                    <NavLink to = "/reports" className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                        <li >Reports</li>
                        <BsChevronDown size  ={15} />
                    </NavLink>

                    <NavLink to ="/account" className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                        <li >Account</li>
                        <BsChevronDown size  ={15} />
                    </NavLink>
                </ul>
            </div> 
            <div className="Navbar">
                
                <div className="dropDownTitle">
                    <button className="menu-option" onClick={this.toggleDropdown}> 
                        <AiOutlineMenu/>
                    </button>  
                    {isOpen && (
                        <div className="drop-down-menu">
                            <ul className="unorder-list">
                                <NavLink to ="/dashboard" onClick={this.closeDropDown} className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")} >
                                    <li>Dashboard</li>

                                </NavLink>

                                
                                <NavLink to ="/inventory" onClick={this.closeDropDown}  className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                                    <li >
                                    Inventory
                                    </li>
                                </NavLink>
                                <NavLink to ="/order" onClick={this.closeDropDown} className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                                    <li>Order</li>
                                </NavLink>

                                <NavLink to ="/return" onClick={this.closeDropDown} className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                                    <li >Returns</li>
                                </NavLink>

                                <NavLink to ="/customer" onClick={this.closeDropDown} className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                                    <li >Customer</li>
                                </NavLink>

                                <NavLink to= "/shipping"  onClick={this.closeDropDown} className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                                    <li  >Shipping</li>
                                </NavLink>

                                <NavLink to = "/channel" onClick={this.closeDropDown} className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                                    <li>Channel</li>
                                </NavLink >

                                <NavLink to= "/integrations" onClick={this.closeDropDown} className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                                    <li>Intgrations</li>
                                </NavLink>

                                <NavLink to ="/calculators" onClick={this.closeDropDown} className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                                    <li >Calculators</li>
                                    <BsChevronDown size  ={15} />
                                </NavLink>

                                <NavLink to = "/reports" onClick={this.closeDropDown} className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                                    <li >Reports</li>
                                    <BsChevronDown size  ={15} />
                                </NavLink>

                                <NavLink to ="/account" onClick={this.closeDropDown} className={({isActive})=> (isActive? "each-nav-hightlight link-line": "each-nav-unhighlited link-line")}>
                                    <li >Account</li>
                                    <BsChevronDown size  ={15} />
                                </NavLink>
                            </ul>
                            
                        </div>
                    )}
               
                </div>
            </div>
            </>
        )
    }
}




export default LeftBar