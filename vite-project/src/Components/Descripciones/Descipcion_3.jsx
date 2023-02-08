import "../Detalles/Detalles.css";

export default function Descripcion_3() {
  return (
    <div>
      {" "}
      <section className="tercero">
        <div className="content position-relative">
          <div className="d-flex justify-content-center position-absolute top-0 start-50 translate-middle-x mt-5">
            <h1>Comparte tus aventuras a tus amigos</h1>
          </div>
          <div className="col-4 d-grid gap-4">
            <h2>Sube las fotos de tus aventuras</h2>
            <div className="col-8">
              <h4>
                Las reseñas de otros clientes suponen una forma estupenda de
                impulsar tus ventas. - Shameeka Taylor
              </h4>
            </div>
          </div>
          <div className="col-4 position-absolute top-50 start-50 translate-middle d-grid gap-4">
            <h2>Unete a chats de tus juegos favoritos</h2>
            <div className="col-8">
              <h4>
                Las reseñas de otros clientes suponen una forma estupenda de
                impulsar tus ventas. - Shameeka Taylor
              </h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
