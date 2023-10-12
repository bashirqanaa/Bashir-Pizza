import React from 'react';
import { MenuList } from "../helpers/menu"
import MenuItem from '../components/MenuItem'
import "../styles/Menu.css"

function Menu() {
    return (
        <div className='menu'>
            <div className='menuTitle'>
                <h1> Bashir's Pizza</h1>
            </div>
            <div className='menuList'>
                {MenuList.map((menuItem, key) => {
                    return <MenuItem image={menuItem.image} name={menuItem.name} price={menuItem.price}></MenuItem>
                })}
            </div>

        </div>
    );
}

export default Menu;
