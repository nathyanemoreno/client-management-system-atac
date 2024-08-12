import { Client } from "~/types/models/client";

// Function to calculate the Euclidean distance between two points
function calculateDistance(
  point1: [number, number],
  point2: [number, number]
): number {
  const dx = point1[0] - point2[0];
  const dy = point1[1] - point2[1];
  return Math.sqrt(dx * dx + dy * dy);
}

// Function to create a distance matrix
function createDistanceMatrix(points: [number, number][]): number[][] {
  const n = points.length;
  const distances: number[][] = Array.from({ length: n }, () =>
    Array(n).fill(0)
  );

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        distances[i][j] = calculateDistance(points[i], points[j]);
      }
    }
  }

  return distances;
}

// Nearest Neighbor algorithm to find the TSP route
async function nearestNeighbor(distances: number[][]): Promise<number[]> {
  const n = distances.length;
  const visited = Array(n).fill(false);
  const route = [0]; // Start from the company at index 0
  visited[0] = true;

  for (let _ = 1; _ < n; _++) {
    const lastPoint = route[route.length - 1];
    let nextPoint = -1;
    let minDistance = Infinity;

    for (let i = 0; i < n; i++) {
      if (!visited[i] && distances[lastPoint][i] < minDistance) {
        nextPoint = i;
        minDistance = distances[lastPoint][i];
      }
    }

    if (nextPoint !== -1) {
      route.push(nextPoint);
      visited[nextPoint] = true;
    }
  }

  route.push(0); // Return to the starting point
  return route;
}

export type Route = {
  clientIds: number[];
  routeIndices: number[][];
};

export async function calculateRoute(clients: Client[]): Promise<Client[]> {
  // Extract coordinates and create distance matrix
  const points = clients.map((client) => [
    client.coordinate_x,
    client.coordinate_y,
  ]) as [number, number][];
  const distances = createDistanceMatrix(points);

  // Calculate route indices
  const routeIndices = await nearestNeighbor(distances);

  // Map route indices to client objects
  const route = routeIndices.map((i) => clients[i]);

  return route;
}
