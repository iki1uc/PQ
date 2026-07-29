import { ATOM } from "./atom.js";
import { ANKER } from "./anker.js";
import { RESPO } from "./respo.js";

import { NC_link_Whirl } from "./NC/NC_link_Whirl.js";
import { PQ_PC_Parallel } from "./PQ/PQ_PC_Parallel.js";
import { TMP_Whirl } from "./TMP/TMP_Whirl.js";

export const NET_LINK_NC = {

    init(){
        this.atom = ATOM.init().excite(2);
        this.anker = ANKER.lock(this.atom);
        this.respo = RESPO.update(this.atom, this.anker);

        this.nc = NC_link_Whirl(this.atom.spin);
        this.pq = PQ_PC_Parallel(this.nc);
        this.tmp = TMP_Whirl(this.pq);

        return this;
    },

    info(){
        return {
            atom: this.atom.info(),
            anker: this.anker.info(),
            respo: this.respo.info(),
            nc: this.nc,
            pq: this.pq,
            tmp: this.tmp
        };
    }
};
