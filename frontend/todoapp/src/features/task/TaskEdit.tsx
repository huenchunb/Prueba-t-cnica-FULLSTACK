import React, {useEffect} from "react";
import {
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button
} from "reactstrap";
import {
    useForm,
    SubmitHandler
} from "react-hook-form";
import {useUpdateTaskMutation} from "../../app/api/taskApi";

interface Props {
    id: number,
    setTaskId: Function,
    showModalEdit: boolean,
    setShowModalEdit: Function,
}

export type InputFormEdit = {
    id: number,
    descripcion: string,
    vigente: boolean
}

export const TaskEdit = ({id, showModalEdit, setShowModalEdit}: Props) => {

    const {handleSubmit, register, formState: {errors}, setValue} = useForm<InputFormEdit>()

    const [editTask] = useUpdateTaskMutation();
    const onSubmit: SubmitHandler<InputFormEdit> = (data) => {

        editTask(data)
            .then(res => toggle())
            .catch(error => console.error(error));
    };
    const toggle = () => setShowModalEdit(!showModalEdit);

    useEffect(() => {
        setValue("id", id);
    }, [id, setValue])

    return (
        <Modal isOpen={showModalEdit} toggle={toggle}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <ModalHeader>
                    <p className="mb-0">Editar tarea</p>
                </ModalHeader>
                <ModalBody>
                    <input type="number" hidden={true} {...register("id", {required: true})}/>
                    <div className="input-group mb-3">
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
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="inputVigente">Vigente</label>
                        <select
                            className="form-select"
                            id="inputVigente"
                            {...register(
                                "vigente",
                                {required: 'Debe seleccionar una vigencia'}
                            )}>
                            <option value={"false"}>No vigente</option>
                            <option value={"true"}>Vigente</option>
                        </select>
                    </div>
                    {errors.vigente && (
                        <div className="alert alert-danger p-2" role="alert">
                            <small>{errors.vigente?.message}</small>
                        </div>)}
                </ModalBody>
                <ModalFooter>
                    <Button color="danger" onClick={toggle}>
                        Cancelar
                    </Button>
                    <Button color="success" type="submit">
                        Guardar cambios
                    </Button>
                </ModalFooter>
            </form>
        </Modal>
    );
};