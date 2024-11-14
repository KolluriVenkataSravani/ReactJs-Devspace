import Contact from "../Contact"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"

describe("Contact Us Page test cases",()=>{
    it("Should load Contact us component",()=>{
        render(<Contact />);
        const heading=screen.getByRole("heading");
        //Assertion
        expect(heading).toBeInTheDocument();
    });
    
    it("Should load button inside contact us component",()=>{
        render(<Contact />);
        const button=screen.getByRole("button");
        //Assertion
        expect(button).toBeInTheDocument();
    });
    
    it("Should load inputName inside contact us component",()=>{
        render(<Contact />);
        const inputName=screen.getByPlaceholderText("name");
        //Assertion
        expect(inputName).toBeInTheDocument();
    });
    
    it("Should load 2 input boxes inside contact us component",()=>{
        render(<Contact />);
        //Querying
        const inputBoxes=screen.getAllByRole("textbox");
        //Assertion
        expect(inputBoxes.length).toBe(2);
    });
});
