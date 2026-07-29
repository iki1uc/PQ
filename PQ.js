import { NC_HUB_ALL } from "./NC_HUB_ALL.js";

export function PQ_RUN(){
    const hub = NC_HUB_ALL();
    return {
        PQ_STATE: "RUN 8 · 81E",
        HUB: hub,
        VECTOR: hub.hub6D
    };
}
