import "./styles.css";
import { MultipleContainers } from "./Example";

export default function App() {
  return (
    <div className="App">
      <MultipleContainers
        containerStyle={{
          maxHeight: "80vh"
        }}
        itemCount={15}
        scrollable
      />
    </div>
  );
}
