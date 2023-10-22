import { useState } from 'react'
import Dashboard from './components/Dashboard'
import StockContext from './context/StockContext';
import Portfolio from './Protfolio/Portfolio';
import Header from './components/Header';

function App() {

  const [stockSymbol, setStockSymbol] = useState();
  const [currentView, setCurrentView] = useState('dashboard');

  const toggleView = () => {
    setCurrentView(currentView === 'dashboard' ? 'portfolio' : 'dashboard');
  }

  return (
    <div>
      <StockContext.Provider value={{stockSymbol,setStockSymbol}}>
        <Header currentView={currentView} toggleView={toggleView}/>
        {currentView === 'dashboard' ? <Dashboard /> : <Portfolio />}
    </StockContext.Provider>
    </div>
  )
}

export default App
