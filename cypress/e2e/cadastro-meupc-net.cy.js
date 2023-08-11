describe('Testando MeuPC.NET', () => {
  it('Validando cadastro', () => {

    //Entrando no website escolhido meu pc net
    cy.visit('https://meupc.net')

    //Esperando 1 segundo para  executar as funções abaixo
    cy.wait(1000)

    //Clicando no botão de menu pela classe .navbar-burger
    cy.get('.navbar-burger').click()

    //Clicando no botão de cadastro
    cy.get('ul.menu-list') //Pegando  a ul com a classe .menu-list


    .children('li')  // Pegando os filhos da ul 
    .children('a[href="https://meupc.net/cadastro"]').click() // Pegando o filho que tem o href com o valor https://meupc.net/cadastro

    //Preenchendo o campo nome do cadastro com o valor Kaique Teste
    cy.get('input[name="nome"]').type('Kaique Teste')

    //Preenchendo o campo email do cadastro com o valor johndoe@exemple
    cy.get('input[name="email"]').type('johndoe@exemple')

    //Preenchendo o campo senha do cadastro com o valor 12345678
    cy.get('input[placeholder="Defina uma senha"]').type('12345678')

    //Clicando no checkbox  de aceitar os termos

    cy.get('input[type="checkbox"]').check({ force: true })

   //Clicando no botão de cadastrar

    cy.contains('Cadastrar-ser').click()

  // Verificando se chegamos na tela final do cadastro
  cy.contains('Escolha seu nome de usuario').should('be.visible')

  })
})