import React, { useContext } from 'react'
import Header from '../other/Header'
import TaskListNumbers from '../other/TaskListNumbers'
import TaskList from '../TaskList/TaskList'
import { AuthContext } from '../../context/AuthProvider'

const EmployeeDashboard = (props) => {

  const [employees] = useContext(AuthContext)

  const freshEmployee =
    employees.length > 0
      ? employees.find(emp => emp.email === props.data?.email)
      : props.data

  return (
    <div className='p-20 bg-[#1C1C1C] h-screen'>
      <Header changeUser={props.changeUser} data={freshEmployee} />
      <TaskListNumbers data={freshEmployee} />
      <TaskList data={freshEmployee} />
    </div>
  )
}

export default EmployeeDashboard
