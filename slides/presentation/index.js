// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  CodePane,
  Image
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  thinkingReact: require("../assets/thinkingReact.png"),
  logo: require("../assets/react.svg"),
  atlassian: require("../assets/logos/atlassian.png"),
  bbc: require("../assets/logos/bbc.png"),
  cloudfare: require("../assets/logos/cloudfare.png"),
  codeacademy: require("../assets/logos/codeacademy.png"),
  docker: require("../assets/logos/docker.png"),
  dropbox: require("../assets/logos/dropbox.png"),
  ebay: require("../assets/logos/ebay.png"),
  expedia: require("../assets/logos/expedia.png"),
  facebook: require("../assets/logos/facebook.png"),
  imdb: require("../assets/logos/imdb.png"),
  imgur: require("../assets/logos/imgur.png"),
  instagram: require("../assets/logos/instagram.png"),
  netflix: require("../assets/logos/netflix.png"),
  newyorktimes: require("../assets/logos/newyorktimes.png"),
  paypal: require("../assets/logos/paypal.png"),
  pintrest: require("../assets/logos/pintrest.png"),
  reddit: require("../assets/logos/reddit.png"),
  trainline: require("../assets/logos/trainline.png"),
  twitter: require("../assets/logos/twitter.png"),
  uber: require("../assets/logos/uber.png"),
  visa: require("../assets/logos/visa.png"),
  whatsapp: require("../assets/logos/whatsapp.png"),
  yahoo: require("../assets/logos/yahoo.png")
};

preloader(images);

const theme = createTheme({
  primary: "white",
  secondary: "#222222",
  tertiary: "#00D8FF"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes="
            <p>Built by facebook</p>
          ">
          <Heading size={2} textColor="primary">
            React
          </Heading>
          <Image height="200px" src={images.logo}/>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes="
          <p>precurser: react apps. just talking about react.</p>
          <p>slide supposed to be intimidating</p>
          <p>2016: javascript fatigue</p>
          <p>2017: javascript renaissance</p>
          ">
          <Heading size={6} textColor="primary">Ecosystem</Heading>
          <Text margin="1em 0 0" size={1} textColor="primary">
            NodeJS, Express, NPM, Webpack, Webpack Dev Server, Loaders, CommonJS, Flux, Redux, ES6, ES7, Classes, Arrow functions, Spread indicators, Babel, ESlint, Jasmine, Chai, Mocha, Karma
          </Text>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" notes="
          <p>tagline from website.</p>
          ">
          <BlockQuote>
            <Quote>"A javascript library for building  user interfaces"</Quote>
          </BlockQuote>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" notes="
          <p>sometimes for internal apps and just for mobile (twitter)</p>
          ">
          <Heading size={6} textColor="primary">Who's using it...</Heading>
          <Image width="150px" margin="10px"  src={images.atlassian} />
          <Image width="150px" margin="10px"  src={images.bbc} />
          <Image width="150px" margin="10px"  src={images.cloudfare} />
          <Image width="150px" margin="10px"  src={images.codeacademy} />
          <Image width="150px" margin="10px"  src={images.docker} />
          <Image width="150px" margin="10px"  src={images.dropbox} />
          <Image width="150px" margin="10px"  src={images.ebay} />
          <Image width="150px" margin="10px"  src={images.expedia} />
          <Image width="150px" margin="10px"  src={images.facebook} />
          <Image width="150px" margin="10px"  src={images.imdb} />
          <Image width="150px" margin="10px"  src={images.imgur} />
          <Image width="150px" margin="10px"  src={images.instagram} />
          <Image width="150px" margin="10px"  src={images.netflix} />
          <Image width="150px" margin="10px"  src={images.newyorktimes} />
          <Image width="150px" margin="10px"  src={images.paypal} />
          <Image width="50px" margin="10px"  src={images.pintrest} />
          <Image width="150px" margin="10px"  src={images.reddit} />
          <Image width="150px" margin="10px"  src={images.trainline} />
          <Image width="150px" margin="10px"  src={images.twitter} />
          <Image width="150px" margin="10px"  src={images.uber} />
          <Image width="150px" margin="10px"  src={images.visa} />
          <Image width="150px" margin="10px"  src={images.whatsapp} />
          <Image width="150px" margin="10px"  src={images.yahoo} />
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes="
          <p>Components: scaleable, modular, reuseable. get more onto the pros in a minute.</p>
          <p>doesn't care about your stack. With react native can build to mobile devices. Electron allows to be built into software.</p>
          <p>allows for animations like bertrand mentioned with googles material design.</p>
          <p>server side rendering</p>
          ">
          <Heading size={6} textColor="primary">Why{"?"}</Heading>
          <List>
            <ListItem>Component based</ListItem>
            <ListItem>Learn once, write everywhere</ListItem>
            <ListItem>One page applications</ListItem>
            <ListItem>Great for SEO</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" notes="
          <p>example from the react docs</p>
          <p>components as small as possible</p>
          ">
          <Heading size={6} textColor="primary" >Thinking in React</Heading>
          <Image margin="20px 0 0"  src={images.thinkingReact} fit/>
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes="
          <h2>Show demo</h2>
          <p>Container component</p>
          <ul>
            <li>Class</li>
            <li>Methods</li>
            <li>Render function</li>
            <li>JSX</li>
          </ul>
          <p>STATE</p>
          <p>When state is changed, render is triggered. Enter the virtual DOM</p>
          <p>PROPERTIES</p>
          <p>all logic in one place</p>
          <p>not in the example but you can also import css to this file</p>
          ">
          <Heading size={6} textColor="primary" >Components</Heading>
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/container.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary" notes="
          <p>Presentational</p>
          <p>Simple, stateless function</p>
          ">
          <CodePane
            lang="jsx"
            source={require("raw-loader!../assets/presentational.example")}
            margin="20px auto"
          />
        </Slide>
        <Slide transition={["slide"]} bgColor="secondary" textColor="primary">
          <Heading size={2} textColor="primary">
            THE END
          </Heading>
          <Text margin="1em 0 0" size={1} textSize="0.75em" textColor="primary">
            Oh.....these slides were made with React by the way.
          </Text>
        </Slide>
      </Deck>
    );
  }
}
