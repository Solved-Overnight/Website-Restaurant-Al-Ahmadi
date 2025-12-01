import React from 'react';
import { BarChart, Bar, XAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import Section from './ui/Section';
import { useLanguage } from '../contexts/LanguageContext';
import { Reveal } from './ui/Reveal';

const data = [
  { time: '12 PM', visitors: 40 },
  { time: '2 PM', visitors: 65 },
  { time: '4 PM', visitors: 30 },
  { time: '6 PM', visitors: 85 },
  { time: '8 PM', visitors: 100 },
  { time: '10 PM', visitors: 70 },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-kuwait-dark text-white p-2 rounded shadow-lg text-xs">
        <p>{`${payload[0].value}% Busy`}</p>
      </div>
    );
  }
  return null;
};

const PopularTimes: React.FC = () => {
  const { t, dir } = useLanguage();

  return (
    <Section id="popular-times" bg="dark" className="border-t border-b border-kuwait-gold/20">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12" dir={dir}>
        <div className="md:w-1/3">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-serif text-kuwait-goldLight mb-4">
              {t('planVisit')}
            </h2>
            <p className="text-gray-400 mb-6">
              {t('busyDesc')}
            </p>
            <div className="text-sm text-gray-500 italic">
              *Based on historical visitor data
            </div>
          </Reveal>
        </div>

        <div className="w-full md:w-2/3 h-64" dir="ltr">
          <Reveal delay={200} className="h-full w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <XAxis 
                  dataKey="time" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#9CA3AF', fontSize: 12 }} 
                  dy={10}
                />
                <Tooltip cursor={{fill: 'transparent'}} content={<CustomTooltip />} />
                <Bar dataKey="visitors" radius={[4, 4, 0, 0]} animationDuration={2000}>
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.visitors > 80 ? '#C5A059' : '#1A3C34'} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </Reveal>
        </div>
      </div>
    </Section>
  );
};

export default PopularTimes;