import "./App.css";
import { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Countries from "./components/Countries";
import { GlobalContext } from "./context-api/GlobalContext";
import TopSection from "./components/TopSection";

function App() {
  const { isLoading } = useContext(GlobalContext);
  return (
      <div className="main-container">
        <h2 className="header">WORLD COUNTRIES WITH REST API</h2>
        <TopSection />
        <div className="countries">
          <Countries />
          {isLoading && (
            <i className="fa fa-spinner fa-spin"
              style={{ fontSize: "48px" }}
            ></i>
          )}
        </div>
      </div>
  );
}

export default App;
