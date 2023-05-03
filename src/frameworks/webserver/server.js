
const serverConfig = (app) => {
    const startServer = () => {
        app.listen(process.env.PORT, () => {
            console.log(`Server listening on Port ${process.env.PORT}`);
        })
    }

    return {
        startServer
    }
}

export default serverConfig;