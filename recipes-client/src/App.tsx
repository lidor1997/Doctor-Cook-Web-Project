import React, { useEffect } from "react";
import { loginByToken } from "./features/auth/api";
import { Header } from "./layout";
import { AppRoutes } from "./routes";

import { useUser } from "./context";
import { appStorage } from "./services";

function App() {
  const { handleUser } = useUser();

  useEffect(() => {
    const token = appStorage.getToken();

    const executeLoginByToken = async () => {
      try {
        if (!token) return;

        const user = await loginByToken();

        if (user) {
          handleUser(user);
        }
      } catch (error) {
        console.error(error);
      }
    };
    executeLoginByToken();
  }, [handleUser]);

  useEffect(() => {
    const mode = localStorage.getItem("mode");

    if (mode === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  return (
    <div className="App dark:bg-[#202124] h-screen overflow-auto">
      <Header />
      <AppRoutes />
    </div>
  );
}

export default App;
