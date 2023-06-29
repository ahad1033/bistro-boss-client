import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import dessertImg from '../../../assets/menu/dessert-bg.jpeg'
import pizzaImg from '../../../assets/menu/pizza-bg.jpg'
import saladImg from '../../../assets/menu/salad-bg.jpg'
import soupImg from '../../../assets/menu/soup-bg.jpg'
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
import OrderFoodButton from "../../../Components/OrderFoodButton/OrderFoodButton";

const Menu = () => {

    const [menu] = useMenu();
    const dessert = menu.filter(item => item.category === 'dessert');
    const soup = menu.filter(item => item.category === 'soup');
    const salad = menu.filter(item => item.category === 'salad');
    const pizza = menu.filter(item => item.category === 'pizza');
    const offered = menu.filter(item => item.category === 'offered');

    return (
        <div>
            <Cover
                img={menuImg}
                title="our menu"
            />
            {/* main cover */}
            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's Offer"
            />
            {/* offered menu */}
            <MenuCategory
                items={offered}
            />
            <OrderFoodButton />
            {/* desert menu items */}
            <MenuCategory
                items={dessert}
                title="dessert"
                img={dessertImg}
            />
            <OrderFoodButton />
            {/* Pizza items */}
            <MenuCategory
                items={pizza}
                title={"pizza"}
                img={pizzaImg}
            />
            <OrderFoodButton />
            {/* Salad items */}
            <MenuCategory
                items={salad}
                title={"salad"}
                img={saladImg}
            />
            <OrderFoodButton />
            {/* soup items */}
            <MenuCategory
                items={soup}
                title={"soup"}
                img={soupImg}
            />
            <OrderFoodButton />
        </div>
    );
};

export default Menu;