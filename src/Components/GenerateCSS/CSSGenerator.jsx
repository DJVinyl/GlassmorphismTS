import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import ColorPicker from "material-ui-color-picker";
import TextBox from "../TextBox/TextBox";
import './CSSGenerator.scss'


const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function CSSGenerator() {
  const classes = useStyles();

  // const [color, setColor] = useState("#05A6FC");
  const [blur, setBlur] = useState(0);
  const [transparency, setTransparency] = useState(0);


  const handleBlur = (event, newValue) => {
    setBlur(newValue);
  };

  const handleTransparency = (event, newValue) => {
    setTransparency(newValue);
  };

  return (
    <>
      <div className="css-generator">
        <h2>CSS Generator:</h2>
        <div className="dynamic-glass"
          style= {
            {
              margin: '50px',
              background: `rgba(186, 169, 169, ${transparency})`,
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
              backdropFilter: `blur(${blur}px)`,
              webkitBackdropFilter: `blur(${blur}px)`,
              borderRadius: `10px`,
              border: `1px solid rgba(255, 255, 255, 0.18)`
            }
          }
        >
          <TextBox
            text={
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
            }
          />
          {/* <div className="background-color-changer">
            <p>Background Color:</p>
            <ColorPicker
              name="color"
              value={color}
              onChange={(color) => {
                setColor(color);
              }}
            />
          </div> */}
          <h3> GlassBox Modifiers </h3>
          <div className={classes.root}>
            <p>Blur {blur}</p>
            <Slider
              value={blur}
              onChange={handleBlur}
              aria-labelledby="continuous-slider"
              min={0}
              max={20}
              step={0.25}
            />
            <p>Transparency {transparency}</p>
            <Slider
              value={transparency}
              onChange={handleTransparency}
              aria-labelledby="continuous-slider"
              min={0}
              max={1}
              step={0.1}
            />
            <p></p>
          </div>
        </div>
      </div>
    </>
  );
}
