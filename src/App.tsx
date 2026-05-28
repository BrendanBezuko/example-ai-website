import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { MainLayout } from './layouts/MainLayout'
import { HomePage } from './pages/HomePage'
import { AboutPage } from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { TutorialsPage } from './pages/TutorialsPage'
import { FaqPage } from './pages/FaqPage'
import { PoliciesPage } from './pages/PoliciesPage'
import { ServicePage } from './pages/ServicePage'
import { PricingPage } from './pages/PricingPage'
import { NotFoundPage } from './pages/NotFoundPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="tutorials" element={<TutorialsPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="policies" element={<PoliciesPage />} />
          <Route path="services/:slug" element={<ServicePage />} />
          <Route path="pricing/:slug" element={<PricingPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
