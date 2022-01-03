import './App.css';
import TodosPage from './containers/TodosPage';
import TodoProvider from './context/TodoContext';

function App() {
  return (
    <TodoProvider>
      <TodosPage />
    </TodoProvider>
  );
}

export default App;
