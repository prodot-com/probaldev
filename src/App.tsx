import Home from "./App/Page"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Toaster } from "./Components/magicui/sonner";
import { Analytics } from '@vercel/analytics/react';

const App = () => {
  return (
<div className="min-h-screen w-full bg-white dark:bg-black relative scroll-smooth">
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/works" element={<Home/>}/>
  </Routes>
  <SpeedInsights/>
  <Toaster/>
  </BrowserRouter>
  <Analytics/>
</div>
  )
}

export default App
