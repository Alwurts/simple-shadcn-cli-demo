import type { Registry } from "simple-shadcn-cli/types";

import { ui } from "./registry-ui";
import { hooks } from "./registry-hook";

export const registry: Registry = [...ui, ...hooks];
