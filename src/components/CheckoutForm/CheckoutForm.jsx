const CheckoutForm = ({ handleSubmit }) => {
    return (
        <div className="contacto">
            <h1>Checkout</h1>
            <form className="form-contact" onSubmit={handleSubmit}>
                <label htmlFor="nombre" className=''>
                    <span>Nombre</span>
                    <input type="text" id="nombre" name="nombre" placeholder="Ingrese su nombre" required />
                </label>
                <label htmlFor="email">
                    <span>Email</span>
                    <input type="email" id="email" name="email" placeholder="Ingrese su email" required />
                </label>
                <label htmlFor="phone">
                    <span>Telefono</span>
                    <input type="tel" id="phone" name="phone" placeholder="Ingrese su telefono" required />
                </label>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
};

export default CheckoutForm;