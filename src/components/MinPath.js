import React from 'react'

function MinPath(props) {
    const {src,dest,setTime}=props;
    const graph = {
        A: { B: 5, C: 7 },
        B: { A: 5, D: 15, E: 20 },
        C: { A: 7 ,D: 5, E: 35 },
        D: { B:15 ,F:20,C:5},
        E: { C: 35, B: 20, F: 10 },
        F: { E: 10, D: 20 },
      };
      
      
      const formatGraph = (g) => {
        const tmp = {};
        Object.keys(g).forEach((k) => {
          const obj = g[k];
          const arr = [];
          Object.keys(obj).forEach((v) => arr.push({ vertex: v, cost: obj[v] }));
          tmp[k] = arr;
        });
        return tmp;
      };
      
      const dijkstra = (graph, start, end) => {
        var map = formatGraph(graph);
      
        var visited = [];
        var unvisited = [start];
        var shortestDistances = { [start]: { vertex: start, cost: 0 } };
      
        var vertex;
        while ((vertex = unvisited.shift())) {
          // Explore unvisited neighbors
          var neighbors = map[vertex].filter((n) => !visited.includes(n.vertex));
      
          // Add neighbors to the unvisited list
          unvisited.push(...neighbors.map((n) => n.vertex));
      
          var costToVertex = shortestDistances[vertex].cost;
      
          for (let { vertex: to, cost } of neighbors) {
            var currCostToNeighbor =
              shortestDistances[to] && shortestDistances[to].cost;
            var newCostToNeighbor = costToVertex + cost;
            if (
              currCostToNeighbor === undefined ||
              newCostToNeighbor < currCostToNeighbor
            ) {
              // Update the table
              shortestDistances[to] = { vertex, cost: newCostToNeighbor };
            }
          }
      
          visited.push(vertex);
        }
        // console.log(
        //   shortestDistances[end].cost
        // );
       return shortestDistances[end].cost;
       
      };
      const ans=dijkstra(graph,src,dest);
      console.log(ans);
      setTime(ans);
  return (
    <div>
    </div>
  )
}

export default MinPath
