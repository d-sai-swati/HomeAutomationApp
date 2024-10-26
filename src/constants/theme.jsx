import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { useColorScheme } from "nativewind";

export const { colorScheme } = useColorScheme();
export const COLORS = {
    primary: '#79C80B', //green
    secondary: '#5594FE',// blue
    lightBlue: '#66CAFE', //gatewaytext
    white: '#FFF',
    black: '#000',
    darkGray: '#ADADAD',
    lightGray: '#ECEBEB',//settings tabs
    red: '#FF3E3E',
    darkRed:'#E44F55',
    purple:'D6C1FC',
    // green: '#8CC246',
    yellow: '#FFFF00',
    slateGray100: '#FAFAFA',
    slateGray200: '#DADADA', //input border
    slateGray300: '#F0F0F0', // Mecury
    slateGray400: '#94a3b8',
    slateGray500: '#64748b',
    slateGray600: '#475569',
    slateGray700: '#334155',
    slateGray800: '#A6A6A7',
    slateGray900: '#88888A', 
};

export const Wp = wp
export const Hp = hp

export const FONTS = {
    intBold: { fontFamily: "Inter-Bold" },
    intMed: { fontFamily: "Inter-Medium" },
    intReg: { fontFamily: "Inter-Regular" },
    intSemi: { fontFamily: "Inter-SemiBold" },
    gilroy: { fontFamily: "Gilroy-Black" },
    gilroyBold: { fontFamily: "Gilroy-Bold" },
    gilroyMed: { fontFamily: "Gilroy-Med" },
    gilroySemi: { fontFamily: "Gilroy-SemiBold" },
    akaya: { fontFamily: "AkayaKanadaka-Regular" },
    pacifico: { fontFamily: "Pacifico-Regular" },
};

export const borderRadiuses = [
    { name: 'none', values: 0 },
    { name: 'sm', values: 2 },
    { name: 'default', values: 4 },
    { name: 'md', values: 6 },
    { name: 'lg', values: 8 },
    { name: 'xl', values: 12 },
    { name: '2xl', values: 16 },
    { name: '3xl', values: 24 },
    { name: 'full', values: 9999 }
];

export const themeBorderRadius = {
    ...borderRadiuses[6]
};

const appTheme = { COLORS, FONTS, Wp, Hp };

export default appTheme;