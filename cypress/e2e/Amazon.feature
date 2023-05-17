#language: pt

Funcionalidade: Comprar item no site da amazon

    Cenario: Realizar compra no site da amazon
        Dado que navego ate o site da amazon
        E realizo o login com o usuario "scan.teste.2019@gmail.com" e senha "Scansource2022"
        Quando pesquiso um produto da marca "Nike"
        E adiciono ao carrinho
        E fecho o pedido mantendo o endereço atual
        Quando seleciono a forma de pagamento boleto e gero o boleto para pagamento
        Entao valido os detalhes de confirmacao de sucesso do pedido