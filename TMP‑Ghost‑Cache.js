export function TMP_GHOST(pq){
    return {
        cache: Array.from({length: 8}, () => Math.random()),
        impulse: pq.seq % 360,
        echo: pq.load * 3,
        state: "ghost"
    };
}
