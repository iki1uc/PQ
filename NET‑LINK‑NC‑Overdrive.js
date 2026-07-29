export function NET_OVERDRIVE(nc, pq, tmp, hub){
    return {
        fusion: "overdrive",
        link: "NC ↔ PQ ↔ TMP ↔ HUB",
        quantum: nc.spin + pq.seq + tmp.echo + hub.pulse,
        dimension: "4D"
    };
}
