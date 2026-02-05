import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { yearlyData } from '../../data/mockData';

const YearlyChart = () => {
    return (
        <div className="glass-panel" style={{ padding: '1.5rem', height: '400px' }}>
            <h2 style={{ fontSize: '1rem', fontWeight: '600', marginBottom: '1rem' }}>Yearly Overview</h2>
            <div style={{ width: '100%', height: 'calc(100% - 2rem)' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        data={yearlyData}
                        margin={{
                            top: 5,
                            right: 10,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
                        <XAxis
                            dataKey="year"
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
                            tickFormatter={(value) => `$${value / 1000}k`}
                        />
                        <Tooltip
                            contentStyle={{
                                backgroundColor: 'var(--bg-card)',
                                borderColor: 'var(--glass-border)',
                                color: 'var(--text-primary)',
                                borderRadius: '8px',
                                backdropFilter: 'blur(10px)'
                            }}
                            cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                        />
                        <Legend wrapperStyle={{ paddingTop: '10px' }} />
                        <Bar dataKey="revenue" name="Revenue" fill="var(--accent-primary)" radius={[4, 4, 0, 0]} />
                        <Bar dataKey="profit" name="Profit" fill="var(--accent-secondary)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default YearlyChart;
