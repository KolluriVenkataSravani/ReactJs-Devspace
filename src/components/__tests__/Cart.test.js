const { act } = require("react-dom/test-utils");
import RestaurantMenu from "../RestaurantMenu"
import { fireEvent, render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockResMenu.json"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore"
import Header from "../Header"
import "@testing-library/jest-dom"
import Cart from "../Cart"

global.fetch=jest.fn(()=>
    Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    })
)
it("Should load Restaurant Menu Component",async ()=>{
    await act(async ()=> render(
        <Provider store={appStore}>
            <BrowserRouter>
                <Header />
                <RestaurantMenu />
                <Cart />
            </BrowserRouter>
        </Provider>));
    const accordionHeader=screen.getByText("New Thin n Crispy Pizzas(6)");
    fireEvent.click(accordionHeader);
    const foodItem=screen.getAllByTestId("foodItems");
    expect(foodItem.length).toBe(6);
    const addBtn=screen.getAllByRole("button",{name: "Add +"});
    fireEvent.click(addBtn[0]);
    expect(screen.getByText("Cart(1 items)")).toBeInTheDocument();
    fireEvent.click(addBtn[1]);
    expect(screen.getByText("Cart(2 items)")).toBeInTheDocument();
    const foodItems=screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(8); //6 already present in menu, 2 added to cart
    fireEvent.click(screen.getByRole("button",{name: "Clear Cart"}));
    expect(screen.getAllByTestId("foodItems").length).toBe(6);
    expect(screen.getByText("Cart is empty. Add items to the cart!")).toBeInTheDocument();
});