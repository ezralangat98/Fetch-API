document.getElementById('button1').addEventListener('click', loadTxt);

//Loading Text
function loadTxt(){
    fetch('data.txt')
    .then(function (response) {
        return response.text();

    })
    .then(function(data) {
        console.log(data);
        document.getElementById('result').innerHTML = data;
    })
    .catch(function(error){
        console.log(error)
    })
}

//Load Json

document.getElementById('button2').addEventListener('click', loadJson);

function loadJson() {
    fetch('employees.json')
    .then (function(response){
        return response.json();
    })
    .then (function(data){
        console.log(data);

        let html = '';

        data.forEach(function(user) {
            html += `
                 <li>
                    ${user.name} - ${user.job}
                 <li/>`;
            
        });

        document.getElementById('result').innerHTML = html;

    })
    .catch(function(error){
        console.log(error)
        //document.getElementById('result').innerHTML = error;
    })
}

//Print Response from Rest API

document.getElementById('button3').addEventListener('click', loadRest);

function loadRest() {

    fetch('https://picsum.photos/list')
    .then(function(response){
        return response.json()

    })
    .then(function(images){
       let html = '';
       images.forEach(function(image){
           html += `
                  <li>

                  <a target = "_blank" href = "${image.post_url}">
                  View Image </a> ${image.author}
                  
                  </li>
           
           `;
       });
       document.getElementById('result').innerHTML = html;

    })
    .catch(function(error){
        console.log(error);
       document.getElementById('result').innerHTML = error;

    })
    
}
















