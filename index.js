import { app } from "./app.js"

const PORT = 3333
app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`)
})