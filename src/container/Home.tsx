import "../styles/home.scss";

const Home = () => {
    return (
        <section className="flex justify-center items-center h-screen overflow-hidden hero">
            <div className="relatives max-w-3xl p-4 text-center text-white">
                <h2 className="text-3xl">¿Qué es Fortnite?</h2>
                <p className="mt-4 p-4 max-w-2xl text-md leading-6">
                    Fortnite es un mundo lleno de experiencias.
                    Entra en la isla y compite para ser el último jugador (o equipo) en pie.
                    Crea una isla con tus propias reglas.
                    Pasa tiempo con tus amigos en una isla creada por otra persona.
                    O salva el mundo acabando con hordas de monstruos con otros jugadores.
                </p>
            </div>
        </section>
    );
};

export default Home;
