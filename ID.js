export const ID = {

    mode: "neutral",   // Standardmodus

    set(mode){
        this.mode = mode;
    },

    info(){
        switch(this.mode){
            case "koop":
                return "KOOP · Kooperation · Stabilisierung · gemeinsame Achse";
            case "neutral":
                return "NEUTRAL · Ausgleich · Mitte · keine Drift";
            case "pook":
                return "POOK · Gegenachse · Drift · Reaktion";
            default:
                return "Unbekannter Modus";
        }
    }
};
