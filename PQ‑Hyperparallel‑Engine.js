export function PQ_HYPER(nc){
    return {
        load: Math.floor(Math.random() * 100),
        root: nc.spin * 2,
        seq: Math.floor(Math.random() * 99999),
        threads: 8,
        mode: "hyperparallel"
    };
}
