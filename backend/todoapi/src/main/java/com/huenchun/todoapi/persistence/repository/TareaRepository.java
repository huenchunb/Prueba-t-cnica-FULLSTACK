package com.huenchun.todoapi.persistence.repository;


import com.huenchun.todoapi.persistence.entity.Tarea;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TareaRepository extends JpaRepository<Tarea, Long> {

}
