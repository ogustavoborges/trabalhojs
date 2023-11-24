// Nome: Gustavo Borges
// Turma: 1096

// Array de tarefas
const tarefas = [];

// Menu ToDo List
function menu() {
  let opcao = 1;
  do {
    if (opcao <= 0 || opcao > 6) {
      alert("Opção inválida, tente novamente!");
    }
    opcao = parseInt(
      prompt(
        "ToDo List \n\n1) Adicionar uma tarefa \n2) Editar uma tarefa* \n3) Remover uma tarefa* \n4) Listar todas as tarefas \n5) Buscar uma tarefa\n6) Sair\n\n"
      )
    );
  } while (opcao <= 0 || opcao > 6);

  switch (opcao) {
    case 1:
      const nome = prompt("Nome da tarefa: ");
      const descricao = prompt("Descrição da tarefa");
      const addData = confirm("Deseja adicionar uma data?");

      if (addData) {
        const data = prompt("Data da tarefa (01/01/2023): ");
        addTarefa(nome, descricao, data);
      } else {
        addTarefa(nome, descricao);
      }
      break;
    case 2:
      if (!listaVazia()) {
        const busca = parseInt(prompt("Digite o número da tarefa:"));
        const tarefa = findTarefa(busca);
        tarefa
          ? editTarefa(tarefa[0])
          : alert("Tarefa não encontrada! Tente novamente.");
      }
      break;
    case 3:
      if (!listaVazia()) {
        const id = parseInt(
          prompt("Digite o número da tarefa que deseja remover:")
        );
        const tarefa = findTarefa(id);
        tarefa
          ? removeTarefa(tarefa[1])
          : alert("Tarefa não encontrada! Tente novamente.");
      }
      break;
    case 4:
      !listaVazia() ? listTarefas() : "";
      break;

    case 5:
      if (!listaVazia()) {
        const busca = parseInt(prompt("Digite o número da tarefa:"));
        const tarefa = findTarefa(busca);
        tarefa
          ? exibeTarefa(...tarefa)
          : alert("Tarefa não encontrada! Tente novamente.");
      }
      break;
    case 6:
      alert("Desconectando...");
      return;
      break;

    default:
      alert("Opção inválida, tente novamente!");
      break;
  }

  menu();
}
// Verifica se a lista de tarefas está vazia
function listaVazia() {
  if (tarefas.length == 0) {
    alert("Ops, nenhuma tarefa foi adicionada!");
    return true;
  }
  return false;
}

// Exibe uma tarefa
function exibeTarefa(tarefa, index) {
  alert(
    `|--------- Tarefa ${++index} ---------|\n\n| Nome: ${
      tarefa.nome
    }\n\n| Descrição: ${tarefa.descricao}\n\n| Data: ${
      tarefa.data ? tarefa.data : "Não há"
    }\n\n|--------- [ ${index} de ${tarefas.length} ] ---------|`
  );
}

//Adiciona uma tarefa
function addTarefa(nome, descricao, data = '') {
  tarefas.push({ nome, descricao, data });
}

//Edita uma tarefa
function editTarefa(tarefa) {
  tarefa.nome = prompt(
    `| Nome: ${tarefa.nome}\n\n Digite o novo nome da tarefa:`
  );
  tarefa.descricao = prompt(
    `| Descrição: ${tarefa.descricao}\n\n Digite a nova descrição da tarefa:`
  );
  tarefa.data = prompt(
    `| Data: ${tarefa.data}\n\n Digite a nova data da tarefa:`
  );
  return tarefa;
}

//Remove uma tarefa
function removeTarefa(id) {
  alert(
    `Tarefa removida com sucesso!\n\n| Nome: ${tarefas[id].nome}\n\n| Descrição: ${tarefas[id].descricao}\n\n| Data: ${tarefas[id].data}\n`
  );
  const tarefaRemovida = tarefas.splice(id, 1);
  return tarefaRemovida;
}

// Lista todas as tarefas
function listTarefas() {
  tarefas.forEach((tarefa, index) => {
    exibeTarefa(tarefa, index);
  });
}

// Busca uma tarefa
function findTarefa(id) {
  let retorno = false;
  tarefas.forEach((tarefa, index) => {
    if (index == (id - 1)) {
      return (retorno = [tarefa, index]);
    }
  });

  return retorno;
}

menu();
