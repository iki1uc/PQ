import { NC_HUB_ALL } from "./NC_HUB_ALL.js";

export const PALAISE_RESPO = {
  async truth(name){
    const hub = NC_HUB_ALL();
    const truth = {
        name,
        hub,
        time6d: hub.hub6D
    };
    return truth;
  }
};
