import {app} from "./app.js";
import { connectDB } from "./data/database.js"


//database connection
connectDB();
//server listening on 4000
app.listen(process.env.PORT, () => {
    console.log("server is working on port 4000");
});