export function AID(whirl){
    return {
        core: whirl.core,
        drift: whirl.S4,
        axis: {
            B: whirl.S1,
            H: whirl.S2,
            T: whirl.S3
        },
        seq: whirl.seq
    };
}
