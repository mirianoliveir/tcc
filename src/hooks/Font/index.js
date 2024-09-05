import { useFonts } from "expo-font";
import { createContext, useContext } from "react";
import { ActivityIndicator } from "react-native";

const FontContext = createContext({});

export function FontProvider ({children}) {

    const [loaded, error] = useFonts ({
        regular: require("../../assets/fonts/Spectral-Regular.ttf"),
        bold: require("../../assets/fonts/Spectral-Bold.ttf"),
        italic: require("../../assets/fonts/Spectral-Italic.ttf"),
        semibold: require("../../assets/fonts/Spectral-SemiBold.ttf"),
        light: require("../../assets/fonts/Spectral-Light.ttf"),
        medium: require("../../assets/fonts/Spectral-Medium.ttf") 
    });

     if (!loaded && !error) {
       return (
        <View style={{flex: 1, justifyContent: "center",  alignItems: "center"}}>
            <Text style={{fontFamily: "bold", fontSize: 28, marginTop:5,}}> Carregando as fontes</Text>
            <ActivityIndicator size="large" color="#0000ff"  />
        </View>
        

       );
     }
    return <FontContext.Provider value={{loaded}}>{children} </FontContext.Provider>;
}

export function useFont() {
    const context = useContext(FontContext)
    if (!context) {
        throw new Error("useFont must be used within a FontProvider");
    }
    return context;
}