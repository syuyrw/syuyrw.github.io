var myArray = [
    {"type":"Honda Metro Scooter", "reservationHalf":"$20", "reservationFull":"$30", "walkHalf":"$25", "walkFull":"$35"},
    {"type":"Honda Dio Scooter", "reservationHalf":"$30", "reservationFull":"$40", "walkHalf":"$35", "walkFull":"$45"},
    {"type":"Honda PCX150 Scooter", "reservationHalf":"$40", "reservationFull":"$50", "walkHalf":"$45", "walkFull":"$55"},
    {"type":"Honda Pioneer ATV", "reservationHalf":"$50", "reservationFull":"$70", "walkHalf":"$60", "walkFull":"$80"},
    {"type":"Jeep Wrangler - 4 door with a/c", "reservationHalf":"$70", "reservationFull":"$100", "walkHalf":"$85", "walkFull":"$125"},
    {"type":"Jeep Wrangler - 2 door", "reservationHalf":"$60", "reservationFull":"$85", "walkHalf":"$70", "walkFull":"$90"},
]
buildTable(myArray)

function buildTable(data){
    var table = document.getElementById('myTable')

    for (var i = 0; i < data.length; i++){
        var row = `<tr>
                        <td>${data[i].type}</td>
                        <td>${data[i].reservationHalf}</td>
                        <td>${data[i].reservationFull}</td>
                        <td>${data[i].walkHalf}</td>
                        <td>${data[i].walkFull}</td>
                    </tr>`
            table.innerHTML += row
        
        
    }
}