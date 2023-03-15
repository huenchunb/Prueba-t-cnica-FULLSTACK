package com.huenchun.todoapi.service;

import com.huenchun.todoapi.mapper.CrearTareaMapper;
import com.huenchun.todoapi.persistence.entity.Tarea;
import com.huenchun.todoapi.persistence.repository.TareaRepository;
import com.huenchun.todoapi.service.dto.CrearTareaDto;
import com.huenchun.todoapi.service.dto.EditarTareaDto;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TareaService {

    private TareaRepository tareaRepository;
    private CrearTareaMapper tareaMapper;

    public TareaService(
            TareaRepository tareaRepository,
            CrearTareaMapper tareaMapper) {
        this.tareaRepository = tareaRepository;
        this.tareaMapper = tareaMapper;
    }

    public Tarea crear(CrearTareaDto nuevaTarea)  {
        return this.tareaRepository.save(this.tareaMapper.map(nuevaTarea));
    }

    public List<Tarea> obtenerTodasLasTareas() {
        return this.tareaRepository.findAll();
    }

    public Optional<Tarea> eliminar(Long id) {
        Optional<Tarea> tarea = this.tareaRepository.findById(id);
        this.tareaRepository.delete(tarea.get());
        return tarea;
    }

    public Tarea editar(EditarTareaDto nuevaTareaEditada) {
        Optional<Tarea> tarea = this.tareaRepository.findById(nuevaTareaEditada.getId());
        tarea.get().setDescripcion(nuevaTareaEditada.getDescripcion());
        tarea.get().setVigente(nuevaTareaEditada.isVigente());
        return this.tareaRepository.save(tarea.get());
    }

}
