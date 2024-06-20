import './App.css'
import Header from './components/Header'
import Separator from './components/Separator'

import TodoList from './components/TodoList'

function App() {
  return (
    <div className='app-container'>
      <Header />
      <Separator />
      <TodoList />
    </div>
  )
}

export default App
