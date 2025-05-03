import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import StepperForm from './components/StepperForm';
import Summary from './pages/Summary';
import FanList from './pages/FanList';
import Layout from './components/Layout';

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/form" element={<StepperForm />} />
        <Route path="/resumo" element={<Summary />} />
        <Route path="/fans" element={<FanList />} />
      </Routes>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout>
        <AnimatedRoutes />
      </Layout>
    </BrowserRouter>
  );
}
