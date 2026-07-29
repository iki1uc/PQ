import { T6D } from "./TEM6D.js";

export function HUB6D(){
    return {
        D0: T6D.t[0],          // Root / ALT
        D1: T6D.t[1],          // Achse / GHOST
        D2: T6D.t[2],          // TMP / REAL
        D3: T6D.project(),     // Lage / Projektion
        D4: T6D.t[1] - T6D.t[2], // Later / Drift
        D5: T6D.t[0] + T6D.t[2]  // Ort / Summe
    };
}

export function NC_HUB_ALL(){
    const hub = HUB6D();

    return {
        KI: {
            RESPO_A: "KI(core) -> v1024",
            RESPO_B: "KI(h1) -> v1024",
            RESPO_C: "KI(e3) -> v1024",
            RESPO_D: "KI(matrix) -> v1024"
        },
        AI: {
            RESPO_A: "AI(operator) -> v1024",
            RESPO_B: "AI(whirl) -> v1024",
            RESPO_C: "AI(w128) -> v1024",
            RESPO_D: "AI(win.inf) -> v1024"
        },
        SCALE: {
            RESPO_128: "Scale(128) -> v1024",
            RESPO_256: "Scale(256) -> v1024",
            RESPO_512: "Scale(512) -> v1024",
            RESPO_1024: "Scale(1024) -> v1024",
            RESPO_2048: "Scale(2048) -> v1024",
            RESPO_4096: "Scale(4096) -> v1024"
        },
        linear: {
            RESPO_A: "Linear(v1024) -> RESPO_A [Step 1]",
            RESPO_B: "Linear(v1024) -> RESPO_B [Step 2]",
            RESPO_C: "Linear(v1024) -> RESPO_C [Step 3]",
            RESPO_D: "Linear(v1024) -> RESPO_D [Step 4]"
        },
        parallel: {
            RESPO_A: "Parallel(v1024) -> RESPO_A",
            RESPO_B: "Parallel(v1024) -> RESPO_B",
            RESPO_C: "Parallel(v1024) -> RESPO_C",
            RESPO_D: "Parallel(v1024) -> RESPO_D"
        },
        whirl: {
            RESPO_A: "Whirl(v1024) -> RESPO_A [Spin 1]",
            RESPO_C: "Whirl(v1024) -> RESPO_C [Spin 2]",
            RESPO_B: "Whirl(v1024) -> RESPO_B [Spin 3]",
            RESPO_D: "Whirl(v1024) -> RESPO_D [Spin 4]"
        },
        dynamic: {
            RESPO_A: "Dynamic(5) -> RESPO_A",
            RESPO_B: "Dynamic(5) -> RESPO_B",
            RESPO_C: "Dynamic(5) -> RESPO_C",
            RESPO_D: "Dynamic(5) -> RESPO_D"
        },
        hub6D: hub
    };
}
