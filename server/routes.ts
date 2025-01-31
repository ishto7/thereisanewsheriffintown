import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import express from "express";

export function registerRoutes(app: Express): Server {
  // API routes for future expansion if needed
  app.get("/api/health", (_req, res) => {
    res.json({ status: "healthy" });
  });

  // Serve the Nuxt.js application
  if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(process.cwd(), '.output/public')));

    // Handle all other routes - let Nuxt handle them
    app.get("*", (_req, res) => {
      res.sendFile(path.join(process.cwd(), '.output/public/index.html'));
    });
  }

  const httpServer = createServer(app);
  return httpServer;
}