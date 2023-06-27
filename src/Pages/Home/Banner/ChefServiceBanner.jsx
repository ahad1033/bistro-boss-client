import img from '../../../assets/home/chef-service.jpg';

const ChefServiceBanner = () => {
    return (
        <div className='height-auto mx-auto p-10 mb-5 flex justify-center items-center rounded-xl' style={{ backgroundImage: `url(${img})`, height: "572px", width: "80%" }}>
            <div className='text-center bg-white lg:px-40 lg:py-24 sm:px-8 rounded-xl'>
                <h3 className='font-semibold uppercase lg:text-5xl sm:text-2xl md:font-bold text-black mb-3'>Bistro Boss</h3>
                <p className='text-black'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
            </div>
        </div>
    );
};

export default ChefServiceBanner;