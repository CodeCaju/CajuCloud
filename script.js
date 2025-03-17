document.addEventListener("DOMContentLoaded", function () {
    // Lista de arquivos manualmente adicionada
    let files = [
        "duststorm_v1.zip",
        "duststorm_v2.zip",
        "duststorm_v3.zip"
    ];

    let versionsList = document.getElementById("versions-list");
    versionsList.innerHTML = ""; // Limpa a lista antes de adicionar os itens

    files.forEach(file => {
        let nameWithoutExt = file.split(".").slice(0, -1).join(".");
        let item = document.createElement("div");
        item.className = "version-item fade-in";
        item.innerHTML = `<strong>${nameWithoutExt}</strong><br>
                          <a href="versions/${file}" download>
                              <button>Baixar</button>
                          </a>`;
        versionsList.appendChild(item);
    });
});
