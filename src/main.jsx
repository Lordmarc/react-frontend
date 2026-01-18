import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import TaskList from './components/Tasks/TaskList.jsx'
import Counter from './components/Counter.jsx'
import ToggleBox from './components/ToggleBox.jsx'
import Input from './components/Input.jsx'
import Counters from './components/Counters.jsx'
import ActiveStatus from './components/ActiveStatus.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <TaskList/> */}
    {/* <Counter/> */}
    {/* <ToggleBox/> */}
    {/* <Input/> */}
    {/* <Counters/> */}
    <ActiveStatus/>
  </StrictMode>,
)
