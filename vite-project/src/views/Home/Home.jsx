import BannerDescription from "../../Components/BannerDescription";
import Detalles from "../../Components/Detalles";
import Introduccion from "../../Components/Introduccion";

export default function HomePage() {
  return (
    <>
      <div>
        <Introduccion />
      </div>
      <div>
        <Detalles />
      </div>
      <div>
        <BannerDescription />
      </div>
    </>
  );
}
