document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("infoModal");
    const closeModal = document.getElementById("closeModal");
    const modalDetails = document.getElementById("modalDetails");

    const details = {
        1: {
            title: "Detalhes do Link 1",
            image: "https://fluig.andra.com.br/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0xODAxJnZlcj0xMDAwJmZpbGU9Y3Vyc28tdGVjbmljby1kZS10aS5qcGcmY3JjPTEyMDE3MDU5OTkmc2l6ZT0wLjI1NTEyMSZ1SWQ9MjUmZlNJZD0xJnVTSWQ9MSZkPWZhbHNlJnRrbj0mcHVibGljVXJsPXRydWUmYXR0YWNoPWZhbHNl.jpg",
            description: "Aqui estão os detalhes do Link 1.",
            link: "#"
        },
        2: {
            title: "Como eu entro no meu email?",
            image: "https://fluig.andra.com.br/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0yMDMxJnZlcj0xMDAwJmZpbGU9b3VsLnBuZyZjcmM9MjQwMTUyMTY5OSZzaXplPTAuMDI2ODMzJnVJZD0yNSZmU0lkPTEmdVNJZD0xJmQ9ZmFsc2UmdGtuPSZwdWJsaWNVcmw9dHJ1ZSZhdHRhY2g9ZmFsc2U=.png",
            description: "Para entrar no Seu email, primeiro Acesse o link abaixo. Sem esse link, você não vai conseguir entrar, ja que esse link é especifico pra usar o email com @andra.com.br !!     Ao entrar, insira o seu email e depois a senha padrão: Mudar@12",
            link: "https://outlook.maiex13.com.br/owa/auth/logon.aspx?replaceCurrent=1&url=https%3a%2f%2foutlook.maiex13.com.br%2fowa"
        },
        3: {
            title: "Detalhes do Link 3",
            image: "https://fluig.andra.com.br/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0xODAxJnZlcj0xMDAwJmZpbGU9Y3Vyc28tdGVjbmljby1kZS10aS5qcGcmY3JjPTEyMDE3MDU5OTkmc2l6ZT0wLjI1NTEyMSZ1SWQ9MjUmZlNJZD0xJnVTSWQ9MSZkPWZhbHNlJnRrbj0mcHVibGljVXJsPXRydWUmYXR0YWNoPWZhbHNl.jpg",
            description: "Aqui estão os detalhes do Link 3.",
            link: "#"
        },
        4: {
            title: "Detalhes do Link 4",
            image: "https://fluig.andra.com.br/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0xODAxJnZlcj0xMDAwJmZpbGU9Y3Vyc28tdGVjbmljby1kZS10aS5qcGcmY3JjPTEyMDE3MDU5OTkmc2l6ZT0wLjI1NTEyMSZ1SWQ9MjUmZlNJZD0xJnVTSWQ9MSZkPWZhbHNlJnRrbj0mcHVibGljVXJsPXRydWUmYXR0YWNoPWZhbHNl.jpg",
            description: "Aqui estão os detalhes do Link 4.",
            link: "#"
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
                <a href="${link}" target="_blank" style="color: #0ea5e9; text-decoration: underline;">Acesse aqui</a>
            `;
            modal.classList.remove("hidden");
        });
    });

    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
});
