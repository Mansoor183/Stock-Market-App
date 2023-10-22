import React, { useContext, useEffect, useState } from 'react'
import Header from './Header'
import Details from './Details'
import Overview from './Overview'
import Charts from './Charts'
import StockContext from '../context/StockContext'
import { fetchQuote, fetchStockDetails } from '../api/StockApi'


const Dashboard = () => {

    const {stockSymbol} = useContext(StockContext)

    const [stockDetails, setStockDetails] = useState({})
    const [quote,setQuote] = useState({})
    const [currentView, setCurrentView] = useState('dashboard');


    useEffect(() => {
        const updateStockDetails = async () =>{
            try {
                const result = await fetchStockDetails(stockSymbol)
                setStockDetails(result)
            }
            catch(error){
                setStockDetails({})
                console.log(error)
            }
        }
        const updateStockOverview = async () => {
            try{
                const result = await fetchQuote(stockSymbol);
                setQuote(result)
            }
            catch(error){
                setQuote({})
                console.log(error)
            }
        }

        updateStockDetails();
        updateStockOverview();

    },[stockSymbol]);
    

    const toggleView = () => {
        setCurrentView(currentView === 'dashboard' ? 'portfolio' : 'dashboard');
    };


  return (
    <div className='h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 font-quicksand bg-neutral-200'>
        <div className='md:col-span-2 row-span-4'>
            <Charts />
        </div>
        <div>
            <Overview 
                symbol={stockSymbol} 
                price={quote.pc} 
                change={quote.d} 
                changePercent={quote.dp} 
                currency={stockDetails.currency} 
            />
        </div>
        <div className='row-span-2 xl:row-span-3 '>
            <Details details={stockDetails}/>
        </div>
    </div>
  )
}

export default Dashboard
