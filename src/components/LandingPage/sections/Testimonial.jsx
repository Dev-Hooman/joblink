import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testomonial = () => {


    const CustomPrevArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-arrow" onClick={onClick}>
                <FaArrowLeft />
            </div>
        );
    };

    const CustomNextArrow = (props) => {
        const { onClick } = props;
        return (
            <div className="custom-arrow" onClick={onClick}>
                <FaArrowRight />
            </div>
        );
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };


    return (
        <div className='w-3/4 m-auto pb-[14px]'>
            <div className="mt-20">
                <Slider {...settings} className="slick-slider-spacing">
                    {data.map((d) => (
                        <div key={d.name} className="bg-white h-[420px] text-black rounded-xl mx-[14px] shadow-lg shadow-gray-700">
                            

                       
                        </div>
                    ))}
                </Slider>
            </div>

        </div>
    );
}


const data = [
    {
        name: `John Morgan`,
        img: `/students/John_Morgan.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        name: `Ellie Anderson`,
        img: `/students/Ellie_Anderson.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        name: `Nia Adebayo`,
        img: `/students/Nia_Adebayo.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        name: `Rigo Louie`,
        img: `/students/Rigo_Louie.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },
    {
        name: `Mia Williams`,
        img: `/students/Mia_Williams.jpg`,
        review: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
    },

];

export default Testomonial;
https://github.com/MaksymRudnyi/turorials/tree/swipper-js/client/src