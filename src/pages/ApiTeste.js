import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function ApiTeste() {
  const [showForm, setShowForm] = useState(false);

  const [alunos, setAlunos] = useState([]);
  const [reload, setReload] = useState(false);
  const [form, setForm] = useState({
    nome: "",
    idade: "",
    cidade: "",
    estado: "",
    profissao: "",
    hobby: "",
    signo: "",
  });

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
    // reload = false ----> ! => true
    // reload = true -----> ! => false
    setReload(!reload);
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();

    await axios.post("https://ironrest.herokuapp.com/enap-teste", form);
    setForm({
      nome: "",
      idade: "",
      cidade: "",
      estado: "",
      profissao: "",
      hobby: "",
      signo: "",
    });
    handleReload();
    toast.success("Aluno criado com sucesso! :D");
    setShowForm(false);
  }

  return (
    <div>
      <h1>Aqui é a página que vamos mostrar a nossa API</h1>

      
      <button
        onClick={() => {
          setShowForm(!showForm);
        }}
      >
        Criar novo usuário
      </button>

      {showForm && (
        <form>
          <div>
            <label>Nome</label>
            <input
              type="text"
              name="nome"
              onChange={handleChange}
              value={form.nome}
            />
          </div>

          <div>
            <label>Idade</label>
            <input
              type="text"
              name="idade"
              onChange={handleChange}
              value={form.idade}
            />
          </div>

          <div>
            <label>Cidade</label>
            <input
              type="text"
              name="cidade"
              onChange={handleChange}
              value={form.cidade}
            />
          </div>
          <div>
            <label>Estado</label>
            <input
              type="text"
              name="estado"
              onChange={handleChange}
              value={form.estado}
            />
          </div>
          <div>
            <label>Signo</label>
            <input
              type="text"
              name="signo"
              onChange={handleChange}
              value={form.signo}
            />
          </div>
          <div>
            <label>Profissão</label>
            <input
              type="text"
              name="profissao"
              onChange={handleChange}
              value={form.profissao}
            />
          </div>

          <div>
            <label>Hobby</label>
            <input
              type="text"
              name="hobby"
              onChange={handleChange}
              value={form.hobby}
            />
          </div>

          <button onClick={handleSubmit}>Salvar aluno</button>
        </form>
      )}

      <button onClick={handleReload}>Recarregar api!!</button>

      {alunos.length > 14 && <p>Nossa Turma tem 15 pessoas :D</p>}

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
