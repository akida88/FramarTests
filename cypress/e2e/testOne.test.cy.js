import Page from "./testOne_page";

describe("Validate the Website", () => {
   // it("should display products' currency symbol as '$' in the 'Pricing' page", () => {
   //         Page.visit("google.com");
   //         const currentPage =new Page();
   //         currentPage.go("google.com")
   // });

   it("should display products' currency symbol as '$' in the 'Pricing' page", () => {
      Page.visit();
      Page.contains("Pricing");
      cy.get(".framer-5fq1xp.price").should("contain", "$");
   });

   it("should contain 4 questions in the FAQ section from 'Pricing' page", () => {
      Page.visit();
      Page.contains("Pricing");
      cy.get(".framer-15ir2m1.undefined.faq-question").should("have.length", 4);
   });

   it("should display 'visit' button on each card in the 'Many types of components to customize' section", () => {
      Page.visit();
      Page.contains("Components");
      cy.get(".framer-text.framer-styles-preset-1m9bzi2").contains("Many types of components to customize").scrollIntoView();
      cy.get(".framer-text.framer-styles-preset-9us7yb").contains("Visit").should("have.length", 1);
   });

   it("should display 'Sign up' button`s color as 'rgb(255,82,79)'", () => {
      Page.visit();
      Page.contains("Components");
      cy.scrollTo("bottom");
      cy.get("input[type=submit]").should("have.css", "background-color", "rgb(255, 82, 79)");
   });

   it("should blur the background after clicking 'Get the app' button", () => {
      Page.visit();
      cy.get(".framer-15fwyui.undefined.get-app-button").should("be.visible").should("contain", "Get the App").click();
      cy.get("html").should("have.css", "overflow", "hidden");
   });

   it("should display the 'Updates' page after clicking the 'Update' button", () => {
      Page.visit();
      Page.contains("Updates");
      cy.url().should("include", "updates");
   });

   it("should display 'get the app' and 'watch video' one above the other on mobile", () => {
      cy.viewport("iphone-5");
      Page.visit();
      cy.get(".framer-15y7aei").first().should("have.text", "Get the App").next().should("have.text", "Watch video");
   });

   it("should display 3d animation after clicking on 'click to view in 3d' button", () => {
      Page.visit();
      cy.get(".framer-ur0xi9.hidden-72rtr7.hidden-1pu3sxf").invoke('show').contains("Click to view in 3D").click();
   });
});