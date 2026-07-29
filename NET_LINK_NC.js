import { NC_link_Whirl } from "./NC/NC_link_Whirl.js";
import { PQ_PC_Parallel } from "./PQ/PQ_PC_Parallel.js";
import { TMP_Whirl } from "./TMP/TMP_Whirl.js";
import { PALAISE_RESPO } from "./PALAISE.RESPO.js";
import { RESPO_WHIRL } from "./RESPO/RESPO_Whirl.js";

export const NET_LINK_NC = {

    init(){
        // 1) WHIRL → NC
        this.nc = NC_link_Whirl();

        // 2) NC → PQ
        this.pq = PQ_PC_Parallel(this.nc);

        // 3) PQ → TMP
        this.tmp = TMP_Whirl(this.pq);

        // 4) RESPO → PALAISE
        this.truth = PALAISE_RESPO.truth("BEN");
        this.respo = RESPO_WHIRL(this.truth);

        return this;
    },

    info(){
        return {
            nc: this.nc,
            pq: this.pq,
            tmp: this.tmp,
            respo: this.respo
        };
    }
};
