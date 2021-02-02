import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import styled from 'styled-components'
import Business from './Business';
import Entertainment from './Entertainment';
import Health from './Health';
import Home from './Home';

class Main extends Component {
    render() {
        return (
            <div>
                <Nav>
                    <ul>
                        <li><Link to="/Home">Home</Link></li>
                        <li><Link to="/busi">Business</Link></li>
                        <li><Link to="/enter">Entertainment</Link></li>
                        <li><Link to="/heal">Health</Link></li>
                    </ul>
                </Nav>

                <Route path="/Home" component={Home} />
                <Route path="/busi" component={Business} />
                <Route path="/enter" component={Entertainment} />
                <Route path="/heal" component={Health} />
            </div>
        );
    }
}

export default Main;

const Nav = styled.nav`
    ul{
        display:flex;
        li{
            margin: 25px 100px 25px 0;
            font-size: 20px;
            list-style: none;
            a{
                padding: 7px 20px;
                text-decoration: none;
                &:hover{
                    background: #e3e3e3;
                    border-radius: 10px;
                }
            }
        }
    }
`