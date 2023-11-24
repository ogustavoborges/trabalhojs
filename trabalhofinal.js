// Adicionar uma tarefa
// Editar uma tarefa salva
// Remover uma tarefa salva
// Listar todas as tarefas salvas
// Obter uma tarefa, através de um parâmetro (id)

//Tarefa -> nome, descrição, data.

const tarefas = [];

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
        const data = prompt("Data da tarefa (dd/mm/yyyy): ");
        addTarefa(nome, descricao, data);
      } else {
        addTarefa(nome, descricao);
      }

      menu();
      break;
    case 2:
      if (tarefas.length > 0) {
        const busca = parseInt(prompt("Digite o número da tarefa:"));
        const tarefa = findTarefa(busca);
        tarefa
          ? editTarefa(tarefa[0])
          : alert("Tarefa não encontrada! Tente novamente.");
      } else {
        alert("Ops, nenhuma tarefa foi adicionada!");
      }
      menu();
      break;
    case 3:
      if (tarefas.length > 0) {
        const id = prompt("Digite o número da tarefa que deseja remover:");
        const tarefa = findTarefa(id);
        tarefa? removeTarefa(tarefa[1]) : alert("Tarefa não encontrada! Tente novamente.");
      } else {
        alert("Ops, nenhuma tarefa foi adicionada!");
      }
      menu();
      break;
    case 4:
      if (tarefas.length > 0) {
        listTarefas();
      } else {
        alert("Ops, nenhuma tarefa foi adicionada!");
      }
      menu();
      break;

    case 5:
      if (tarefas.length > 0) {
        const busca = parseInt(prompt("Digite o número da tarefa:"));
        const tarefa = findTarefa(busca);
        tarefa
          ? exibeTarefa(...tarefa)
          : alert("Tarefa não encontrada! Tente novamente.");
      } else {
        alert("Ops, nenhuma tarefa foi adicionada!");
      }
      menu();
      break;
    case 6:
      alert("Desconectando...");
      break;

    default:
      alert("Opção inválida, tente novamente!");
      menu();
      break;
  }
}

function exibeTarefa(tarefa, index) {
  alert(
    `|--------- Tarefa ${++index} ---------|\n\n| Nome: ${
      tarefa.nome
    }\n\n| Descrição: ${tarefa.descricao}\n\n| Data: ${
      tarefa.data ? tarefa.data : "Não há"
    }\n\n|--------- [ ${index} de ${tarefas.length} ] ---------|`
  );
}

function addTarefa(nome, descricao, data = null) {
  const tarefa = { nome, descricao, data };
  tarefas.push(tarefa);
}

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

function removeTarefa(index) {
  const teste = tarefas.splice(index, 1);
  return teste;
}


function listTarefas() {
  tarefas.forEach((tarefa, index) => {
    exibeTarefa(tarefa, index);
  });
}

function findTarefa(id) {
  let retorno = false;
  tarefas.forEach((tarefa, index) => {
    if (index == id - 1) {
      return (retorno = [tarefa, index]);
    }
  });

  return retorno;
}

menu();
