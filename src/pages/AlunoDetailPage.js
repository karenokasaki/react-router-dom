import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function AlunoDetailPage() {
  const { alunoID } = useParams();
  const navigate = useNavigate();

  const [aluno, setAluno] = useState({});

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/enap-teste/${alunoID}`
      );
      setAluno(response.data);
    }

    fetchUser();
  }, []);

  async function handleDelete(e) {
    await axios.delete(`https://ironrest.herokuapp.com/enap-teste/${alunoID}`);
    navigate("/api-teste");
  }

  return (
    <div>
      <h1>Estou na pagina de detalhe do aluno</h1>
      <div>
        <p>
          {aluno.nome} - {aluno.idade} anos
        </p>
        <p>Profissão: {aluno.profissao}</p>
        <p>Hobby: {aluno.hobby}</p>
        <p>
          {aluno.cidade} - {aluno.estado}
        </p>
        <p>Signo: {aluno.signo}</p>
      </div>

      <button onClick={handleDelete}>Deletar usuário!</button>
      <button>Editar usuário!</button>

      <form>
        <div>
          <label>Nome</label>
          <input type="text" name="nome" />
        </div>

        <div>
          <label>Idade</label>
          <input type="text" name="idade" />
        </div>

        <div>
          <label>Cidade</label>
          <input type="text" name="cidade" />
        </div>
        <div>
          <label>Estado</label>
          <input type="text" name="estado" />
        </div>
        <div>
          <label>Signo</label>
          <input type="text" name="signo" />
        </div>
        <div>
          <label>Profissão</label>
          <input type="text" name="profissao" />
        </div>

        <div>
          <label>Hobby</label>
          <input type="text" name="hobby" />
        </div>

        <button>Salvar aluno</button>
      </form>
    </div>
  );
}

export default AlunoDetailPage;
