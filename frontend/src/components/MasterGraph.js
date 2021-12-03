import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Graph from './Graph';

const data = [
  {
    name: 'Maitrise 7',
    Champions: 4000,
  },
  {
    name: 'Maitrise 6',
    Champions: 3000,
  },
  {
    name: 'Maitrise 5',
    Champions: 2000,
  },
  {
    name: 'Maitrise 4',
    Champions: 2780,
  },
  {
    name: 'Maitrise 3',
    Champions: 1890,
  },
  {
    name: 'Maitrise 2',
    Champions: 2390,
  },
  {
    name: 'Maitrise 1',
    Champions: 3490,
  },
];

function MasterGraph() {

    return (
            <div className="graphMastery">
                <ResponsiveContainer width="100%" aspect={3}>
                    <BarChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}>
                        <Tooltip dataKey="name" />
                        <Bar dataKey="Champions" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
    );
}
export default MasterGraph;