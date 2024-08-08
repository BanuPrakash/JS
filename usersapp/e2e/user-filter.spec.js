describe("testing user delete operations", () => {
    it("delete user by button click", () => {
        cy.visit("http://localhost:3000");

        cy.get("input[placeholder='search by name'")
        .type("Geller")
        .get(".row").then(rows => {
            expect(rows.length).to.equal(2);
        })
    })
})