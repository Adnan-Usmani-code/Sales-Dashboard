import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';
import PropTypes from 'prop-types';

const StatsCard = ({ title, value, icon, trend, trendValue, color }) => {
    const Icon = icon;
    return (
        <div className="glass-panel" style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{
                    padding: '0.75rem',
                    borderRadius: '12px',
                    background: `rgba(${color}, 0.1)`,
                    color: `rgb(${color})`
                }}>
                    <Icon size={24} />
                </div>
                {trend && (
                    <div style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.25rem',
                        fontSize: '0.875rem',
                        color: trend === 'up' ? 'var(--success)' : 'var(--danger)',
                        background: trend === 'up' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                        padding: '0.25rem 0.5rem',
                        borderRadius: '999px'
                    }}>
                        {trend === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                        <span>{trendValue}%</span>
                    </div>
                )}
            </div>

            <div>
                <h3 style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', marginBottom: '0.25rem' }}>
                    {title}
                </h3>
                <p style={{ fontSize: '1.75rem', fontWeight: '700', color: 'var(--text-primary)' }}>
                    {value}
                </p>
            </div>
        </div>
    );
};

export default StatsCard;

StatsCard.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    icon: PropTypes.elementType.isRequired,
    trend: PropTypes.oneOf(['up', 'down']),
    trendValue: PropTypes.number,
    color: PropTypes.string
};
