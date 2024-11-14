import { fireEvent,render,screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/mockResListData"
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"

global.fetch=jest.fn(()=>{
    return Promise.resolve({
        json: ()=> {
            return Promise.resolve(MOCK_DATA);
        }
    })
})
it("Should render the body component with search", async ()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>));
    const searchButton=screen.getByRole("button",{name: "Search"});
    expect(searchButton).toBeInTheDocument();
});

it("Should search Res List for burger text input", async ()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>));
    const cardsBeforeSearch=screen.getAllByTestId("resCard");
    expect(cardsBeforeSearch.length).toBe(8);
    const searchButton=screen.getByRole("button",{name: "Search"});
    const searchInput=screen.getByTestId("searchInput");
    fireEvent.change(searchInput,{target: {value: "burger"}});
    fireEvent.click(searchButton);
    //screen should load 4 cards
    const cards=screen.getAllByTestId("resCard");
    expect(cards.length).toBe(1);
});

it("Should filter top rated restaurant", async ()=>{
    await act(async()=>render(
        <BrowserRouter>
            <Body />
        </BrowserRouter>));
    const cardsBeforeFilter=screen.getAllByTestId("resCard");
    expect(cardsBeforeFilter.length).toBe(8);
    const topRatedButton=screen.getByRole("button",{name: "Top Rated Restaurants"});
    fireEvent.click(topRatedButton);
    //screen should load 4 cards
    const cards=screen.getAllByTestId("resCard");
    expect(cards.length).toBe(4);
});