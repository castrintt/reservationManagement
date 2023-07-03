import { z } from "zod";

const AuthSchema = z.object({
  authToken: z.string(),
});

export type AuthLoginResponse = z.infer<typeof AuthSchema>;
