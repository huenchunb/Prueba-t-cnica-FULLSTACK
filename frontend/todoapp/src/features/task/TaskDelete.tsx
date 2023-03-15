import React from "react";
import {Button} from "reactstrap";
import {useDeleteTaskMutation} from "../../app/api/taskApi";
import {Task} from "../../app/models/task";

interface Props {
    id: number
}

export const TaskDelete = ({id}: Props) => {

    const [taskDelete] = useDeleteTaskMutation();
    const handleOnClick = (id: number) =>
        taskDelete(id)
            .then(res => console.log(res))
            .catch(error => console.error(error));

    return (
        <Button
            color="danger"
            onClick={() => handleOnClick(id)}>
            Eliminar
        </Button>
    )
}