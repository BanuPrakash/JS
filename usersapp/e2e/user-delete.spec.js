describe("testing user delete operations", () => {
    it("delete user by button click", () => {
        cy.visit("http://localhost:3000");

        cy.get("button")
        // .first()
        .eq(3)
        .click()
        .get(".row").then(rows => {
            expect(rows.length).to.equal(5);
        })
    })
})