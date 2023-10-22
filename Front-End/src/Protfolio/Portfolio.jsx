import { useState,useEffect } from "react";
import Table from "./Table";

const Portfolio = () => {
  const [boughtStocks, setBoughtStocks] = useState([
    {
      id: 1,
      name: 'Apple Inc.',
      stockSymbol: 'AAPL',
      price: 150.0,
      date: '2023-10-15',
      profitLoss: 10.0,
    },
    {
      id: 2,
      name: 'Amazon.com Inc.',
      stockSymbol: 'AMZN',
      price: 3300.0,
      date: '2023-10-20',
      profitLoss: -200.0,
    },
    // Add more bought stock entries as needed
  ]);

  const [soldStocks, setSoldStocks] = useState([
    {
      id: 1,
      name: 'Apple Inc.',
      stockSymbol: 'AAPL',
      price: 155.0,
      date: '2023-10-18',
      profitLoss: 5.0,
    },
    {
      id: 2,
      name: 'Amazon.com Inc.',
      stockSymbol: 'AMZN',
      price: 3350.0,
      date: '2023-10-21',
      profitLoss: 50.0,
    },
    // Add more sold stock entries as needed
  ]);

  useEffect(() => {
    // Fetch data from your Spring Boot backend for bought and sold stocks
    // Example: fetch('/api/buy/get').then((response) => response.json()).then((data) => setBoughtStocks(data));
    // Similar fetch for sold stocks
  }, []);

  return (
    <div className=" h-screen bg-neutral-200 p-4">
      <h1 className="text-4xl mb-4">Portfolio</h1>
      <div className="flex">
        <div className="w-1/2 pr-2">
          <h2 className="text-2xl mb-2">Bought Stocks</h2>
          <Table data={boughtStocks} />
        </div>
        <div className="w-1/2 pl-2">
          <h2 className="text-2xl mb-2">Sold Stocks</h2>
          <Table data={soldStocks} />
        </div>
      </div>
      <div className="text-2xl mt-4">
        Total Earnings: {/* Calculate and display the total earnings here */}
      </div>
    </div>
  )
}

export default Portfolio
