export const PQ_HISTORY = [];
export const PQ = [];

export function PQ_PC_Parallel(v){

    const task = {
        depth: v.whirl.S4,
        seq: v.seq,
        core: v.whirl.core,
        axis: {
            B: v.whirl.S1,
            H: v.whirl.S2,
            T: v.whirl.S3
        }
    };

    PQ.push(task);

    const next = PQ.shift();
    if(!next) return null;

    next.result = { ok: true, core: next.core };

    PQ_HISTORY.push(next);

    return next;
}
