import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App.js';
import '@/index.css'
import {RouterProvider} from "react-router-dom";
import routes from "@/routes"
import '@/theme.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <RouterProvider router={routes} />
);
