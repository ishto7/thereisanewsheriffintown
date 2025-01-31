import type { Express } from "express";
import { createServer, type Server } from "http";

export function registerRoutes(app: Express): Server {
  // API routes for future expansion if needed
  app.get("/api/health", (_req, res) => {
    res.json({ status: "healthy" });
  });

  const httpServer = createServer(app);
  return httpServer;
}
