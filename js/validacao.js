
function valida(input){ // função que recebe os inputs
     
    const dataTipo = input.dataset.tipo //usa o 'dataset' para receber o data-attribut do input    
    
    if(input.validity.valid){//propriedade valid do input. Se estiver 'true' tem conteúdo, senão está vazio.
    
        input.parentElement.classList.remove('input-container--invalido'); //remove a classe css
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = ''; //add vazio ao conteúdo da tag span
                
    }else{
        
        input.parentElement.classList.add('input-container--invalido'); //add a classe css ao elemento pai do input
        input.parentElement.querySelector('.input-mensagem-erro').innerHTML = mostraMensagemDeErro(dataTipo, input); //add a mensagem ao conteúdo da tag span
       
    }
    
}

//objeto que contém um vetor com os tipos de erro do atributo validity
const tipoDeErro = [
    'typeMismatch',
    'valueMissing'    
]


//objeto que contém as mensagens para cada tipo de erro de cada data-attribute do form
const mensagemDeErro ={
    firstName: {
        valueMissing: 'First Name cannot be empty'
    },

    lastName: {
        valueMissing: 'Last Name cannot be empty'
    },

    email: {        
        typeMismatch: 'Look like this is not an email',
        valueMissing: 'Email cannot be empty.'
    },

    password: {
        valueMissing: 'Password cannot be empty'        
    }
}

function mostraMensagemDeErro(dataTipo, input){
    let mensagem = '';

    tipoDeErro.forEach(erro => { //chama o objeto 'tipoDeErro' e intera pelos seus elementos

        if(input.validity[erro]){//se ouver algum erro no atributo validity do input, que coincida com um dos elementos 
                                 // do objeto 'tipoDeErro'...
                                 
            mensagem = mensagemDeErro[dataTipo][erro]; //... passa ao objeto 'mensagemDeErro' o dataTipo e o erro, 
                                                       //para receber a mensagem correta.
        }
        
    });

    return mensagem;
}
export { valida };

