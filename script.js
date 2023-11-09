function inserir(numero)
{
    var x = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = x + numero;
};

function limpar()
{
    document.getElementById('resultado').innerHTML = "";
};

function voltar()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
    //Substring pega uma determinada localização na string
};

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    //verdadeiro
    {
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
    else
    //falso
    {
        document.getElementById('resultado').innerHTML = "Nada..."
    }
}