export function PALAISE_raw_6D(canvasId, truth){
    const c = document.getElementById(canvasId);
    const ctx = c.getContext("2d");

    const { D0, D1, D2, D3, D4, D5 } = truth.time6d;

    ctx.clearRect(0,0,c.width,c.height);

    ctx.fillStyle = "#0f0";
    ctx.fillText("D0 Root: " + D0, 20, 40);
    ctx.fillText("D1 Achse: " + D1, 20, 80);
    ctx.fillText("D2 TMP: " + D2, 20, 120);

    ctx.fillStyle = "#6cf";
    ctx.fillText("D3 Lage: " + D3, 20, 160);

    ctx.fillStyle = "#fc0";
    ctx.fillText("D4 Later: " + D4, 20, 200);

    ctx.fillStyle = "#f0f";
    ctx.fillText("D5 Ort: " + D5, 20, 240);
}
