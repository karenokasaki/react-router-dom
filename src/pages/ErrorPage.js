import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div className="error">
      <h1>Error 404 - Essa página não existe</h1>
      <Link to="/">Volte para home page</Link>
    </div>
  );
}

export default ErrorPage;
