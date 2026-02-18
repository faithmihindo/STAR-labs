
import React from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

const data = [
  { name: '2021', innovation: 20, impact: 15 },
  { name: '2022', innovation: 45, impact: 32 },
  { name: '2023', innovation: 65, impact: 58 },
  { name: '2024', innovation: 85, impact: 75 },
  { name: '2026', innovation: 98, impact: 92 },
];

const MetricsDashboard: React.FC = () => {
  return (
    <div className="w-full h-[300px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorInno" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#94a3b8" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorImpact" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#475569" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#475569" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#1e293b" vertical={false} />
          <XAxis 
            dataKey="name" 
            stroke="#475569" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
          />
          <YAxis 
            stroke="#475569" 
            fontSize={12} 
            tickLine={false} 
            axisLine={false} 
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: '#0f172a', 
              border: '1px solid #334155',
              fontSize: '12px',
              color: '#f8fafc'
            }}
          />
          <Area 
            type="monotone" 
            dataKey="innovation" 
            stroke="#94a3b8" 
            fillOpacity={1} 
            fill="url(#colorInno)" 
          />
          <Area 
            type="monotone" 
            dataKey="impact" 
            stroke="#475569" 
            fillOpacity={1} 
            fill="url(#colorImpact)" 
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MetricsDashboard;
