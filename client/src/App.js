import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import './App.css';
import TodoPage from './containers/TodoPage';
import TodosPage from './containers/TodosPage';
import TodoProvider from './context/TodoContext';

function App() {
  return (
    <BrowserRouter>
      <TodoProvider>
        <Routes>
          <Route exact path="/" element={<TodosPage />} />
          <Route exact path="/:id" element={<TodoPage />} />
        </Routes>
      </TodoProvider>
    </BrowserRouter>
  );
}

export default App;
