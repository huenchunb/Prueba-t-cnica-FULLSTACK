package com.huenchun.todoapi.controller;

import com.huenchun.todoapi.persistence.entity.Tarea;
import com.huenchun.todoapi.service.TareaService;
import com.huenchun.todoapi.service.dto.CrearTareaDto;
import com.huenchun.todoapi.service.dto.EditarTareaDto;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/tarea")
public class TodoController {
    private final TareaService tareaService;

    public TodoController(TareaService tareaService) {
        this.tareaService = tareaService;
    }

    @PostMapping
    public ResponseEntity<Tarea> crear(@RequestBody CrearTareaDto nuevaTarea)  {
        try {
            return ResponseEntity.ok(this.tareaService.crear(nuevaTarea));
        } catch (Exception ex) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping
    public List<Tarea> obtenerTodasLasTareas() {
        return this.tareaService.obtenerTodasLasTareas();
    }

    @DeleteMapping
    public Optional<Tarea> eliminar(Long id) {
        return this.tareaService.eliminar(id);
    }

    @PutMapping
    public Tarea editar(@RequestBody EditarTareaDto nuevaTareaEditada) {
        return this.tareaService.editar(nuevaTareaEditada);
    }
}
