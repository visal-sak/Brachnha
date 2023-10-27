import React from 'react';
import ASide from './Asidebar';

export default function EditorDashboard({children}){
    return (
        <div>
        <ASide/>
        {children}
            
        </div>
    );
}


