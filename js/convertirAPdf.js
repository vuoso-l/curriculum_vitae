const elementToConvert = document.body;
const btn = document.querySelector(".download");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    generatePDF();
})

function generatePDF() {
    const opt = {
        filename: "CV - Lucas Vuoso.pdf",
        image: {
            type: "jpeg",
            quality: 0.98
        },
        html2canvas: {
            ignoreElements: elemento => {
                //Return true para que el elemento se ignore
                const download = elemento.nodeName.toLowerCase();
                if (download === "button") {
                    return true;
                }
            },
            scale: 8, //a mayor escala, mayor calidad pero más peso
            letterRendering: true,
        },
        jsPDF: {
            //características del formato a descargar
            unit: "in",
            format: "a3",
            orientation: "portrait",
        },
    };

    /* Swal.fire({
        title: '¿Querés descargar el CV?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, deseo descargarlo!'
    }).then((result) => {
        if (result.isConfirmed) {
            // Promises
            html2pdf()
                .set(opt)
                .from(elementToConvert)
                .save()
                .catch(err => console.log(err))
            Swal.fire(
                'CV Lucas Vuoso',
                'Descargando...',
                'success',
            )
        }
    }) */

    window.confirm("¿Desea descargar el CV?")
    // Promises
    html2pdf()
        .set(opt)
        .from(elementToConvert)
        .save()
        .catch(err => console.log(err))
}