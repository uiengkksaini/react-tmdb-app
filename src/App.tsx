import AuthProvider from "./Router/AuthProvider";
import Router from "./Router/Router";
const App = () => {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
};

export default App;
