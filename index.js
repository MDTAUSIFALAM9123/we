import app from "./app.js"
import { config } from "dotenv"
config()
import connectionToDB from "./Database/dbconnection.js"

const PORT = process.env.PORT

app.listen(PORT, async() => {
    console.log("App is running");
    await connectionToDB();
})