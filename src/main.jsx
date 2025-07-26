// main.jsx
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import Form from './sections/Form.jsx'
import EventDetails from './pages/EventDetails.jsx'
import { LoaderProvider } from './components/LoaderContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoaderProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/eventdetails/:id" element={<EventDetails />} />
          <Route path='/form' element={<Form />} />
        </Routes>
      </BrowserRouter>
    </LoaderProvider>
  </StrictMode>,
);
