import { app } from "./app.js";
import { connectDB } from "./data/database.js";

//database connection
connectDB();
//server listening on 4000
app.listen(process.env.PORT, () => {
  console.log(
    `Server is working on port:${process.env.PORT} in ${process.env.NODE_ENV} Mode`
  );
});
