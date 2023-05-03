import adminRouter from './admin.js'
// import authRouter from "./auth";


const routes = (app) => {

    app.use('/api/admin', adminRouter());
    // app.use('/api/auth', authRouter());
}

export default routes