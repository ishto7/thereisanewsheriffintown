import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import express from "express";

export function registerRoutes(app: Express): Server {
  // API routes
  app.get("/api/health", (_req, res) => {
    res.json({ status: "healthy" });
  });

  // Serve the Nuxt.js application
  if (process.env.NODE_ENV === "production") {
    // Serve static files from Nuxt output directory
    app.use(express.static(path.join(process.cwd(), '.output/public')));

    // Handle all routes - let Nuxt handle them
    app.get("*", (_req, res) => {
      res.sendFile(path.join(process.cwd(), '.output/public/index.html'));
    });
  } else {
    // In development, let Nuxt dev server handle the routes
    app.get("*", (_req, res) => {
      res.redirect("http://localhost:3000");
    });
  }

  const httpServer = createServer(app);
  return httpServer;
}