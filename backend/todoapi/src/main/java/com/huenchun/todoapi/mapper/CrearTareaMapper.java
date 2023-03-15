package com.huenchun.todoapi.mapper;

import com.huenchun.todoapi.persistence.entity.Tarea;
import com.huenchun.todoapi.service.dto.CrearTareaDto;
import org.springframework.stereotype.Component;
import java.util.Date;

@Component
public class CrearTareaMapper implements IMapper<CrearTareaDto, Tarea> {
    @Override
    public Tarea map(CrearTareaDto input) {
        Tarea tarea = new Tarea();
        tarea.setDescripcion(input.getDescripcion());
        tarea.setVigente(true);
        tarea.setFechaCreacion(new Date());
        return tarea;
    }
}
