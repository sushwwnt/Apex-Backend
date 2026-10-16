// combine all ur routes of application
// 1000

import { Router } from "express";
import { healthRouter } from "./health.routes";
import { authRouter } from "./auth.routes";

export const apiRouter = Router()


apiRouter.use(healthRouter);
apiRouter.use("/auth", authRouter)