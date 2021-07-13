import React from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from '../../globalStyle';

import Nav, {
    NavLinks,
    MobileIcon, NavbarContainer, NavIcon, NavItem, NavLogo, NavMenu, NavItemBtn, NavBtnLink
} from './Navbar.element';

export default function Navbar() {
    const [click, setClick] = React.useState(false);
    const [button, setButton] = React.useState(true);

    React.useEffect(() => {
       showButton();
    }, []);

    const showButton = () => { 
         if (window.innerWidth <= 960) setButton(false)
        else setButton(true);
    }

    window.addEventListener('resize', showButton);

    return (
        <>
            <IconContext.Provider value={{ color: '#fff' }}>
                <Nav>
                    <NavbarContainer>
                        <NavLogo to="/" onClick={() => setClick(!click)} click={click}>
                            <NavIcon />
                            ULTRA
                        </NavLogo>

                        <MobileIcon onClick={() => setClick(!click)}>
                            {click ? <FaTimes /> : <FaBars />}
                        </MobileIcon>

                        <NavMenu onClick={() => setClick(!click)} click={click}>
                            <NavItem>
                                <NavLinks to="/">Home</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/service">Service</NavLinks>
                            </NavItem>
                            <NavItem>
                                <NavLinks to="/products">Products</NavLinks>
                            </NavItem>

                            <NavItemBtn>
                                {
                                    button ? (
                                        <NavBtnLink to="/sign-up">
                                            <Button primary>SIGN UP</Button>
                                        </NavBtnLink>
                                    ) : (
                                        <NavBtnLink to="/sign-up">
                                            <Button primary fontBig>SIGN UP</Button>
                                        </NavBtnLink>
                                    )
                                }
                            </NavItemBtn>
                        </NavMenu>
                    </NavbarContainer>
                </Nav>
            </IconContext.Provider>
        </>
    )
}
