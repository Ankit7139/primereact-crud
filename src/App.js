import "./App.css";
// import { DataTableCrudDemo } from "./demo/DataTableCrudDemo";
import { NavigationBar } from "./NavigationBar";
import { IMtable } from "./Table/IMtable";

function App() {
  return (
    <div className="App">
      <NavigationBar />
      {/* <DataTableCrudDemo /> */}
      <IMtable />
    </div>
  );
}

export default App;
