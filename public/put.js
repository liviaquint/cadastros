
async function buscarDados() {

    let cpf = document.getElementById('cpfAtualizar').value;

    const resposta = await fetch('/pessoas');
    const dados = await resposta.json();

    let pessoa = dados.find(p => p.cpf == cpf);

    if (pessoa) {

        document.getElementById('idPessoa').value = pessoa.id;
        document.getElementById('nomeAtualizar').value = pessoa.nome;
        document.getElementById('sobrenomeAtualizar').value = pessoa.sobrenome;
        document.getElementById('emailAtualizar').value = pessoa.email;
        document.getElementById('senhaAtualizar').value = pessoa.senha;
        document.getElementById('ruaAtualizar').value = pessoa.rua;
        document.getElementById('cepAtualizar').value = pessoa.cep;
        document.getElementById('cidadeAtualizar').value = pessoa.cidade;
        document.getElementById('estadoAtualizar').value = pessoa.estado;
        document.getElementById('telefoneAtualizar').value = pessoa.telefone;

        alert('Pessoa encontrada!');

    } else {

        alert('CPF não encontrado!');

    }
}

async function atualizarDados() {

    let id = document.getElementById('idPessoa').value;

    let pessoa = {
        nome: document.getElementById('nomeAtualizar').value,
        sobrenome: document.getElementById('sobrenomeAtualizar').value,
        cpf: document.getElementById('cpfAtualizar').value,
        email: document.getElementById('emailAtualizar').value,
        senha: document.getElementById('senhaAtualizar').value,
        rua: document.getElementById('ruaAtualizar').value,
        cep: document.getElementById('cepAtualizar').value,
        cidade: document.getElementById('cidadeAtualizar').value,
        estado: document.getElementById('estadoAtualizar').value,
        telefone: document.getElementById('telefoneAtualizar').value
    };

    if (id == '') {
        alert('Busque uma pessoa primeiro!');
        return;
    }

    let resposta = await fetch('/pessoas/' + id, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(pessoa)
    });

    if (resposta.ok) {
        alert('Dados atualizados com sucesso!');
    } else {
        alert('Erro ao atualizar!');
    }
}
