package com.huenchun.todoapi.service.dto;

import lombok.Data;

@Data
public class EditarTareaDto {
    private Long id;
    private String descripcion;
    private boolean vigente;
}
