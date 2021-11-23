const btn = document.querySelector(".download");
const a = document.querySelector(".download a");



btn.addEventListener("click", (e) => {
    //e.preventDefault();

    Swal.fire({
        title: '¿Querés descargar el CV?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Sí, deseo descargarlo!'
    })
        .then((result) => {
            if (result.isConfirmed) {
                a.setAttribute("href", "./archivos_pdf/CV-Lucas_Vuoso.pdf");
                a.setAttribute("download", "CV - Lucas Vuoso");
                a.click();
                Swal.fire(
                    'CV Lucas Vuoso',
                    'Descargado!',
                    'success',
                )
            }
        })
})