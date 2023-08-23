import { Target } from "./Target";

export type MinecraftFilter = {
    test?: string;
    subject?: Target;
    operator?: string;
    value?: string | number;
};
