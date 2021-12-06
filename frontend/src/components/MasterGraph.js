/*
Source d'inspiration: https://recharts.org/en-US/examples/
*/


import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


const MasterGraph = (props) => {

    const graph = props.graph;

    const data = [
        {
          name: 'Maitrise 7',
          Champions: graph[6],
        },
        {
          name: 'Maitrise 6',
          Champions: graph[5],
        },
        {
          name: 'Maitrise 5',
          Champions: graph[4],
        },
        {
          name: 'Maitrise 4',
          Champions: graph[3],
        },
        {
          name: 'Maitrise 3',
          Champions: graph[2],
        },
        {
          name: 'Maitrise 2',
          Champions: graph[1],
        },
        {
          name: 'Maitrise 1',
          Champions: graph[0],
        },
      ];

      const CustomTooltip = ({ active, payload, label }) => {
        if (active && payload && payload.length) {
          return (
            <div className="custom-tooltip">
              <p className="label">- {`${label}: ${payload[0].value}`} Champions -</p>
            </div>
          );
        }
      
        return null;
      };
     
      const testGraph= () => {
        var test = false;
         graph.map((element)=> {
  if(element!=0) test = true
         }) 
           
         
         return test;
      }


    if(testGraph())
    {
        return (
        
            <div className="graphMastery">
               <p> Nombre de Maitrises par champion </p>
                <ResponsiveContainer width="100%" aspect={3}>
                    
                    <BarChart
                    data={data}
                    margin={{
                        top: 5,
                        right: 60,
                        left: 60,
                        bottom: 5,
                    }}>
                        <XAxis dataKey="name" />
                        <Tooltip content={<CustomTooltip />} />
                        <Bar dataKey="Champions" fill="#e7e6b1e3" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
    );
    }
    else
    {
        return (
            <div></div>
        );
    }
    

}
export default MasterGraph;