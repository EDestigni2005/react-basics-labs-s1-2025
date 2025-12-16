import './App.css';
import Task from './components/task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" description="Load dishwasher" />
          <Task title="Laundry" deadline="Tomorrow" description="Fold and put away"/>
          <Task title="Go gym" deadline="Wednesday" description="Leg day"/>
      
  

    
    </div>
  );
}

export default App;
