// App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import TransactionHistory from './pages/TransactionHistory';
import Rules from './pages/Rules';
import Contact from './pages/Contact';
import AddTransaction from './pages/AddTransaction';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-950 text-white">
        <Header />
        <main className="flex-grow px-6 py-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<TransactionHistory />} />
            <Route path="/rules" element={<Rules />} />
            <Route path="/add-transaction" element={<AddTransaction />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
