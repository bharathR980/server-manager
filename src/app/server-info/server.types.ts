export interface Server {
  id: number;
  title: string;
  description: string;
  status: string;
  health: string;
  ipAddress: string;
  location: string;
  owner: string;
  cpuUsage: string;
  memoryUsage: string;
  storageUsage: string;
  os: string;
  updatedAt: string;
}
