'use client'

import TodoForm from '../component/TodoForm';
import TodoList from '../component/TodoList';
import { useState } from 'react';

export default function Home() {
  const [todos, setTodos] = useState([
    { id: 1, text: 'Attend Cohort Meet', completed: false },
    { id: 2, text: 'Do some shit', completed: false },
    { id: 3, text: 'Go to gym', completed: false },
  ]);

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Todo List</h1>
      
      <TodoForm onAddTodo={addTodo} />
      <TodoList todos={todos} onToggleComplete={toggleComplete} onDelete={deleteTodo} />
    </div>
  );
}