import React from 'react';

function CheckoutPage() {
    return (
        <>
            {/* HEADER */}
            <header>
                <div>
                    {/* LOGO */}
                    <div><img src="path/to/logo.png" alt="Logo" /></div>

                    {/* NAVIGATION LINKS */}
                    <nav>
                        <a href="#">Bicicletas</a>
                        <a href="#">Accesorios</a>
                        <a href="#">Quiénes somos</a>
                    </nav>

                    {/* ICONS */}
                    <div>
                        <a href="#"><i className="bi bi-heart"></i></a>
                        <a href="#"><i className="bi bi-cart"></i></a>
                        <a href="#"><i className="bi bi-person"></i></a>
                    </div>
                </div>
            </header>

            {/* CHECKOUT */}
            <section>
                <div>
                    <h2>Checkout</h2>
                </div>

                <div>
                    {/* PERSONAL INFORMATION FORM */}
                    <div>
                        <p>Información Personal:</p>
                        <form action="#">
                            <label htmlFor="nombre">Nombre</label>
                            <input type="text" id="nombre" />
                            {/* Add similar labels and inputs for other personal information fields */}
                        </form>
                    </div>

                    {/* SHIPPING DETAILS FORM */}
                    <div>
                        <p>Detalle de Envío:</p>
                        <form action="#">
                            <label htmlFor="pais">País</label>
                            <input type="text" id="pais" />
                            {/* Add similar labels and inputs for other shipping details fields */}
                        </form>
                    </div>

                    {/* PAYMENT FORM */}
                    <div>
                        <p>Pago:</p>
                        <form action="#">
                            <input type="checkbox" id="tarjetaCredito" />
                            <label htmlFor="tarjetaCredito">Tarjeta de crédito</label>

                            <input type="checkbox" id="mercadoPago" />
                            <label htmlFor="mercadoPago">Mercado Pago</label>
                            {/* Add additional payment options if needed */}
                        </form>

                        {/* CREDIT CARD DETAILS */}
                        <div>
                            <div>
                                <label htmlFor="titular">Nombre del Titular</label>
                                <input type="text" id="titular" />
                            </div>
                            {/* Add similar labels and inputs for credit card details */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default CheckoutPage;
