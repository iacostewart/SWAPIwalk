$(() => {     //short hand for document ready before start
//shit goes inbetween here.. 

$('#infoButton').click(() =>{
    $.ajax({
        type: 'GET', 
        url: 'https://swapi.co/api/people'
    }).done((res) => {
        let people = res.results
        for(person of people) {
            console.log(person.name)
        }
    })
})


})




//console.log(people)
        //console.log(res.results)