import { ThemeProvider } from "styled-components";
import theme from "./src/global/style/theme";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./src/screens/User/Login";
import { AppRoutes } from "./src/routes/routes";
import { CreateAcc } from "./src/screens/User/CreateAccount";
import { MyRequests } from "./src/screens/MyRequests";
import { Options } from "./src/screens/Options";
import { ProductInfos } from "./src/screens/ProductInfos";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <ProductInfos />
      </NavigationContainer>
    </ThemeProvider>
  );
}
