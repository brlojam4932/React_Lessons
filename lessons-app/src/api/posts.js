import axios from "axios";

export default axios.create({
  baseUrl: 'httpP://localhost:3500'
});

// npx json-server -p 3500 -w data/db2.json