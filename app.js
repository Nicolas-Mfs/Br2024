function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");

   let campoPesquisa = document.getElementById
   ("campo-pesquisa").value

   if (campoPesquisa == "") {
    section.innerHTML = "<p>Nada foi encontrado</p>"
         return
   }
   campoPesquisa = campoPesquisa.toLowercase()
   
   console.log(campoPesquisa);
    
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    
    for (let dado of dados) {
        titulo = dado.titulo.toLowercase() 
        descricao = dado.descricao.toLowercase()
        tags = dado.tags.toLocaleLowerCase
        if (titulo.includes(campoPesquisa)|| descricao.includes(campoPesquisa)|| tags.includes(campoPesquisa)) {
            resultados += `
        <div class="item-resultado">
            <h2>
                <a href="#" target="_blank">${dado.titulo}
                </a>
            </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                  <a href=${dado.link}target="_blank">para mais informações acesse Aqui</a> 
           </div>
           
    `;
        }
    }
    if (!resultados) { 
        resultados = "<p>Nada foi encontrado</p>" 
    }
    console.log(dado.titulo.includes(campoPesquisa)) 
    section.innerHTML = resultados;
    console.log("clicou"); }