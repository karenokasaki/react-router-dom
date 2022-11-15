import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ApiTeste() {
  const [alunos, setAlunos] = useState([]);
  const [reload, setReload] = useState(false);

  //fetch -> api do navegador -> requisições http (get, put, pacth, delete, post) -> axios
  //promisses -> async/await

  //useEffect()
  // array de dependencias
  // [] -> vai rodar APENAS uma vez -> quando o componente/pagina for carregado
  // [state] -> toda vez que esse state MUDAR DE VALOR -> o código dentro do useEffect roda novamente.

  useEffect(() => {
    async function fetchStudents() {
      const response = await axios.get(
        "https://ironrest.herokuapp.com/enap-teste"
      );
      setAlunos(response.data);
    }

    fetchStudents();
  }, [reload]);

  function handleReload() {
    setReload(!reload);
  }

  console.log(alunos);

  return (
    <div>
      <h1>Aqui é a página que vamos mostrar a nossa API</h1>

      <form>
        <input type="text" placeholder="Escreva seu nome" />
        <input type="text" placeholder="Qual é a sua turma?" />
        <button>Salvar aluno</button>
      </form>

      <button onClick={handleReload}>Recarregar api!!</button>

      <div className="cards">
        {alunos.map((aluno) => {
          return (
            <div key={aluno._id} className="card">
              <p>
                {aluno.nome} - {aluno.idade} anos
              </p>
              <p>Profissão: {aluno.profissao}</p>
              <Link to={`/alunos/${aluno._id}`}>Ver detalhes</Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ApiTeste;
