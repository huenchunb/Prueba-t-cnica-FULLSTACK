import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {Button, Card, CardBody} from "reactstrap";
import {useCreateTaskMutation} from "../../app/api/taskApi";

export type TaskInputForm = {
    descripcion: string
}

export const TaskCreate = () => {

    const {
        register,
        handleSubmit,
        formState: {errors}
    } = useForm<TaskInputForm>();

    const [createTask] = useCreateTaskMutation();

    const onSubmit: SubmitHandler<TaskInputForm> = (data) =>
        createTask(data).then((res => console.log(res))).catch(error => console.error(error));

    return (
        <div className="container">
            <div className="row my-4">
                <div className="col-12">
                    <Card className="shadow-sm">
                        <CardBody>
                            <h5 className="text-2xl">Crear una nueva tarea</h5>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="input-group mb-2">
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Ingresa una nueva tarea"
                                        {...register(
                                            "descripcion",
                                            {required: 'Ingrese una descripción de la tarea', maxLength: 100})}
                                    />
                                </div>
                                {errors.descripcion && (
                                    <div className="alert alert-danger p-2" role="alert">
                                        <small>{errors.descripcion?.message}</small>
                                    </div>)}
                                <hr/>
                                <div className="w-100">
                                    <Button
                                        type="submit"
                                        color="primary"
                                        className="d-block w-100">Crear</Button>
                                </div>
                            </form>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    );
};