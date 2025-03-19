package com.example.todo_backend.service;

import com.example.todo_backend.dto.TodoDto;

import java.util.List;

public interface TodoService {

    TodoDto createTodo(TodoDto todoDto);

    TodoDto getTodoById(Long todoId);

    List<TodoDto> getAllTodos();

    TodoDto updateTodo(Long todoId, TodoDto todoDto);
}
