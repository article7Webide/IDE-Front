// src/mocks/handlers/index.js
import { projects } from "./projects";
import { userHandlers } from "./userHandlers";

// 여러 handler를 한 곳에 묶어서 return
export const handlers = [
    ...userHandlers,
    ...projects
]