
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export interface MonthlySales {
  month: string;
  monthlyIncome: number;
}

interface MonthlySalesChartProps {
  monthlyReport: MonthlySales[];
}

const MonthlySalesChart: React.FC<MonthlySalesChartProps> = ({ monthlyReport }) => {

  return (
    <div>
      <ResponsiveContainer height={450}>
        <BarChart data={monthlyReport} margin={{ top: 50, right: 30, left: 5, bottom: 0 }}>
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="month" />
          <YAxis ticks={[0, 10000, 20000, 40000]} />
          <Tooltip cursor={{ fill: 'transparent' }} />
          <Legend />
          <Bar dataKey="monthlyIncome" fill="#000000" barSize={50} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default MonthlySalesChart;
