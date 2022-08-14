import { useState } from "react";
import styled from "styled-components";
import { useStateValue } from "../StateProvider";
import Button from "./Button";
import { motion } from "framer-motion";

const templates = [
 {image: "https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/370/persistent-resource/stockholm-resume-templates.jpg"},
 {image: "https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/441/persistent-resource/sydney-resume-templates.jpg"},
 {image: "https://s3.resume.io/cdn-cgi/image/width=380,dpr=1,format=auto/uploads/local_template_image/image/1826/persistent-resource/copenhagen-resume-templates.jpg"}
];

const TemplatesWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-start;
  margin-top: 25px;
  padding: 0.5em;
  flex-wrap: wrap;
  background-color: papayawhip;
`;

const Template = styled.div`
  width: 350px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  margin: 2rem;
  border-radius: 15px;
  padding: 30px;
  background-color: ${props => props.currentColor || ""};
  position: relative;
`;

const Image = styled.img`
    width: 100%;
    object-fit: cover;
`;

const SubTitle = styled.h3`
    text-align: center;
    font-weight: bold;
    font-family: 'Roboto', sans-serif;
    margin-top: 80px;
    font-size: 1.6em;
    border-bottom: 2px solid ${props => props.currentColor || "black"};
    padding: 1em;
`;

const Templates = () => {
  const { currentColor } = useStateValue();
  const [showUseTemplateButton, setShowUseTemplateButton] = useState(false);

  return (
    <>
    <SubTitle currentColor={currentColor}>
    Choose template
    </SubTitle>

    <TemplatesWrapper>
        {templates.map((template, index) => (
        <Template currentColor={currentColor} onMouseEnter={() =>setShowUseTemplateButton(true)} onMouseLeave={() =>setShowUseTemplateButton(false)} key={index}>
            <Image src={template.image}/>
            {showUseTemplateButton && (
            <motion.div
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, type: 'tween' }}
            style={{"position": "absolute", "top": "40%", "left": "30%"}}
          >
            <Button currentColor={currentColor}>Use This Template</Button>
          </motion.div>
            )}
        </Template>
        ))}

    </TemplatesWrapper>
    </>
  )
}

export default Templates;