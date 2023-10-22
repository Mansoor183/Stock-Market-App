import React from 'react'

const Table = ({data}) => {
  return (
    <table className="bg-white border-neutral-200 w-full mb-4">
    {/* Table headers */}
    <thead>
      <tr>
        <th>Name</th>
        <th>Stock Symbol</th>
        <th>Price</th>
        <th>Date</th>
        <th>Profit/Loss</th>
      </tr>
    </thead>
    {/* Table data */}
    <tbody>
      {data.map((entry) => (
        <tr key={entry.id}>
          <td>{entry.name}</td>
          <td>
            <a href={`/stock/${entry.stockSymbol}`} className="text-blue-600">
              {entry.stockSymbol}
            </a>
          </td>
          <td>{entry.price}</td>
          <td>{entry.date}</td>
          <td>{entry.profitLoss}</td>
        </tr>
      ))}
    </tbody>
  </table>
  )
}

export default Table
