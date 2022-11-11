import { useParams } from "react-router-dom";

function ProjectDetailsPage() {
  // PRECISO SABER: PRECISO SABER O PARÂMETRO DA URL!!!!

  //console.log(useParams())
  const { projectID } = useParams();
  console.log(projectID);

  return (
    <div>
      <h1>Página de detalhe do projeto!!!</h1>
    </div>
  );
}

export default ProjectDetailsPage;
