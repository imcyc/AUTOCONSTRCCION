import React from 'react';
import { Link } from 'react-router-dom';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

import './SideMenu.css';

const SideMenu = () => {
    return (
        <div>
        <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i class="lni-arrow-right-circle" style={{ fontSize: '1.75em' }}></i>
            </NavIcon>
            <NavText>
                <Link to="/introduccion">INTRODUCCIÓN</Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <i class="lni-home" style={{ fontSize: '1.75em' }}></i>
            </NavIcon>
            <NavText>
                TUTORIAL
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <i class="lni-microscope" style={{ fontSize: '1.75em' }}></i>
            </NavIcon>
            <NavText>
                PROCESO INTEGRAL
            </NavText>
        </NavItem>
        <hr/>
        <NavItem eventKey="home">
            <NavIcon>
                <i class="lni-write" style={{ fontSize: '1.75em' }}></i>
            </NavIcon>
            <NavText>
                PROCEDIMIENTOS
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <i class="lni-microsoft" style={{ fontSize: '1.75em' }}></i>
            </NavIcon>
            <NavText>
                CÁPSULAS
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <i class="lni-bulb" style={{ fontSize: '1.75em' }}></i>
            </NavIcon>
            <NavText>
                INSTALACIONES Y ACABADOS
            </NavText>
        </NavItem>
        <hr/>
        <NavItem eventKey="home">
            <NavIcon>
                <i class="lni-paperclip" style={{ fontSize: '1.75em' }}></i>
            </NavIcon>
            <NavText>
                EXAMEN DE CERTIFICACIÓN
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <i class="lni-calculator" style={{ fontSize: '1.75em' }}></i>
            </NavIcon>
            <NavText>
                CALCULADORA DE CONCRETO
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <i class="lni-agenda" style={{ fontSize: '1.75em' }}></i>
            </NavIcon>
            <NavText>
                MORTERO DOSIFICACIÓN
            </NavText>
        </NavItem>
        <NavItem eventKey="home">
            <NavIcon>
                <i class="lni-list" style={{ fontSize: '1.75em' }}></i>
            </NavIcon>
            <NavText>
                GLOSARIO
            </NavText>
        </NavItem>
    </SideNav.Nav>
</SideNav>
        </div>
    )
    
}

export default SideMenu;