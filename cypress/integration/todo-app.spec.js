describe("Test frontend-mentor-todo-app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });
  it("can display default items", () => {
    cy.get("[class$=TaskList] li").should("have.length", 6);
  });
  it("can add new todo items", () => {
    const newItem = "Write a Cypress test";
    cy.get("#addTaskField").type(`${newItem}{enter}`);
    cy.get("[class$=TaskList] li")
      .should("have.length", 7)
      .first()
      .contains(newItem);
  });
});
