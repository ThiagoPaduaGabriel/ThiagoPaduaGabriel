describe('Teste de Funcionalidade do Botão', () => {
  it('deve exibir uma mensagem quando o botão for clicado', () => {
      // Passo 1: Acessar a página
      cy.visit('http://localhost:3000'); // Substitua pela URL da sua página

      // Passo 2: Encontrar o botão e clicar nele
      cy.get('.btn-enviar') // Substitua pelo seletor real do seu botão
        .click();

      // Passo 3: Confirmar que a mensagem esperada é exibida
      cy.get('#mensagem') // Substitua pelo seletor do elemento da mensagem
        .should('be.visible')
        .and('contain.text', 'Enviado com sucesso!'); // Substitua pelo texto esperado
  });
});
