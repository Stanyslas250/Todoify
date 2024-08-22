import { Link, useNavigate } from "react-router-dom";
import Imge404 from "../assets/404.png";
function ErrorPage() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-5 place-items-center">
      <div className="size-80">
        <img src={Imge404} alt="404 Mascot" className="bg-contain" />
      </div>
      <div className="flex flex-col justify-center gap-2 prose">
        <h2 className="text-center">404 Error</h2>
        <p className="max-w-lg text-center">
          We searched high and low, but couldn&apos;t find what you&apos;re
          looking for. Let&apos;s find a better place for you to go.
        </p>
        <div className="flex justify-center gap-2">
          <button onClick={handleClick} className="btn btn-neutral">
            Go back
          </button>
          <Link to={"/"} className="btn btn-accent">
            Take me home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ErrorPage;
