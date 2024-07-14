import React, {createContext, useState} from 'react';
import {TASKS} from '../utils/constanst';
import {Task} from '../types';

interface BaseContextProps {
  loading?: boolean;
  setLoading?: (loading: boolean) => void;
  tasks?: Task[];
  setTasks?: (tasks: Task[]) => void;
  tasksLenght?: number;
  setTasksLenght?: (tasksLenght: number) => void;
}

// Create the context
const BaseContext = createContext<BaseContextProps>({});

export const useBase = () => {
  return React.useContext(BaseContext);
};

// Create a provider component
export const BaseProvider = ({children}: {children: React.ReactNode}) => {
  const [loading, setLoading] = useState(false);
  const [tasks, setTasks] = useState<Task[]>(TASKS);
  const [tasksLenght, setTasksLenght] = useState(TASKS.length + 1);

  return (
    <BaseContext.Provider
      value={{
        loading,
        setLoading,
        tasks,
        setTasks,
        tasksLenght,
        setTasksLenght,
      }}>
      {children}
    </BaseContext.Provider>
  );
};
