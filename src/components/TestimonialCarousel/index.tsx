import Slider from "react-slick";
import quoteIcon from "../../assets/svg/quoteIcon.svg";
import nextIcon from "../../assets/png/rightArrow.png";
import prevIcon from "../../assets/png/leftArrow.png";
import "./TestimonialCarousel.scss";

const testimonials = [
    {
        text: "Thank you, KC, for all the support you have provided right from shortlisting the university to the visa interview preparations. I really admire the attention and support of the KC Counsellors.",
        name: "Mandar Suryawanshi",
        university: "Northeastern University, USA",
    },
    {
        text: "The team made the entire process very easy. Everyone is very helpful and cooperative throughout. I am thankful to KC Sadar Team for making my dream come true.",
        name: "Aarohi Sighel",
        university: "University of South Australia, Australia",
    },
    {
        text: "Helped with counseling and making the right decision...great staff..would definitely recommend it to anyone planning to go abroad for studies..",
        name: "Susan Mendonca",
        university: "Conestoga College, Canada",
    },
    {
        text: "Amazing experience and guidance...",
        name: "John Doe",
        university: "Harvard University, USA",
    },
];


function NextArrow(props:any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", marginBottom: "20px" }}
        onClick={onClick}
      >
        <img style={{
            marginBlock: "20px"
        }} src={nextIcon} alt="next"/>
      </div>
    );
  }

// function NextArrow(props:any) {
//     const { className, style, onClick } = props;
//     const isMobile = window.innerWidth < 990;
//     // const position:any = {
//     //     position: "absolute",
//     //     left: "250px",
//     //     bottom: "150px",
//     // }
//     const position:any = {
//         position: "absolute",
//         left: "1600px",
//         bottom: "150px",
//     }
//     return (
//       <div
//         className={className}
//         style={{ ...style, 
//             display: "block", 
//             position: "relative"
//         }}
//         onClick={onClick}
//       >
//         <img style={position} src={nextIcon} alt="next"/>
//       </div>
//     );
//   }

  function PrevArrow(props:any) {
    const { className, style, onClick } = props;
    const position:any  = {
        position: "absolute",
        top: "240px",
        right: "2px"
    }
    return (
      <div
        className={className}
        style={{ ...style, 
            display: "block",
            position: "relative"
         }}
        onClick={onClick}
      >
        <img style={{
            position: "absolute",
            top: "240px",
            right:"10%",
        }} src={prevIcon} alt="next"/>
      </div>
    );
  }

const RDCarousel = () => {
    const settings = {
        dots: true,
        centerMode: true,
        centerPadding: "10px",
        slidesToShow: 3,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow />,
        infinite: true,
        speed: 500,
        responsive: [
            {
                breakpoint: 990,
                settings: {
                    slidesToShow: 1,
                    centerPadding: "0px",
                },
            },
        ],
    };

    return (
        <div className="carousel-container slider-container">
            <h2 className="carousel-container_title">Our Students Love Us</h2>
            <Slider {...settings}>
                {testimonials.map((item, index) => (
                    <div>
                        <div className="carousel-card">
                            <div className="carousel-card_inner">
                                <img className="carousel-card_inner_image" src={quoteIcon} />
                                <p className="carousel-card_inner_text">{item.text}</p>
                                <p className="carousel-card_inner_name">{item.name}</p>
                                <p className="carousel-card_inner_university">{item.university}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default RDCarousel;
