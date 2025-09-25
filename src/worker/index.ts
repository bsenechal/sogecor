import { Hono } from "hono";

// Reference to worker types
/// <reference path="../../worker-configuration.d.ts" />

const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default app;
