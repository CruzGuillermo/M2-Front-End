$("#boton").click(()=> {

	var lista = $("#lista")

	$.get("http://localhost:5000/amigos", data => {
		for (let i = 0; i < data.length; i++ ){
            var li = document.createElement("li")
            li.innerText = data[i].name
            console.log("data", lista)
			lista.appendChild(li)
            
            // console.log(li)
		}
	})
})



$("#search").click(() => {
    let idAmigo = $("#imput").val()

    $.get( `http://localhost:5000/amigos/${idAmigo}`, (data) => {
        $("#amigo").text (` amigo ${idAmigo} agregado con exito`)
    } )
} )

$("#delete").click(() =>{
    let idDelete = $("#imputDelete").val()

    $.ajax({
        url: `http://localhost:5000/amigos/${idDelete}`,
        type: "Delete",
        success: (data) => {
            $("#success").text(`amigo con id ${idDelete} borrado con exito`)
        }

    })
})