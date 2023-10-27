import React from 'react';
import ASide from './Asidebar';

export default function AdminDashboard({children}){
    return (
        <div>
        <ASide/>
        {children}
            
        </div>
    );
}


