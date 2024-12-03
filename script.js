document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("infoModal");
    const closeModal = document.getElementById("closeModal");
    const modalDetails = document.getElementById("modalDetails");

    const emailLookupModal = document.getElementById("emailLookupModal");
    const closeEmailLookupModal = document.getElementById("closeEmailLookupModal");
    const cpfInput = document.getElementById("cpfInput");
    const findEmailBtn = document.getElementById("findEmailBtn");
    const emailResult = document.getElementById("emailResult");

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
            image: "https://fluig.andra.com.br/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0yMDM0JnZlcj0xMDAwJmZpbGU9Zmx1Z2FzK3BhZ2luYS5wbmc=.png",
            description: "Para acessar o fluig, você terá dois caminhos diferentes... um se você estiver usando o computador, e outro se você estiver usando o celular...",
            link: "https://fluig.andra.com.br/portal/p/01/home"
        },
        4: {
            title: "Como acessar o Meu RH",
            image: "https://fluig.andra.com.br/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0yMDM2JnZlcj0xMDAwJmZpbGU9bWV1cmgtYmFubmVyLXRkbi5wbmc=.png",
            description: "Acesse o link abaixo, lá tem todas as informações necessárias para o seu acesso ao Meu RH!",
            link: "https://fluig.andra.com.br/portal/p/01/HoleriteAndra"
        },
        5: {
            title: "Buscar meu email",
            description: "Ferramenta para buscar seu email utilizando seu CPF.",
            link: "#"
        }
    };

    document.querySelectorAll(".link-btn").forEach(button => {
        button.addEventListener("click", () => {
            const infoId = button.dataset.info;
            const { title, image, description, link } = details[infoId];

            if (infoId === "5") {
                // Email lookup modal
                emailLookupModal.classList.remove("hidden");
            } else {
                // Existing info modal
                modalDetails.innerHTML = `
                    <h2>${title}</h2>
                    ${image ? `<img src="${image}" alt="${title}" style="width: 100%; border-radius: 8px; margin-bottom: 20px;">` : ''}
                    <p>${description}</p>
                    <a href="${link}" target="_blank" style="color: #0ea5e9; text-decoration: underline;">Clique aqui</a>
                `;
                modal.classList.remove("hidden");
            }
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    closeEmailLookupModal.addEventListener("click", () => {
        emailLookupModal.classList.add("hidden");
        cpfInput.value = '';
        emailResult.innerHTML = '';
    });

    findEmailBtn.addEventListener("click", async () => {
        const cpf = cpfInput.value.replace(/[^\d]/g, '');

        if (cpf.length !== 11) {
            emailResult.innerHTML = '<p style="color: red;">CPF inválido. Digite 11 dígitos.</p>';
            return;
        }

        try {
            const response = await fetch(`https://10.30.35.8:8443/rest/findEmail?cpf=${cpf}`, {
                method: 'GET',
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (!response.ok) {
                throw new Error('Erro ao buscar email');
            }

            const data = await response.json();
            
            if (data.email) {
                emailResult.innerHTML = `<p>Seu email: <strong>${data.email}</strong></p>`;
            } else {
                emailResult.innerHTML = '<p style="color: red;">Nenhum email encontrado para este CPF.</p>';
            }
        } catch (error) {
            emailResult.innerHTML = `<p style="color: red;">Erro: ${error.message}</p>`;
        }
    });
});
