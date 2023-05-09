import React,  { useState } from 'react'
import ReactDOM from 'react-dom/client'
import Left from './components/sideLeft';
import Right from './components/sideRight';
import './emprestimo.css'

import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';


function MyApp() {
    const [value, onChange] = useState(new Date());

    return (
        <div>
            <Calendar onChange={onChange} value={value} />
        </div>
    );
}

export default function Emprestimo() {
    return (
        <div className='Emprestimo'>
            <Left />
            <Right />
        </div>
    )
}