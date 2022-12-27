import { useEffect, useState } from "react";
import { Professor } from "../../@types/professor";
import { ApiService } from "../../services/ApiService";

export function useIndex() {
  const [professorsList, setProfessorsList] = useState<Professor[]>([]);

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");

  const [professorSelecionado, setProfessorSelecionado] =
    useState<Professor | null>(null);

  const [mensagem, setMensagem] = useState("");

  useEffect(() => {
    ApiService.get("/professores").then((resp) => {
      setProfessorsList(resp.data);
    });
  }, []);

  useEffect(() => {
    limparFormulario();
  }, [professorSelecionado]);

  function validarDadosAula() {
    return nome.length > 0 && email.length > 0;
  }

  function marcarAula() {
    if (professorSelecionado !== null) {
      if (validarDadosAula()) {
        ApiService.post(`/professores/${professorSelecionado.id}/aulas`, {
          nome,
          email,
        })
          .then(() => {
            setProfessorSelecionado(null);
            setMensagem("Cadastrado com sucesso");
          })
          .catch((e) => {
            setMensagem(e.response?.data.message);
          });
      } else {
        setMensagem("Preencha os dados corretamente");
      }
    }
  }

  function limparFormulario() {
    setNome("");
    setEmail("");
  }

  return {
    professorsList,
    nome,
    setNome,
    email,
    setEmail,
    professorSelecionado,
    setProfessorSelecionado,
    marcarAula,
    mensagem,
    setMensagem,
  };
}
