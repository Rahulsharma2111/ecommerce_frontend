import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, PieChart, Pie, Cell } from 'recharts';
import './DashboardStyle.css';

const AnalyticsDashboard = () => {
  // Sample data - replace with actual API calls
  const [dashboardData, setDashboardData] = useState({
    salesToday: 0,
    profitToday: 0,
    topProducts: [],
    salesTrend: [],
    inventoryStatus: []
  });

  const [timeRange, setTimeRange] = useState('today');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch
    const fetchData = () => {
      setIsLoading(true);
      
      // Mock data - replace with actual API call
      setTimeout(() => {
        setDashboardData({
          salesToday: 124,
          profitToday: 284,
          topProducts: [
            { id: 1, name: 'Wireless Earbuds', sales: 42, revenue: 420 },
            { id: 2, name: 'Smart Watch', sales: 38, revenue: 760 },
            { id: 3, name: 'Bluetooth Speaker', sales: 25, revenue: 200 }
          ],
          salesTrend: [
            { day: 'Mon', sales: 15 },
            { day: 'Tue', sales: 10 },
            { day: 'Wed', sales: 5 },
            { day: 'Thu', sales: 7 },
            { day: 'Fri', sales: 8 },
            { day: 'Sat', sales: 10 },
            { day: 'Sun', sales: 9 }
          ],
          inventoryStatus: [
            { name: 'In Stock', value: 20 },
            { name: 'Low Stock', value: 15 },
            { name: 'Out of Stock', value: 10 }
          ]
        });
        setIsLoading(false);
      }, 1000);
    };

    fetchData();
  }, [timeRange]);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="analytics-dashboard">
      <h2>Analytics Dashboard</h2>
      
      <div className="time-filter">
        <button 
          className={timeRange === 'today' ? 'active' : ''}
          onClick={() => setTimeRange('today')}
        >
          Today
        </button>
        <button 
          className={timeRange === 'week' ? 'active' : ''}
          onClick={() => setTimeRange('week')}
        >
          This Week
        </button>
        <button 
          className={timeRange === 'month' ? 'active' : ''}
          onClick={() => setTimeRange('month')}
        >
          This Month
        </button>
      </div>

      {isLoading ? (
        <div className="loading">Loading data...</div>
      ) : (
        <>
          <div className="summary-cards">
            <div className="card">
              <h3>Today's Sales</h3>
              <p className="value">${dashboardData.salesToday.toLocaleString()}</p>
              <p className="compare">↑ 12% from yesterday</p>
            </div>
            
            <div className="card">
              <h3>Profit/Loss</h3>
              <p className={`value ${dashboardData.profitToday >= 0 ? 'positive' : 'negative'}`}>
                {dashboardData.profitToday >= 0 ? '+' : ''}${Math.abs(dashboardData.profitToday).toLocaleString()}
              </p>
              <p className="compare">↑ 8% from yesterday</p>
            </div>
            
            <div className="card">
              <h3>Orders</h3>
              <p className="value">{dashboardData.topProducts.reduce((sum, product) => sum + product.sales, 0)}</p>
              <p className="compare">↑ 5% from yesterday</p>
            </div>
          </div>

          <div className="charts-row">
            <div className="chart-container">
              <h3>Sales Trend</h3>
              <BarChart width={500} height={300} data={dashboardData.salesTrend}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="day" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="sales" fill="#8884d8" name="Sales ($)" />
              </BarChart>
            </div>
            
            <div className="chart-container">
              <h3>Inventory Status</h3>
              <PieChart width={400} height={300}>
                <Pie
                  data={dashboardData.inventoryStatus}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                  nameKey="name"
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                >
                  {dashboardData.inventoryStatus.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </div>
          </div>

          <div className="top-products">
            <h3>Top Selling Products</h3>
            <table>
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Units Sold</th>
                  <th>Revenue</th>
                </tr>
              </thead>
              <tbody>
                {dashboardData.topProducts.map(product => (
                  <tr key={product.id}>
                    <td>{product.name}</td>
                    <td>{product.sales}</td>
                    <td>${product.revenue.toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default AnalyticsDashboard;