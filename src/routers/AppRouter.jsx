import React from 'react'
import { Routes, Route, BrowserRouter } from "react-router-dom";
import LoginScreen from '../components/login/LoginScreen';
import DashboardRoutes from './DashboardRoutes';
import PrivateRoutes from './PrivateRoutes';
import PublicRoute from './PublicRoute';


const AppRouter = () => 
{
  return (
    <BrowserRouter>
        <Routes>

            <Route path="login" element={
              <PublicRoute>
                <LoginScreen/>
              </PublicRoute>
            }
            />

            {/* <Route path="login" element={<LoginScreen />}/> */}

            <Route path="/*" element=
              {
                <PrivateRoutes>
                  <DashboardRoutes/>
                </PrivateRoutes>
              } 
            />
            {/* <Route path="/*" element={<DashboardRoutes/>}/> */}
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter