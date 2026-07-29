export function HUB_AI(nc, pq, tmp){
    return {
        ncStatus: nc.state,
        pqStatus: pq.mode,
        tmpStatus: tmp.state,
        pulse: (nc.energy + pq.load + tmp.echo) % 1000,
        mode: "AI-Core"
    };
}
