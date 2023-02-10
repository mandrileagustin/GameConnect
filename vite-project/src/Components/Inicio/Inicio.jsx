import { Link } from "react-router-dom";

export default function Detalles() {
  return (
    <div className="position-relative">
      <section class="position-absolute" id="primero">
        <div class="content">
          <h1 id="titulo">
            You can create full screen sections without javascript.
          </h1>
          <p>The height is set to 90vh, that means 90% height.</p>
        </div>
      </section>

      <section>
        <div class="content">
          <h1 id="titulo">It's amazing and fast.</h1>
        </div>
      </section>
      <section>
        <div class="content">
          <h1 id="titulo">It's amazing and fast.</h1>
        </div>
      </section>
    </div>
  );
}
