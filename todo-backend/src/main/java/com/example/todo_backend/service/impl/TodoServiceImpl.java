package com.example.todo_backend.service.impl;

import com.example.todo_backend.dto.TodoDto;
import com.example.todo_backend.entity.Todo;
import com.example.todo_backend.exception.ResourceNotFoundException;
import com.example.todo_backend.mapper.TodoMapper;
import com.example.todo_backend.repository.TodoRepository;
import com.example.todo_backend.service.TodoService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

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

    @Override
    public TodoDto getTodoById(Long todoId) {
        Todo todo = todoRepository.findById(todoId)
                .orElseThrow(() -> new ResourceNotFoundException("Todo does not exist with given id" + todoId));
        return TodoMapper.mapToTodoDto(todo);
    }

    @Override
    public List<TodoDto> getAllTodos() {
        List<Todo> todos = todoRepository.findAll();
        return todos.stream().map((todo) -> TodoMapper.mapToTodoDto(todo)).collect(Collectors.toList());
    }

    @Override
    public TodoDto updateTodo(Long todoId, TodoDto todoDto) {
        Todo todo = todoRepository.findById(todoId)
                .orElseThrow(() -> new ResourceNotFoundException("Todo does not exist with given id" + todoId));

        todo.setTitle(todoDto.getTitle());
        todo.setDescription(todoDto.getDescription());
        todo.setCompleted(todo.isCompleted());
        todo.setDueDate(todoDto.getDueDate());

        Todo updatedTodo = todoRepository.save(todo);

        return TodoMapper.mapToTodoDto(updatedTodo);
    }

    @Override
    public void deleteTodo(Long todoId) {
        Todo todo = todoRepository.findById(todoId)
                .orElseThrow(() -> new ResourceNotFoundException("Todo does not exist with given id" + todoId));

        todoRepository.deleteById(todoId);
    }

    @Override
    public TodoDto completeTodo(Long todoId) {
        Todo todo = todoRepository.findById(todoId)
                .orElseThrow(() -> new ResourceNotFoundException("Todo does not exist with given id" + todoId));

        todo.setCompleted(Boolean.TRUE);
        Todo completedTodo = todoRepository.save(todo);
        return TodoMapper.mapToTodoDto(completedTodo);
    }

    @Override
    public TodoDto inCompleteTodo(Long todoId) {
        Todo todo = todoRepository.findById(todoId)
                .orElseThrow(() -> new ResourceNotFoundException("Todo does not exist with given id" + todoId));

        todo.setCompleted(Boolean.FALSE);
        Todo inCompleteTodo = todoRepository.save(todo);
        return TodoMapper.mapToTodoDto(inCompleteTodo);
    }
}
