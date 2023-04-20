import Container from "../Components/Container";
import Contain from "../Components/Contain";
import Service from "../Components/Service";
import Instructors from "../Components/Instructors";
import Schedule from "../Components/Schedule";
import Blog from "../Components/Blog";
import Cards from "../Components/Card";

function Home({ cardBorder, imageBorder, responsiveImg }) {
  return (
    <>
      <Container />
      <Cards />
      <Contain cardBorder={cardBorder} responsiveImg={responsiveImg} />
      <Service />
      <Instructors imageBorder={imageBorder} />
      <Schedule />
      <Blog />
    </>
  );
}

export default Home;
