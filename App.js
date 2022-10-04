/* eslint-disable react/style-prop-object */
import { StatusBar, SafeAreaView } from "react-native";
import Cesta from "./src/telas/cesta/index";
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from "@expo-google-fonts/montserrat";
import mock from "./src/mocks/cesta";
import AppLoading from "expo-app-loading";

export default function App() {
  const [fonteCarregada] = useFonts({
    MontserratRegular: Montserrat_400Regular,
    MontserratBold: Montserrat_700Bold,
  });

  if (!fonteCarregada) {
    return <AppLoading />;
  }
  return (
    <SafeAreaView>
      <Cesta {...mock} />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
