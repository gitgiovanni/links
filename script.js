document.addEventListener("DOMContentLoaded", () => {
    const homeLink = document.getElementById("homeLink");
    const consultaLink = document.getElementById("consultaLink");
    const homeSection = document.getElementById("homeSection");
    const consultaSection = document.getElementById("consultaSection");

    // Menu toggling functionality
    homeLink.addEventListener("click", () => {
        homeSection.classList.add("active");
        consultaSection.classList.remove("active");
        homeSection.classList.remove("hidden");
        consultaSection.classList.add("hidden");
        homeLink.classList.add("active");
        consultaLink.classList.remove("active");
    });

    consultaLink.addEventListener("click", () => {
        consultaSection.classList.add("active");
        homeSection.classList.remove("active");
        consultaSection.classList.remove("hidden");
        homeSection.classList.add("hidden");
        consultaLink.classList.add("active");
        homeLink.classList.remove("active");
    });

    const modal = document.getElementById("infoModal");
    const closeModal = document.getElementById("closeModal");
    const modalDetails = document.getElementById("modalDetails");

    const details = {
        1: {
            title: "Como saber qual é o seu email?",
            image: "https://fluig.andra.com.br/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0yMDMzJnZlcj0xMDAwJmZpbGU9MTgxLUFza2luZy1wb3dlcmZ1bC1xdWVzdGlvbnMtaW4teW91ci1vcmdhbmlzYXRpb25fbGFuZHNjYXBlLnBuZyZjcmM9MjIwMDE5OTQ1MCZzaXplPTAuMTA1OTIzJnVJZD0yNSZmU0lkPTEmdVNJZD0xJmQ9ZmFsc2UmdGtuPSZwdWJsaWNVcmw9dHJ1ZSZhdHRhY2g9ZmFsc2U=.png",
            description: "Descobrir o seu email é uma tarefa simples! Clicando no link abaixo e digitando seu CPF, você consegue informações como seu email e a data de adimissão.",
            link: "#"
        },
        2: {
            title: "Como eu entro no meu email?",
            image: "https://fluig.andra.com.br/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0yMDMxJnZlcj0xMDAwJmZpbGU9b3VsLnBuZyZjcmM9MjQwMTUyMTY5OSZzaXplPTAuMDI2ODMzJnVJZD0yNSZmU0lkPTEmdVNJZD0xJmQ9ZmFsc2UmdGtuPSZwdWJsaWNVcmw9dHJ1ZSZhdHRhY2g9ZmFsc2U=.png",
            description: "Para entrar no Seu email, primeiro Acesse o link abaixo. Sem esse link, você não vai conseguir entrar, ja que esse link é especifico pra usar o email com @andra.com.br !!     Ao entrar, insira o seu email e depois a senha padrão: Mudar@12",
            link: "https://outlook.maiex13.com.br/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2foutlook.maiex13.com.br%2fowa"
        },
        3: {
            title: "Como acessar o fluig?",
            image: "https://fluig.andra.com.br/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0yMDM0JnZlcj0xMDAwJmZpbGU9Zmx1Z2FzK3BhZ2luYS5wbmcmY3JjPTc1MDU4OTg3NiZzaXplPTAuNzczNDA5JnVJZD0yNSZmU0lkPTEmdVNJZD0xJmQ9ZmFsc2UmdGtuPSZwdWJsaWNVcmw9dHJ1ZSZhdHRhY2g9ZmFsc2U=.png",
            description: "Para acessar o fluig, você terá dois caminhos diferentes... um se você estiver usando o computador, e outro se você estiver usando o celular. PELO CELULAR: Primeiramente, baixe o aplicativo MY FLUIG, ele é tanto para android como pra IOS! Depois, clique em 'Esqueci minha senha' e insira seu Email. Vai chegar pra você um email simples, você clica e escolhe sua nova senha! Agora entre no fluig com email e a nova senha definida. PARA COMPUTADOR: O processo é parecido, você vai acessar o link abaixo, e então, clicar em esqueci minha senha e inserir o seu email. Vai chegar pra você um email simples onde você vai seguir as instruções e definir uma nova senha. Aí basta entrar no fluig com Email e a nova senha definida. Lembre-se: em ambos os casos é importante você salvar ou se lembrar da sua senha!    ",
            link: "https://fluig.andra.com.br/portal/p/01/home"
        },
        4: {
            title: "Como acessar o Meu RH",
            image: "https://fluig.andra.com.br/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0yMDM2JnZlcj0xMDAwJmZpbGU9bWV1cmgtYmFubmVyLXRkbi5wbmcmY3JjPTM4Nzc4NDg3NTAmc2l6ZT0wLjAxMzAzOSZ1SWQ9MjUmZlNJZD0xJnVTSWQ9MSZkPWZhbHNlJnRrbj0mcHVibGljVXJsPXRydWUmYXR0YWNoPWZhbHNl.png",
            description: "Acesse o link abaixo, lá tem todas as informações necessárias para o seu acesso ao Meu RH!",
            link: "https://fluig.andra.com.br/portal/p/01/HoleriteAndra"
        }
    };

    document.querySelectorAll(".link-btn").forEach(button => {
        button.addEventListener("click", () => {
            const infoId = button.dataset.info;
            const { title, image, description, link } = details[infoId];

            modalDetails.innerHTML = `
                <h2>${title}</h2>
                <img src="${image}" alt="${title}" style="width: 100%; border-radius: 8px; margin-bottom: 20px;">
                <p>${description}</p>
                <a href="${link}" target="_blank" style="color: #0ea5e9; text-decoration: underline;">Clique aqui</a>
            `;
            modal.classList.remove("hidden");
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    // Existing CPF page functions (verificarSenha, togglePassword, mascaraCPF, buscarEmail)
    const senhaCorreta = "MUDAR@123"; 
    let emailBuscado = false;

    function verificarSenha() {
        const senha = document.getElementById('password').value.toLowerCase();
        const senhaCorretaLower = senhaCorreta.toLowerCase();
        const loginMessage = document.getElementById('loginMessage');

        if (senha === senhaCorretaLower) {
            document.getElementById('loginContainer').classList.remove('active');
            document.getElementById('siteContent').classList.add('active');
            emailBuscado = false;
        } else {
            loginMessage.textContent = "Senha incorreta. Tente novamente.";
            loginMessage.style.color = "red";
        }
    }

    function togglePassword() {
        const passwordField = document.getElementById('password');
        if (passwordField.type === "password") {
            passwordField.type = "text";
        } else {
            passwordField.type = "password";
        }
    }

    function mascaraCPF(input) {
        let value = input.value.replace(/\D/g, ''); 
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
        value = value.replace(/(\d{3})(\d)/, '$1.$2'); 
        value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); 
        input.value = value;
    }

    async function buscarEmail(event) {
        event.preventDefault();

        if (emailBuscado) return;

        const cpfInput = document.getElementById('cpf');
        const cpf = cpfInput.value.replace(/\D/g, '');
        const emailDisplay = document.getElementById('emailDisplay');
        const spinner = document.getElementById('spinner');

        if (cpf.length !== 11) {
            emailDisplay.textContent = "CPF inválido.";
            return;
        }

        try {
            spinner.style.display = 'block';
            cpfInput.disabled = true;
            emailDisplay.textContent = "Buscando...";

            const response = await fetch(`https://10.30.35.8:8443/rest`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            });

              if (!response.ok) {
            throw new Error('Erro na busca do e-mail.');
        }

        const data = await response.json();
        const email = (data.Funcionarios && data.Funcionarios.length > 0) ? data.Funcionarios[0].Email.trim() : "Funcionário não encontrado.";

        emailDisplay.textContent = email;
        emailBuscado = true; // Marcar que a busca foi realizada
    } catch (error) {
        emailDisplay.textContent = "Erro ao buscar e-mail: " + error.message;
    } finally {
        // Oculta o spinner e habilita o campo de CPF
        spinner.style.display = 'none';
        cpfInput.disabled = false;
        cpfInput.value = ''; // Limpa o campo de CPF, se desejar
    }
}
