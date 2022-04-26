import React, { Fragment, useState } from 'react';
import Content from '../Content/Content';
import Header from '../Header/Header';
import SideBar from '../SideBar/SideBar';


const Layout  = ({ children }) => {

   const [showMenu, setShowMenu] = useState(true);
   
   const setChangeStateMenu = (show) => {
      setShowMenu(show);
   }


    return (
      <Fragment>
        <header>
          <Header  changeStateMenu={setChangeStateMenu}/>
        </header> 
        <aside>
           <SideBar showMenu={showMenu}/> 
        </aside> 
        <main>
            <Content>
               { children }
            </Content>
        </main>
      </Fragment>
    )
}

export default Layout;