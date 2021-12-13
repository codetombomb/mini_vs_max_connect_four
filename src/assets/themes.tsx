type HexColor = `#${string}`;

interface CSSThemeProperties {
    '--white': HexColor;
    '--light-gray': HexColor;
    '--medium-gray': HexColor;
    '--dark-gray': HexColor;
    '--player-1-color': HexColor;
    '--player-2-color': HexColor
}

type CSSTheme = [
    string,
    CSSThemeProperties
]

const themes: CSSTheme[] = [
    ["darkCyan", {
        '--white': '#fcfbf3',
        '--light-gray': '#efe8d8',
        '--medium-gray': '#dfd8c9',
        '--dark-gray': '#3f3c36',
        '--player-1-color': '#167c80',
        '--player-2-color': '#e54b4b'
    }],
    ["pictonBlue", {
        '--white': '#ffffff',
        '--light-gray': '#f3f3f3',
        '--medium-gray': '#e2e2e2',
        '--dark-gray': '#434343',
        '--player-1-color': '#499eeb',
        '--player-2-color': '#eb2d53'
    }],
    ["neonGarden", {
        '--white': '#282134',
        '--light-gray': '#1f1928',
        '--medium-gray': '#120c18',
        '--dark-gray': '#05fffd',
        '--player-1-color': '#00ff66',
        '--player-2-color': '#e616ff'
    }]
]

// I have to manually deconstruct everywhere, why can't I just bundle this?
// export {darkCyan, pictonBlue, neonGarden}
export default themes