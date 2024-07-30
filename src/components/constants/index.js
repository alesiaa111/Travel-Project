import FullScreenStart from "../../images/FullScreenStart.png";
import event from "../../images/event.png";
import team_building from "../../images/team_building.png";
import tour1 from "../../images/tour1.png";

export const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: true,
  fade: false,
};

export const slides = [
  {
    title: "Организация сплавов в Гомеле",
    phone1: "+375(25) 655-54-05",
    phone2: "+375(29) 114-52-20",
    imageUrl:FullScreenStart,
  },
  {
    title: "Тематические сплавы",
    phone1: "+375(25) 655-54-05",
    phone2: "+375(29) 114-52-20",
    imageUrl:event,
  },
  {
    title: "Тимбилдинг на воде",
    phone1: "+375(25) 655-54-05",
    phone2: "+375(29) 114-52-20",
    imageUrl: team_building,
  },
  {
    title: "Туры в Карелию",
    phone1: "+375(25) 655-54-05",
    phone2: "+375(29) 114-52-20",
    imageUrl: tour1,
  },
];
