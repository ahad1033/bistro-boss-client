import Cover from "../../Shared/Cover/Cover";
import menuImg from '../../../assets/menu/banner3.jpg'
import PopularMenu from "../../Home/PopularMenu/PopularMenu";

const Menu = () => {
    return (
        <div>
            <Cover
                img={menuImg}
                title="our menu"
            />
            <PopularMenu />
        </div>
    );
};

export default Menu;