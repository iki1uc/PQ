export const ID = {

    Ursprung: {
        info() {
            return "Ursprung · keine Richtung · keine Achse";
        }
    },

    Läufer: {
        info() {
            return "Läufer · Bewegung · erzeugt Richtung · macht aus 0 eine 1";
        }
    },

    Achse: {
        info() {
            return "Achse · entstandene Struktur · stabilisierte Richtung";
        }
    }
};

export function ID_STATE(mode){
    return ID[mode].info();
}
