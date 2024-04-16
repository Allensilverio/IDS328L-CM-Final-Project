import { render, screen } from "@testing-library/react";
import Home from "../../pages";

describe("SignIn Page Renders OK", () => {
    // Check if the "Login" title is rendered
    it("should render the Login title", () => {
        render(<Home />);
        expect(screen.getByText("Login")).toBeInTheDocument();
    });

    // Check if the "Forgot your password?" link is rendered
    it("should render the 'Forgot your password?' link", () => {
        render(<Home />);
        expect(screen.getByText("Forgot your password?")).toBeInTheDocument();
    });

    // Check if the email input is rendered
    it("should render an email input", () => {
        render(<Home />);
        expect(screen.getByPlaceholderText("Your email address")).toBeInTheDocument();
    });

    // Check if the password input is rendered
    it("should render a password input", () => {
        render(<Home />);
        expect(screen.getByPlaceholderText("Your password")).toBeInTheDocument();
    });

    // Check if the "Sign in" button is rendered
    it("should render a 'Sign in' button", () => {
        render(<Home />);
        expect(screen.getByText("Sign in")).toBeInTheDocument();
    });

    // Check if the "Don't have an account? Sign up" link is rendered
    it("should render the 'Don't have an account? Sign up' link", () => {
        render(<Home />);
        expect(screen.getByText("Don't have an account? Sign up")).toBeInTheDocument();
    });
});

describe("Login Works", () => {
    
});
