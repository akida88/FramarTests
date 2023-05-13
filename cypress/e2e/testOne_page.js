class Page {
    static visit() {
        const url = "https://mind-wend-913065.framer.app/";
        cy.visit(url);
    }

    static contains(text) {
        cy.contains(text).click();
    }
}



export default Page