export function NC_QUANTUM(){
    return {
        matrix: Array.from({length: 16}, () => Math.random()),
        spin: Math.random() * 360,
        energy: Math.random() * 999,
        state: "quantum",
        dimension: "4D"
    };
}
