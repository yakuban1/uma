import "./App.css";
import { Card } from "antd";
import DemoForm from "./DemoForm";
import ShopTable from "./ShopTable";

function App() {
  return (
    <div className="App">
      <Card title="Форма" style={{ width: "600px", marginTop: "100px" }}>
        <DemoForm />
      </Card>

      <Card title="Таблица" style={{ width: "600px", marginTop: "20px" }}>
        <ShopTable />
      </Card>
    </div>
  );
}

export default App;
