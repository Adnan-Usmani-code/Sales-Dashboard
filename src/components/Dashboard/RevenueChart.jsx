import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { monthlyData } from '../../data/mockData';

const RevenueChart = () => {
    return (
        <div className="glass-panel" style={{ padding: '1.5rem', height: '400px' }}>
            <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem' }}>Revenue Analytics</h2>
            <div style={{ width: '100%', height: 'calc(100% - 3rem)' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <AreaChart
                        data={monthlyData}
                        margin={{
                            top: 10,
                            right: 10,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <defs>
                            <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--accent-primary)" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="var(--accent-primary)" stopOpacity={0} />
                            </linearGradient>
                            <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="5%" stopColor="var(--accent-secondary)" stopOpacity={0.3} />
                                <stop offset="95%" stopColor="var(--accent-secondary)" stopOpacity={0} />
                            </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis
                            dataKey="month"
                            stroke="var(--text-secondary)"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12 }}
                        />
                        <YAxis
                            stroke="var(--text-secondary)"
                            axisLine={false}
                            tickLine={false}
                            tick={{ fontSize: 12 }}
                            tickFormatter={(value) => `$${value}`}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'var(--bg-card)',
                                borderColor: 'var(--glass-border)',
                                color: 'var(--text-primary)',
                                borderRadius: '8px',
                                backdropFilter: 'blur(10px)'
                            }}
                            itemStyle={{ color: 'var(--text-primary)' }}
                        />
                        <Area
                            type="monotone"
                            dataKey="revenue"
                            stroke="var(--accent-primary)"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorRevenue)"
                            name="Revenue"
                        />
                        <Area
                            type="monotone"
                            dataKey="profit"
                            stroke="var(--accent-secondary)"
                            strokeWidth={3}
                            fillOpacity={1}
                            fill="url(#colorProfit)"
                            name="Profit"
                        />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default RevenueChart;
