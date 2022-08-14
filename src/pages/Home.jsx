import styled from "styled-components";
import Button from "../components/Button";
import ThemeSettings from "../components/ThemeSettings";
import { useStateValue } from "../StateProvider";
import { motion } from "framer-motion";

const HomeContentWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SettingsContentWrapper = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
`;

const SubTitle = styled.h2`
  text-align: center;
  padding: 0.5em;
  width: 60%;
  font-size: 2.5em;
  font-family: 'Roboto', sans-serif;
  color: ${props => props.currentMode === "Dark" ? "white" : props.currentColor};

  @media (max-width: 425px) {
    font-size: 1.5em;
    width: 100%;
  }
`;


const Home = () => {
    const { currentColor } = useStateValue();

    return (
        <HomeContentWrapper>

            <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }} 
            transition={{ duration: 1 }}
            style={{"display": "flex", "justifyContent": "center"}}
            >
            <SubTitle>Create a Job-winning resume. Stand out and get hired faster with field-tested resume templates.</SubTitle>
            </motion.div>

            <motion.div
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 0.9 }} 
            >
            <Button  
            currentColor={currentColor}
            >Create My Resume
            </Button>
            </motion.div>

            <SettingsContentWrapper>
            <ThemeSettings />
            </SettingsContentWrapper>
        </HomeContentWrapper>
    )
}

export default Home;