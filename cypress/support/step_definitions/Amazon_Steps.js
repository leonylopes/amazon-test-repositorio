import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Amazon_PO from "../page_objects/Amazon_PO";

const amazonPage = new Amazon_PO();

Given('que navego ate o site da amazon', () => {
	amazonPage.navegarToAmazonSite();
});

When('realizo o login com o usuario {string} e senha {string}', (usuario,senha) => {
	amazonPage.clicarFazerLogin();
    amazonPage.digitarUsuario(usuario);
    amazonPage.clicarContinueLogin();
    amazonPage.digitarSenha(senha);
    amazonPage.clicarRealizarLogin();
});

When('pesquiso um produto da marca {string}', (marca) => {
	amazonPage.pesquisarMarcaDesejada(marca);
    amazonPage.clicarParaPesquisar();
});

When('adiciono ao carrinho', () => {
	amazonPage.selecionarItem();
    amazonPage.clicarAdicionarAoCarrinho();
});

When('fecho o pedido mantendo o endereço atual', () => {
	amazonPage.clicarParaSeguirComPagamento();
    amazonPage.selecionarEndereco();
});

When('seleciono a forma de pagamento boleto e gero o boleto para pagamento', () => {
    cy.wait(8000);
	amazonPage.selecionarFormaPagamento();
    amazonPage.confirmarFormaPagamento();
    cy.wait(8000);
    amazonPage.clicarConfirmarPagamento();
});

Then('valido os detalhes de confirmacao de sucesso do pedido', () => {
	cy.wait(8000);
    amazonPage.mensagemSucessoPedido('Obrigado, Seu pedido foi feito e será processado após o pagamento do Boleto');
});
