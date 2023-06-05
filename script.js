function eurosParaContos(){
    let euro = document.getElementById('euroInput').value
    let conto = euro / 5;
    conto = conto.toFixed(2)
    document.getElementById('contos').innerText = `${euro} euros equivalem a ${conto} contos`  
}
function contosParaEuros(){
    let conto = document.getElementById('contoInput').value
    let euro  = conto * 5;
    
    document.getElementById('euros').innerText = `${conto} contos equivalem a ${euro} euros`  
}