

$(document).ready(function () {
    // Inicializar DataTables
    var table = $('#rankingTable').DataTable({
        "pagingType": "simple",
        "order": [[1, 'desc']], // Ordenar por la columna de puntaje (índice 1)
        "columnDefs": [
            { "type": "num", "targets": 1 }
        ],
        "language": {
            "search": "",
            "searchPlaceholder": "🔍 Buscar ...",
            "paginate": {
                "previous": "Anterior",
                "next": "Siguiente"
            },
            "info": "Mostrando _START_ a _END_ de _TOTAL_ entradas",
            "infoEmpty": "Mostrando 0 a 0 de 0 entradas",
            "lengthMenu": "_MENU_",
            "emptyTable": "No hay datos disponibles",
            "infoFiltered": "(filtrado de _MAX_ entradas totales)"
        }
    });
});

// ACCEDER A LOS DATOS QUE RECIBE DT

/* "drawCallback": function (settings) {
    console.log("Data:", this.api().rows().data().toArray());
} */


// CREAR FILA CON DT

// envío del formulario
/* $('#formScore').on('submit', function (event) {
    event.preventDefault();

    const nombre = $('#formScore input[placeholder="Nombre"]').val();
    const id = $('#formScore input[placeholder="ID"]').val();
    const score = $('#score').val();

    // agregar fila con datatables
    table.row.add([
        `<div style="text-align: center; font-weight: bold; font-size: 1.5em;">
            ${nombre}
        </div>
        `,
        `
        <div style="padding: 10px; border-radius: 10px; background-color: #222; text-align: center; color: #fff;">
            <label for="score" style="font-weight: bold; font-size: 1.2em; margin-bottom: 10px; display: block;">
                🎯 Puntaje: ${score}
            </label>
            <progress id="score" max="${maxScore}" value="${score}" 
                    style="width: 100%; height: 12px; border-radius: 5px; overflow: hidden; 
                    background-color: #555; accent-color: #4CAF50;">
            </progress>
            <small style="display: block; margin-top: 8px; color: #bbb;">
                Record actual: <strong style="color: #FFD700;">🏆${maxScore}</strong>
            </small>
        </div>
        `
    ]).draw(false);

    table.order([1, 'desc']).draw();
}); */