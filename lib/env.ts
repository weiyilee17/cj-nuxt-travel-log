/// <reference types="node" />

import { z } from "zod";

import tryParseEnv from "./try-parse-env";

const envSchema = z.object({
  NODE_ENV: z.string(),
  BANANA: z.string(),
});

export type EnvSchema = z.infer<typeof envSchema>;

tryParseEnv(envSchema);

// eslint-disable-next-line node/no-process-env
export default envSchema.parse(process.env);
