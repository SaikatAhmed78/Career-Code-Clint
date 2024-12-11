import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import {
  RouterProvider,
} from "react-router-dom";
import router from './Router/Router';
import AUthProvider from './Providers/AUthProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AUthProvider>
   <RouterProvider router={router} />
   </AUthProvider>
  </StrictMode>,
)
