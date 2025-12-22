import Home from "./App/Home"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Toaster } from "./Components/magicui/sonner";
import { Analytics } from '@vercel/analytics/react';
import Pagenotfound from "./App/Pagenotfound";

const App = () => {
  return (
<div className="min-h-screen w-full bg-white dark:bg-black relative scroll-smooth">
  <BrowserRouter>
  <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="*" element={<Pagenotfound/>}/>
  </Routes>
  <SpeedInsights/>
  <Toaster/>
  </BrowserRouter>
  <Analytics/>
</div>
  )
}

export default App
