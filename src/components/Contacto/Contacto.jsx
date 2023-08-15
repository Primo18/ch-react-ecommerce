import './Contacto.css';

const Contacto = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // FormData es una clase que nos permite crear un objeto con los datos del formulario
        const formData = new FormData(e.target);
        // Object.fromEntries crea un objeto a partir de un array de arrays, donde cada array interno tiene dos elementos: el nombre del campo y el valor del campo
        const data = Object.fromEntries(formData);
        console.log(data);
    };
    return (
        <div className="contacto">
            <h1>Contacto</h1>
            <form className="form-contact" onSubmit={handleSubmit}>
                <label htmlFor="nombre" className=''>
                    <span>Nombre</span>
                    <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" />
                </label>
                <label htmlFor="email">
                    <span>Email</span>
                    <input type="email" id="email" name="email" placeholder="Ingrese su email" />
                </label>
                {/* mensaje a enviar */}
                <label htmlFor="mensaje">
                    <span>Mensaje</span>
                    <textarea id="mensaje" name="mensaje" placeholder="Ingrese su mensaje" />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
};

export default Contacto;