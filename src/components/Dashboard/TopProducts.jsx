import React from 'react';
import { Package, TrendingUp, TrendingDown } from 'lucide-react';
// PropTypes removed
import { topProducts } from '../../data/mockData';

const TopProducts = () => {
    return (
        <div className="glass-panel" style={{ padding: '1.5rem', height: '100%' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem' }}>
                <div style={{
                    padding: '0.5rem',
                    borderRadius: '8px',
                    background: 'rgba(59, 130, 246, 0.1)',
                    color: 'var(--accent-primary)'
                }}>
                    <Package size={20} />
                </div>
                <h2 style={{ fontSize: '1.125rem', fontWeight: '600' }}>Top Selling Products</h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {topProducts.map((product, index) => (
                    <div key={product.id} style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '0.75rem',
                        borderRadius: '12px',
                        background: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.05)'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{
                                width: '24px',
                                height: '24px',
                                borderRadius: '50%',
                                background: index === 0 ? 'var(--accent-primary)' : 'var(--bg-card)',
                                border: index === 0 ? 'none' : '1px solid var(--text-secondary)',
                                color: index === 0 ? '#fff' : 'var(--text-secondary)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.75rem',
                                fontWeight: '700'
                            }}>
                                {index + 1}
                            </div>

                            <div>
                                <h4 style={{ fontSize: '0.875rem', fontWeight: '600' }}>{product.name}</h4>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                                    {product.sales.toLocaleString()} Sales
                                </p>
                            </div>
                        </div>

                        <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.25rem',
                            fontSize: '0.75rem',
                            color: product.growth >= 0 ? 'var(--success)' : 'var(--danger)'
                        }}>
                            {product.growth >= 0 ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                            <span>{Math.abs(product.growth)}%</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopProducts;
