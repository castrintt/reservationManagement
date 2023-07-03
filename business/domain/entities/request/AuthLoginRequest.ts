import { z } from "zod";

const AuthSchema = z.object({
  email: z.string(),
  password: z.string(),
});

export type AuthLoginRequest = z.infer<typeof AuthSchema>;
