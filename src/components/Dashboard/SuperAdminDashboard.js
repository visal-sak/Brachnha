import React from 'react';
import ASide from './Asidebar';


export default function SuperAdminDashboard({children}){
    return (
        <div>
        <ASide/>
        {children} 
        </div>
    );
}


