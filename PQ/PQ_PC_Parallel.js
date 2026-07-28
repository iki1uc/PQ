import { PQ_HISTORY } from "../PQ/PQ_PC_Parallel.js";

export const RESPO_LOG = [];

export function RESPO_Whirl(v){

    const lastPQ = PQ_HISTORY[PQ_HISTORY.length - 1] || null;

    const flow = {
        core: v.whirl.core,
        seq: v.seq,
        drift: v.whirl.S4,
        pq: lastPQ
    };

    RESPO_LOG.push(flow);
    return flow;
}
