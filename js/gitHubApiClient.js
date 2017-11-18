var divRepositoriosDeck = $("#repoCardDeck");
var str = "";

function createRepoCard(repoName, repoDesc, repoUrl){
    str +=
    "<div class='col-sm-4  d-flex align-items-stretch mt-3'>"
    +" <div class='card border-primary text-center'>"
    +"  <div class='card-header'>" + repoName + "</div>"
    +"   <div class='card-body'>"
    // +"     <h4 class='card-title'>" 
    // +       repoName 
    // +"     </h4>"
    +"     <p class='card-text'>"
    +       repoDesc
    +"     </p>"
    +"   </div>"
    +"   <div class='card-footer'>"
    //+"     <small class='text-muted'>Last updated 3 mins ago</small>"
    +"     <a href='" + repoUrl + "' class='btn'>Acessar</a>"
    +"   </div>"
    +" </div>"
    +"</div>";
}


$(document).ready(function(){
    // $.get( "https://api.github.com/users/profdouglasbarcelos", function(data) {        
       $.get( "https://api.github.com/users/profdouglasbarcelos/repos", function(data) {        
    //    $.get( "https://api.github.com/repos/profdouglasbarcelos/Asp.Net", function(data) {        
    //    $.get( "https://api.github.com/repos/profdouglasbarcelos/Asp.Net/tags", function(data) {        
    
        console.log(data);

        
        var i = 1;
        str +="<div class='row'>";
        //Apresentando os nomes e descricoes
        data.forEach(repo => {
            console.log(repo.name + ", Descrição: " + repo.description);
            if(i%3 == 0){
                // debugger;
                createRepoCard(repo.name, repo.description, repo.html_url);
                str +="</div>";
                str +="<div class='row'>";
            }
            else{
                // debugger;
                createRepoCard(repo.name, repo.description, repo.html_url);                
            }
            
            i++;
        });
        str +="</div>";
        divRepositoriosDeck.append(str);
    });
});