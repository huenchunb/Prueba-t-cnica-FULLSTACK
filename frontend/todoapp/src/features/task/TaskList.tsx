import React, {useEffect, useState} from "react";
import {cleanTaskList, loadTaskList} from "../../app/actions/taskActions";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import vigente from "./../../img/vigente.png";
import no_vigente from "./../../img/no_vigente.png";
import {Button, ButtonGroup, Card, CardBody, CardFooter} from "reactstrap";
import {TaskEdit} from "./TaskEdit";
import {TaskDelete} from "./TaskDelete";
import {useGetTasksQuery} from "../../app/api/taskApi";
import {formatDate} from "../../utils/helpers";

export const TaskList = () => {
    const {taskList} = useAppSelector(state => state.tasks)
    const dispatch = useAppDispatch();
    const [taskId, setTaskId] = useState<number>(0);
    const {data, error, isLoading} = useGetTasksQuery()

    useEffect(() => {
        if (data) dispatch(loadTaskList(data))
        return () => {
            dispatch(cleanTaskList());
        }
    }, [dispatch, taskList, data, error, isLoading]);

    const [showModalEdit, setShowModalEdit] = useState<boolean>(false);

    const handleSetModalEditShow = (id: number) => {
        setTaskId(id);
        setShowModalEdit(true)
    };


    return (
        <div className="container">
            <div className="row my-lg-4">
                {taskList && (
                    <>
                        {taskList.map((task) => (
                            <div className="col-12 col-md-12 col-lg-12 mb-2" key={task.id}>
                                <Card className="shadow-sm">
                                    <CardBody className="d-flex align-items-center justify-content-between">
                                        <div>
                                            <h6>{task.descripcion}</h6>
                                            <p className="text-muted small mb-0">Creado
                                                el {formatDate(task.fechaCreacion)}</p>
                                        </div>
                                        <div>
                                            <img height="25" width="25" src={task.vigente ? vigente : no_vigente}
                                                 alt="Nueva tarea"/>
                                        </div>
                                    </CardBody>
                                    <CardFooter className="bg-light">
                                        <ButtonGroup>
                                            <Button color="success"
                                                    onClick={() => handleSetModalEditShow(task.id)}>Editar</Button>
                                            <TaskDelete id={task.id}/>
                                        </ButtonGroup>
                                    </CardFooter>
                                </Card>
                            </div>
                        ))}
                    </>
                )}
                {error && (
                    <div className="alert alert-danger p-2" role="alert">
                        <small>Ocurrió un error al conectarse con el servidor.</small>
                    </div>
                )}
                {isLoading && (
                    <div className="col-12 d-flex justify-content-center">
                        <div className="spinner-border" role="status">
                            <span className="sr-only"></span>
                        </div>
                    </div>
                )}
            </div>
            <TaskEdit
                id={taskId}
                setTaskId={setTaskId}
                showModalEdit={showModalEdit}
                setShowModalEdit={setShowModalEdit}/>
        </div>
    );
}