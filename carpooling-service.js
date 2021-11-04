const db = firebase.firestore();
const publicador = document.getElementById('signup-form');
publicador.addEventListener('submit', async e => {
    e.preventDefault();
    const tipo = "carpool";
    const origen = publicador['inputOrigen'].value;
    const destino = publicador['inputDestino'].value;
    const horaSalida = publicador['inputHoraSalida'].value;
    const dia = publicador['inputFecha'].value;

    const descripcion = publicador['inputDescripcion'].value;
    const response = await db.collection('Publicaciones').doc().set({
        tipo,
        origen,
        destino,
        horaSalida,
        dia,
        descripcion
    })
    console.log(response)

    console.log(tipo, origen, destino, descripion);
});