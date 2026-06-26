import { fileURLToPath } from "url";
import { dirname, join } from "path";

import app from "./app.js";

const PORT = process.env.PORT;

await import("./config/dbConnection.js");

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});