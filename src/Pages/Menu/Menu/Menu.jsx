import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";

const Menu = () => {

    const [menu] = useMenu();
    const desert = menu.filter(item => item.category === 'desert');
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
            <SectionTitle
                subHeading="Don't Miss"
                heading="Today's Offer"
            />
        </div>
    );
};

export default Menu;