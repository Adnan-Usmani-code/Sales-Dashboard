import React, { useMemo } from 'react';
import { monthlyData } from '../../data/mockData';
import StatsCard from './StatsCard';
import RevenueChart from './RevenueChart';
import TopProducts from './TopProducts';
import YearlyChart from './YearlyChart';
import { DollarSign, Wallet, TrendingUp } from 'lucide-react';

const Dashboard = () => {
    const totals = useMemo(() => {
        return monthlyData.reduce((acc, curr) => ({
            revenue: acc.revenue + curr.revenue,
            income: acc.income + curr.income,
            profit: acc.profit + curr.profit
        }), { revenue: 0, income: 0, profit: 0 });
    }, []);

    return (
        <div className="dashboard-container">
            <header className="header">
                <h1>Business Performance Dashboard</h1>
                <p style={{ color: 'var(--text-secondary)' }}>Financial Performance Overview</p>
            </header>

            <div className="dashboard-content">
                {/* Stats Cards */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
                    gap: '1.5rem',
                    marginBottom: '2rem'
                }}>
                    <StatsCard
                        title="Total Revenue"
                        value={`$${totals.revenue.toLocaleString()}`}
                        icon={DollarSign}
                        trend="up"
                        trendValue={12.5}
                        color="59, 130, 246" // Blue
                    />
                    <StatsCard
                        title="Total Income"
                        value={`$${totals.income.toLocaleString()}`}
                        icon={Wallet}
                        trend="up"
                        trendValue={8.2}
                        color="139, 92, 246" // Purple
                    />
                    <StatsCard
                        title="Total Profit"
                        value={`$${totals.profit.toLocaleString()}`}
                        icon={TrendingUp}
                        trend="up"
                        trendValue={5.4}
                        color="16, 185, 129" // Green
                    />
                </div>

                {/* Charts & Top Products Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
                    gap: '1.5rem'
                }}>
                    <div style={{ flex: 2, minWidth: 'min(100%, 600px)' }}>
                        <RevenueChart />
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <YearlyChart />
                    </div>
                    <div style={{ flex: 1 }}>
                        <TopProducts />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
