import React from 'react';
import logo from '../pokemon.png';
import styled from '@emotion/styled';

const Navegador = styled.nav`
    background-color: red;
`;

const Header = () => {
    return (
        <Navegador className="navbar navbar-expand-lg navbar-dark">
            <div className="container-fluid">
                {/* <a className="navbar-brand" href=""> */}
                    <img src={ logo } alt="" width="100"/>
                {/* </a> */}
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="">Home</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-warning" type="button">Search</button>
                    </div>
                </div>
            </div>
        </Navegador>
    );
}
 
export default Header;