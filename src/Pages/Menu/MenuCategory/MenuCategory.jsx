

const MenuCategory = ({ items }) => {


    return (
        <div>
            <div className="grid md:grid-cols-2 gap-10">
                {
                    popular.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    />)
                }
            </div>
        </div>
    );
};

export default MenuCategory;