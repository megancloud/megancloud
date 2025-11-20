function dowloadPDF() {
    const element = document.queryselector(´#pdf-content´);

    /* console.log("si ingresoooo")
console.logc}(element); */

const hv = {
    margin: [10. 5. 15, 5] // arriba, izquierda, abajo, derecha) en nm
    filename: 'Hoja_de_vida_carlos_alberto_giraldo_loaiza',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: 
    { scale: 2 
        useCORS: true;
        allowtaint: false
        scrollY: 0

    },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }

};
html12pdf().set(hv).from(element).save();


}