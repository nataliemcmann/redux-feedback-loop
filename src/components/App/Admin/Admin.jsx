import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

//import component
import FeedbackTable from './FeedbackTable';

function Admin () {

    return (
        <>
        <table>
        <FeedbackTable />
        </table>
        </>
    )
}

export default Admin;