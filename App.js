import { useFonts } from "expo-font";
import AppNavigation from "./navigation/appNavigation";
import { GlobalArrayProvider } from "./context/GlobalArrayContext";

export default function App() {
  let [fontsLoaded] = useFonts({
    DMSans: require("./assets/fonts/DMSans-Medium.ttf"),
    Poppins: require("./assets/fonts/Poppins-Medium.ttf"),
  });

  if (fontsLoaded) {
    return (
      <GlobalArrayProvider>
        <AppNavigation />
      </GlobalArrayProvider>
    );
  }
}

const styles = require("./styles");
