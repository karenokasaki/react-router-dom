import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { useEffect, useState } from "react";

function AlunoDetailPage() {
  const { alunoID } = useParams();
  const navigate = useNavigate();

  const [reload, setReload] = useState(false)
  const [aluno, setAluno] = useState({});
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    cidade: "",
    estado: "",
    profissao: "",
    hobby: "",
    signo: "",
  });

  useEffect(() => {
    async function fetchUser() {
      const response = await axios.get(
        `https://ironrest.herokuapp.com/enap-teste/${alunoID}`
      );
      setAluno(response.data);
      setForm(response.data);
    }

    fetchUser();
  }, [reload]);

  async function handleDelete(e) {
    await axios.delete(`https://ironrest.herokuapp.com/enap-teste/${alunoID}`);
    navigate("/api-teste");
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault()
    try {
        //clonar o state para um obj JS
        const clone = {...form}
        //deletar a chave _id do obj
        delete clone._id

        await axios.put(`https://ironrest.herokuapp.com/enap-teste/${alunoID}`, clone)
        setReload(!reload)

    } catch(error) {
        console.log(error)
    }
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
          <input
            type="text"
            onChange={handleChange}
            name="nome"
            value={form.nome}
          />
        </div>

        <div>
          <label>Idade</label>
          <input
            type="text"
            onChange={handleChange}
            name="idade"
            value={form.idade}
          />
        </div>

        <div>
          <label>Cidade</label>
          <input
            type="text"
            onChange={handleChange}
            name="cidade"
            value={form.cidade}
          />
        </div>
        <div>
          <label>Estado</label>
          <input
            type="text"
            onChange={handleChange}
            name="estado"
            value={form.estado}
          />
        </div>
        <div>
          <label>Signo</label>
          <input
            type="text"
            onChange={handleChange}
            name="signo"
            value={form.signo}
          />
        </div>
        <div>
          <label>Profissão</label>
          <input
            type="text"
            onChange={handleChange}
            name="profissao"
            value={form.profissao}
          />
        </div>

        <div>
          <label>Hobby</label>
          <input
            type="text"
            onChange={handleChange}
            name="hobby"
            value={form.hobby}
          />
        </div>

        <button onClick={handleSubmit}>Salvar aluno</button>
      </form>
    </div>
  );
}

export default AlunoDetailPage;
