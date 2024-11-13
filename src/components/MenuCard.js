import { CDN_URL } from "../utils/constants";

const MenuCard = (props) => {
    const { itemData } = props;
    const {
        name,
        imageId,
        defaultPrice,
        price,
        ratings: { aggregatedRating: { rating } = {} } = {},
        itemAttribute: { vegClassifier } = {}
    } = itemData;

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alt="item-logo" src={CDN_URL + imageId} />
            <h3 className="font-bold py-4 text-lg">{name}</h3>
            <h4>{vegClassifier === "VEG" ? "Veg" : "Non-Veg"}</h4>
            <h4>{rating ? `${rating} stars` : "No ratings yet"}</h4>
            <h4>
                {defaultPrice ? `₹${defaultPrice / 100}` : price ? `₹${price / 100}` : "Price not available"}
            </h4>
        </div>
    );
}

export const vegLabel = (MenuCard) => {
    return (props) => {
        return (
            <div>
                <label className="absolute bg-black text-white m-2 p-2 rounded-lg">Veg</label>
                <MenuCard {...props} />
            </div>
        );
    };
};


export default MenuCard;
