import { useParams } from "react-router-dom";

function ProjectDetailsPage({ allProjects }) {
  // PRECISO SABER: PRECISO SABER O PARÂMETRO DA URL!!!!

  //console.log(useParams())
  const { projectID } = useParams();
  console.log(projectID);

  const projectSelected = allProjects.find((project) => {
    return project.id === projectID;
  });

  console.log(projectSelected);

  return (
    <div>
      <h1>Página de detalhe do projeto!!!</h1>

      <h2>{projectSelected.projectName}</h2>
      <p>{projectSelected.student}</p>
      <p>Nota: {projectSelected.score}</p>
      <p>Sobre: {projectSelected.about}</p>
      <p>Jogar: {projectSelected.projectUrl}</p>
      <p>Github: {projectSelected.github}</p>
    </div>
  );
}

export default ProjectDetailsPage;
