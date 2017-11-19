var divRepositoriosDeck = $("#repoCardDeck");
var str = "";

function createRepoCard(repoName, repoDesc, repoUrl, repoForks, repoStars, repoWatchers){
    str +=
    "<div class='col-sm-4  d-flex align-items-stretch mt-3'>"
    +" <div class='card border-primary text-center'>"
    +"  <H4 class='card-header'>" 
    +       repoName
    +"  </H4>"
    +"  <div class='card-body'>"
    +"      <p>"
    +          repoDesc
    +"      </p>"
    +"      <small class='text-muted' style='margin:20px;'>"
    +"          <span class='fa fa-1x fa-star mb-3 sr-icons' style='margin:5px;'>"
    +"              <span style='margin:3px;'>"
    +                   repoStars 
    +"              </span>"
    +"          </span>"
    +"         <span class='fa fa-1x fa-eye mb-3 sr-icons' style='margin:5px;'>"
    +"             <span style='margin:3px;'>"
    +                repoWatchers 
    +"              </span>"
    +"         </span>"
    +"         <span class='fa fa-1x fa-code-fork mb-3 sr-icons' style='margin:5px;'>"
    +"             <span style='margin:3px;'>"
    +                repoForks
    +"              </span>"
    +"         </span>"   
    +"       </small>"
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

        //Criando os cartoes dos repositorios
        var i = 1;
        str +="<div class='row'>";
        
        data.forEach(repo => {
            console.log(
                repo.name 
                + ", Descrição: " + repo.description 
                + ", Forks: " + repo.forks_count 
                + ", Stars: " + repo.stargazers_count
                + ", Watchers: " + repo.watchers_count);
            if(i%3 == 0){
                createRepoCard(repo.name, repo.description, repo.html_url, repo.forks_count, repo.stargazers_count, repo.watchers_count);
                str +="</div>";
                str +="<div class='row'>";
            }
            else{
                createRepoCard(repo.name, repo.description, repo.html_url, repo.forks_count, repo.stargazers_count, repo.watchers_count);
            }
            i++;
        });
        str +="</div>";
        divRepositoriosDeck.append(str);
    });
});