import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </StrictMode>,
)

// Wrapping the App component with ChakraProvider allows us to use Chakra UI components and theming throughout the application. The BrowserRouter component enables routing capabilities, allowing us to navigate between different pages or components within the app. The StrictMode component is a tool for highlighting potential problems in an application, this helps us write better React code, and diagose and solve issues faster.