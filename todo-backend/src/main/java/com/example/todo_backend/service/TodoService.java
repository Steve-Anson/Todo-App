package com.example.todo_backend.service;

import com.example.todo_backend.dto.TodoDto;

public interface TodoService {

    TodoDto createTodo(TodoDto todoDto);
}
