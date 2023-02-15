import { useState } from "react"

const Form = () => {
    const [Nombre, setNombre] = useState('')
    const [Apellido, setApellido] = useState('')
    const [Estado, setEstado] = useState([])

    const guardar = (e) => {
        e.preventDefault();
        
        let usuarios = {
            nombres: Nombre,
            apellidos: Apellido
        }
        setEstado([...Estado, usuarios])


    }

    return (
        <>

            <form class="row g-3" onSubmit={(e) => guardar(e)}>
                <div class="col-auto">

                    <label for="nombre">Nombre</label>
                    <input onChange={(e) => setNombre(e.target.value)} type="text" class="form-control" id="nombre" />
                </div>
                <div class="col-auto">
                    <label for="apellido">Apellido</label>
                    <input onChange={(e) => setApellido(e.target.value)} type="text" class="form-control" id="Apellido" />
                </div>
                <div class="col-auto mt-5">
                    <button type="submit" class="btn btn-warning mb-3">Agregar</button>
                </div>
            </form>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Nombre</th>
                        <th scope="col">Apellido</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Estado.map(usuario, index => {
                            return <>
                            <tr>
                            <td>{usuario.nombres}</td>
                            <td>{usuario.apellidos}</td>
                            
                        </tr>
                        </>
                           
                        })
                    }
                </tbody>
            </table>
        </>
    )
}
export default Form