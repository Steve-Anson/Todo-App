package com.example.todo_backend.mapper;

import com.example.todo_backend.dto.TodoDto;
import com.example.todo_backend.entity.Todo;

public class TodoMapper {

    public static TodoDto mapToTodoDto(Todo todo){
        return new TodoDto(
                todo.getId(),
                todo.getTitle(),
                todo.getDescription(),
                todo.isCompleted(),
                todo.getDueDate()
        );
    }

    public static Todo mapToTodo(TodoDto todoDto){
        return new Todo(
                todoDto.getId(),
                todoDto.getTitle(),
                todoDto.getDescription(),
                todoDto.isCompleted(),
                todoDto.getDueDate()
        );
    }
}
