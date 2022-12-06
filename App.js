import { ThemeProvider } from "styled-components";
import theme from "./src/global/style/theme";
import { NavigationContainer } from "@react-navigation/native";
import { Login } from "./src/screens/User/Login";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <AppRoutes />
      </NavigationContainer>
    </ThemeProvider>
  );
}
