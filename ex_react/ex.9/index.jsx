import React from 'react'
import ReactDOM from 'react-dom'
import Family from './family'
import Member from './member'

ReactDOM.render(
    <Family lastName='Salazar'>
        <Member name='Plinio'  />
        <Member name='Joao'  />
        <Member name='Marcos'  />
    </Family>
    , document.getElementById('app'))