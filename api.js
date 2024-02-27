const getFact = async () => {
    
    try { 
        div = document.getElementById("factContainer")
        const nodeList = div.childNodes;
        console.log(nodeList)
        let number = nodeList.length
        console.log(number)
        let response =  await fetch('https://cat-fact.herokuapp.com/facts')
        let responseData = await response.json()
        let randomEntry = Math.floor(Math.random() * 5)
        text = responseData[randomEntry].text

        if(number > 0 ){
            oldP = document.getElementById('p')
            oldP.innerText = text 
        }else{
            let p = document.createElement('p')
            p.innerText = text
            p.id = 'p'
            div.appendChild(p) 
        }
       


        
        console.log(nodeList)
        console.log(number)
        return;
        
    }
    catch(err) {
            console.log(err.message)
    }
}
    

