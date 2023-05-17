
class Amazon_PO{
    elements = {
        url : () => cy.visit('https://www.amazon.com.br/'),
        clicarLogin : () => cy.get('#nav-link-accountList'),
        usuario : () => cy.get('#ap_email'),
        clicarContinueLogin : () => cy.get('.a-button-inner > #continue'),
        senha : () => cy.get('#ap_password'),
        clicarSubmitLogin : () => cy.get('#signInSubmit'),
        pesquisarProduto : () => cy.get('#twotabsearchtextbox'),
        clicarPesquisar : () => cy.get('#nav-search-submit-button'),
        escolherItem : () => cy.get('img[alt="A marca da vitória: A autobiografia do criador da Nike"]'),
        adicionarCarrinho : () => cy.get('#add-to-cart-button'),
        seguirPagamento : () => cy.get('input[value="Proceed to checkout"]'),
        selecionarEndereco : () => cy.get('[data-testid="Address_selectShipToThisAddress"]'),
        escolherForma : () => cy.xpath('(//div[@class="a-radio"])[1]'),
        continuarForma : () => cy.xpath('//span[@class="a-button-inner"]//input[@name="ppw-widgetEvent:SetPaymentPlanSelectContinueEvent"]'),
        confirmarCompra : () => cy.get('input[aria-labelledby="bottomSubmitOrderButtonId-announce"]'),
        mensagemSucesso : () => cy.xpath("//h4")
    }

    navegarToAmazonSite(){
        this.elements.url();
    }

    clicarFazerLogin(){
        this.elements.clicarLogin().click();
    }

    digitarUsuario(usuario){
        this.elements.usuario().type(usuario);
    }

    clicarContinueLogin(){
        this.elements.clicarContinueLogin().click();
    }

    digitarSenha(senha){
        this.elements.senha().type(senha);
    }

    clicarRealizarLogin(){
        this.elements.clicarSubmitLogin().click();
    }

    pesquisarMarcaDesejada(marca){
        this.elements.pesquisarProduto().type(marca);
    }

    clicarParaPesquisar(){
        this.elements.clicarPesquisar().click();
    }

    selecionarItem(){
        this.elements.escolherItem().click();
    }

    clicarAdicionarAoCarrinho(){
        this.elements.adicionarCarrinho().click();
    }

    clicarParaSeguirComPagamento(){
        this.elements.seguirPagamento().click();
    }

    selecionarEndereco(){
        this.elements.selecionarEndereco().click();
    }

    selecionarFormaPagamento(){
        this.elements.escolherForma().click();
    }

    confirmarFormaPagamento(){
        this.elements.continuarForma().click();
    }

    clicarConfirmarPagamento(){
        this.elements.confirmarCompra().click();
    }

    mensagemSucessoPedido(mensagem){
        this.elements.mensagemSucesso().contains(mensagem);
    }
}
export default Amazon_PO;