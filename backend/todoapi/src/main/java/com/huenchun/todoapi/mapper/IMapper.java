package com.huenchun.todoapi.mapper;

public interface IMapper<I, O> {
    O map(I input) throws Exception;
}
