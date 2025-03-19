package com.example.todo_backend.service.impl;

import com.example.todo_backend.dto.TodoDto;
import com.example.todo_backend.entity.Todo;
import com.example.todo_backend.mapper.TodoMapper;
import com.example.todo_backend.repository.TodoRepository;
import com.example.todo_backend.service.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
public class TodoServiceImpl implements TodoService {

    private TodoRepository todoRepository;

    @Override
    public TodoDto createTodo(TodoDto todoDto) {
        Todo todo = TodoMapper.mapToTodo(todoDto);
        Todo savedTodo = todoRepository.save(todo);
        return TodoMapper.mapToTodoDto(savedTodo);
    }
}
