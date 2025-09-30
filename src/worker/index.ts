import { Hono } from "hono";

// Reference to worker types
/// <reference path="../../worker-configuration.d.ts" />

type Env = Record<string, unknown>

const app = new Hono<{ Bindings: Env }>();

app.get("/api/", (c) => c.json({ name: "Cloudflare" }));

export default app;
