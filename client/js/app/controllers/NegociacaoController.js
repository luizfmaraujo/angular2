class NegociacaoController {

    constructor(event) {
        let $ = document.querySelector.bind(document);
        this._inputQuantidade = $('#quantidade');
        this._inputData = $('#data');
        this._inputValor = $('#valor');
    }

    adiciona(event) {

        event.preventDefault();

        let helper = new DateHelper();
        let data = helper.textoParaData(this._inputData.value);

        let negociacao = new Negociacao(
            data,
            this._inputQuantidade.value,
            this._inputValor.value
        );
        let diaMesAno = helper.dataParaTexto(negociacao.data); 
        console.log(negociacao);
        console.log(diaMesAno);
    }

}