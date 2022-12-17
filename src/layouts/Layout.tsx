import React, { FC } from 'react';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import { RoutesEnum } from '../const/routes';
import { Film } from '../components/Film/Film';
import Serial from '../components/Serial/Serial';
import Cartoons from '../components/Cartoons/Cartoons';
import Films from '../components/Films/Films';


type ChildrenProp = {
  children: React.ReactNode;
};

export const Layout: FC<ChildrenProp> = ( { children }, { filmItem }) => {
    return <> 
      <Header />
      <Routes>
            <Route 
                path={`${RoutesEnum.Home}`}
                element={ children }
            />
            <Route 
                path={`${RoutesEnum.Films}`}
                element={<Films /> }
            />
            <Route
              path={`${RoutesEnum.Films}/:id`}
              element={<Film />}
            />
            <Route 
                path={`${RoutesEnum.Serials}`}
                element={<Serial /> }
            />
             {/* <Route
              path={`${RoutesEnum.Serials}/:id`}
              element={<}
            /> */}
            <Route 
                path={`${RoutesEnum.Cartoons}`}
                element={<Cartoons /> }
            />
      </Routes>
      <Footer />
    </>
}

export default Layout;