export default class ColorUtil{

    /**
     * Example Lighten: shadeColor("#63C6FF",40);
     * Example Darken: shadeColor("#63C6FF",-40);
     * @param color
     * @param percent
     * @returns The hex of the color darker or lighten based on the percent
     * @link https://stackoverflow.com/questions/5560248/programmatically-lighten-or-darken-a-hex-color-or-rgb-and-blend-colors
     */
    static shadeHexColor(color: string, percent:number) {
        let R = parseInt(color.substring(1, 3), 16);
        let G = parseInt(color.substring(3, 5), 16);
        let B = parseInt(color.substring(5, 7), 16);

        R = parseInt(String(R * (100 + percent) / 100));
        G = parseInt(String(G * (100 + percent) / 100));
        B = parseInt(String(B * (100 + percent) / 100));

        R = (R<255)?R:255;
        G = (G<255)?G:255;
        B = (B<255)?B:255;

        const RR = ((R.toString(16).length == 1) ? "0" + R.toString(16) : R.toString(16));
        const GG = ((G.toString(16).length == 1) ? "0" + G.toString(16) : G.toString(16));
        const BB = ((B.toString(16).length == 1) ? "0" + B.toString(16) : B.toString(16));

        return "#"+RR+GG+BB;
    }

    static getColorArray(colorHex: string, start: number, final: number, jump: number) {
        let data = []
        for( let i = start ; i <= final ; i+=jump) {
            let color = ColorUtil.shadeHexColor(colorHex, i)
            data.push(color);
        }
        console.log(data);
        return data;
    }
}
