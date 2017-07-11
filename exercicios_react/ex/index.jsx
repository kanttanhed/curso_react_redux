import React from 'react'
import ReactDOM from 'react-dom'
import Family from './Family'
import Member from './member'

ReactDOM.render(
    <Family>
        <Member name='Guilherme' lastName='silva'/>
    </Family>
, document.getElementById('app'))