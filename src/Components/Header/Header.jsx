import React, { Fragment, useEffect, useState } from 'react'
import Logout from '../Logout/Logout';
import { HeaderContainer, Logado, LogoSistema, Profile, Toogle, Username } from './Styles';
import { getUsername } from '../../Config/Token';

const Header = () => {
    
    const [userName, setUserName] = useState("");

    const getUsuario=()=>{
        setUserName(getUsername());
    }

    useEffect(()=>{
      getUsuario()
    },[userName]);

    return (
       <Fragment>       
           <HeaderContainer>
                 <LogoSistema></LogoSistema>  
                 <Toogle></Toogle>  
                 <Profile>
                     <Logado>Nome:</Logado>
                     <Username>{ userName }</Username>
                     <Logout/>
                 </Profile>
           </HeaderContainer>
       </Fragment> 
    )
}

export default Header;