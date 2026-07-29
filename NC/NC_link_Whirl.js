export const NC_LOG = [];

export function NC_link_Whirl(v){
    const link = {
        core: v.whirl.core,
        seq: v.seq,
        axis: {
            B: v.whirl.S1,
            H: v.whirl.S2,
            T: v.whirl.S3
        }
    };

    NC_LOG.push(link);
    return link;
}
