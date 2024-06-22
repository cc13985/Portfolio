import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/ourchoice.png";
import projImg2 from "../assets/img/foodzoo.png";
import projImg3 from "../assets/img/froggyducky.png";
import projImg4 from "../assets/img/playte.png";
import projImg5 from "../assets/img/mm.png";
import projImg6 from "../assets/img/ibobby.png";
import projImg7 from "../assets/img/forecasts.png";
import projImg8 from "../assets/img/studyterp.png";
import projImg9 from "../assets/img/coffeespacecat.png";
import projImg10 from "../assets/img/tom.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Coffee Space Cats",
      description: "JavaScript",
      imgUrl: projImg9,
    },
    {
      title: "T.O.M.",
      description: "Python, Django, HTML, CSS, JavaScript",
      imgUrl: projImg10,
    },
    {
      title: "Forecasts by the Campfire",
      description: "pandas, Jupyter, Figma",
      imgUrl: projImg7,
    },
    {
      title: "Study Terp",
      description: "HTML, CSS, JavaScript",
      imgUrl: projImg8,
    },
    {
      title: "OurChoice",
      description: "HTML, CSS, JavaScript",
      imgUrl: projImg1,
    },
    {
      title: "The Food Zoo",
      description: "HTML, CSS, JavaScript",
      imgUrl: projImg2,
    },
    {
      title: "Froggy & Ducky",
      description: "HTML, JavaScript, GSAP, Tiled",
      imgUrl: projImg3,
    },
    {
      title: "Playte",
      description: "Swift, XCode, CreateML",
      imgUrl: projImg4,
    },
    {
      title: "Maryland Munch",
      description: "Thunkable, Figma",
      imgUrl: projImg5,
    },
    {
      title: "IB Obby",
      description: "Lua, Roblox Studio",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>A showcase of my most recent projects.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Visuals</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Descriptions</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Awards & Activities</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                    <div class="description">
                        <h2>Coffee Space Cats</h2>
                        <ul>
                          <li>This VS Code extension decorates your IDE with a cool, modern theme. It's all about coffee cats in space! </li>
                        </ul>
                      </div>
                    <div class="description">
                        <h2>Tabby of Management (T.O.M.)</h2>
                        <ul>
                          <li>T.O.M. is a talking cat that uses Google's Gemini Arificial Intelligence API and a text-to-speech feature to generate 
                            personalized motivational quotes, daily schedules, and a study space for each user and reads it out to them. </li>
                        </ul>
                      </div>
                      <div class="description">
                        <h2>Forecasts By the Campfire</h2>
                        <ul>
                          <li>Get personalized housing and financial advice by sitting at the campfire with our cute creatures and discovering who you're most like! 
                            This app takes in data surrounding the climate, frequency of natural disasters, and other geographical features affect housing preferences. 
                            After extracting and analyzing data, an interactive quiz is generated and assigns each user a unique creature that best matches their descriptions 
                            and provides them advice on next steps to take regarding their financial and homeowner decisions. </li>
                        </ul>
                      </div>
                      <div class="description">
                        <h2>Study Terp</h2>
                        <ul>
                          <li>Study Terp is a study buddy matchmaker for students at the University of Maryland. Through this revolutionary social study platform, 
                            students are matched with study buddies based on classes, schedules, majors/minors, study habits, and overall compatibility. 
                            Study Terp aims to foster a supportive and collaborative learning environment on demand for every student by connecting them with like-minded peers. 
                            Say goodbye to solo study struggles and hello to a brighter, more interactive academic journey. Your perfect study buddy is just a click away!</li>
                        </ul>
                      </div>
                      <div class="description">
                        <h2>OurChoice</h2>
                        <ul>
                          <li>OurChoice is an educational website on the history of abortion and its restrictions in the US. </li>
                        </ul>
                      </div>
                      <div class="description">
                        <h2>The Food Zoo</h2>
                        <ul>
                          <li>The Food Zoo is an interactive website that teaches children the basics of nutrition based on a quiz that retrieves 
                            information about their current diet. </li>
                        </ul>
                      </div>
                      <div class="description">
                        <h2>Froggy & Ducky</h2>
                        <ul>
                          <li>Froggy & Ducky is a Fireboy & Watergirl inspired game where the Froggy, controlled by WASD keys, and the Ducky, 
                            led by arrow keys, have to maneuver past dangerous crystals to reach their teleportation platform and advance to the next level. </li>
                        </ul>
                      </div>
                      <div class="description">
                        <h2>Playte</h2>
                        <ul>
                          <li>Playte is an iOS app that uses a machine learning model trained on a dataset of over 750+ images to classify a 
                            user's inputted food and ingredients. The model will predict what recipes are possible based on the given images, 
                            allowing the user to reduce waste and create a delicious meal from existing materials.</li>
                        </ul>
                      </div>
                      <div class="description">
                        <h2>Maryland Munch</h2>
                        <ul>
                          <li>Maryland Munch is a mobile budgeting app designed for students and faculty at UMD. The app features a budgeting system 
                            that tracks a user's expenses, a map that locates nearby restaurants and dining halls, and a trending page with student 
                            reviews and popular, affordable meals. </li>
                        </ul>
                      </div>
                      <div class="description">
                        <h2>IB Obby</h2>
                        <ul>
                          <li>IB Obby is a Roblox obstacle course game created for students in the International Baccalaureate Diploma Programme. 
                            The game uses different styles of obstacles, including trivia on the IB Program, to test players. </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                        <h2>Bitcamp 2024, Best DEI Hack</h2>
                        <p>Forecasts by the Campfire</p>
                        <h2>Technica 2023, Most Creative Use of Github</h2>
                        <p>Study Terp</p>
                        <h2>Garuda Hacks 2022, 2nd Best Best All Girls Hack</h2>
                        <p>The Food Zoo</p>
                        <h2>Technica Fellowship 2023</h2>
                        <p>Froggy & Ducky</p>
                        <h2>Kode With Klossy AI/ML Scholar 2023</h2>
                        <p>Playte</p>
                        <h2>Kode With Klossy Web Development Scholar 2022</h2>
                        <p>OurChoice</p>
                        <h2>Jane Street WiSE Program 2023</h2>
                        <p></p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="background"></img>
    </section>
  )
}