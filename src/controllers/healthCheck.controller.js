import { ApiResponse } from '../utils/ApiResponse.js';


const formatUptime = (seconds) => {
  const d = Math.floor(seconds / (3600 * 24));
  const h = Math.floor((seconds % (3600 * 24)) / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);

  return `${d}d ${h}h ${m}m ${s}s`;
};

const healthCheck = (req, res) => {
  const data = {
    uptime: formatUptime(process.uptime()),
    timestamp: new Date().toISOString(),
    message: 'Server is healthy and running smoothly.',
  };

  const response = ApiResponse.success('Health check successful', data);
  res.status(response.statusCode).json(response);
};

export { healthCheck };
