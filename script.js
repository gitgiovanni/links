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
            title: "Detalhes do Link 2",
            image: "https://fluig.andra.com.br/volume/stream/Rmx1aWc=/P3Q9MSZ2b2w9RGVmYXVsdCZpZD0xODAxJnZlcj0xMDAwJmZpbGU9Y3Vyc28tdGVjbmljby1kZS10aS5qcGcmY3JjPTEyMDE3MDU5OTkmc2l6ZT0wLjI1NTEyMSZ1SWQ9MjUmZlNJZD0xJnVTSWQ9MSZkPWZhbHNlJnRrbj0mcHVibGljVXJsPXRydWUmYXR0YWNoPWZhbHNl.jpg",
            description: "Aqui estão os detalhes do Link 2.",
            link: "#"
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
