import './App.css';
import TodoApp from "./components/organisms/TodoApp";
import ErrorBoundary from './ErrorBoundary';

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <TodoApp />
      </ErrorBoundary>
    </div>
  );
}

export default App;
