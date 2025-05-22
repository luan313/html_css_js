function catchProcessandShowValue(){
    //Recebendo os valores:
    const qtf = parseInt(document.getElementById('qtf').value)
    const clatencia = parseFloat(document.getElementById('clatencia').value)
    const ctf = document.getElementById('ctf').value
    let arrayctf = ctf.split(',').map(Number)
    const lb = parseFloat(document.getElementById('lb').value)
    const fghz = parseFloat(document.getElementById('fghz').value)

    //Processando a Latência Total:
    function calculaLatenciaTotal(ciclos_latencia, frequencia){
        frequencia *= 1e9
        const latencia = (ciclos_latencia / frequencia) * 1e9
        
        return latencia.toFixed(2)
    }
    
    //Atribuindo a uma constante:
    const latencia_total = calculaLatenciaTotal(clatencia, fghz)
    
    //Formatando para html:
    const resultado_latencia_total = `<p>Resultado: ${latencia_total} ns</p>`
    
    
    
    
    
    //Processando a Taxa de Transferência:
    function calculaTaxaTransferencia(largura_banda, frequencia){
        frequencia *= 1e9
        
        const taxa = (largura_banda * frequencia) / (8 * 1024 * 1024 * 1024)
        return taxa.toFixed(2)
    }
    
    //Atribuindo a uma constante:
    const taxa_transferencia = calculaTaxaTransferencia(lb, fghz)
    
    //Formatando para html:
    const resultado_taxa_transferencia = `<p>Resultado: ${taxa_transferencia} GB/s</p>`





    //Processando o Tempo de Cada Tarefa:
    function calculaTempoCadaTarefa(ciclos_cada_tarefa, frequencia, quantidade_tarefas_executadas){
        frequencia *= 1e9

        for (let i = 0; i < quantidade_tarefas_executadas; i++){
            ciclos_cada_tarefa[i] /= frequencia
            ciclos_cada_tarefa[i] *= 1e9
           ciclos_cada_tarefa[i] = Number(ciclos_cada_tarefa[i].toFixed(2))
        }

        return ciclos_cada_tarefa
    }

    //Atribuindo a uma variavel:
    arrayctf = calculaTempoCadaTarefa(arrayctf, fghz, qtf) 
    
    //Formatando para html:
    const resultado_cada_tarefa = `<p>Resultado: ${arrayctf.join(' ns, ')} ns</p>`





    //Processando o Tempo Total de Execução:
    function calculaExecucaoTotal(total, atual){
        return total + atual
    }
    
    //Processando a Latência total:
    const tempo_execucao_total = arrayctf.reduce(calculaExecucaoTotal, 0)
    
    //Formatando para html:
    const restultado_execucao_total = `<p>Resultado: ${tempo_execucao_total} ns</p>`





    //Retornando resultados para a interface:
    document.getElementById('resultado1').innerHTML = resultado_latencia_total
    document.getElementById('resultado2').innerHTML = resultado_taxa_transferencia
    document.getElementById('resultado3').innerHTML = resultado_cada_tarefa
    document.getElementById('resultado4').innerHTML = restultado_execucao_total
}
