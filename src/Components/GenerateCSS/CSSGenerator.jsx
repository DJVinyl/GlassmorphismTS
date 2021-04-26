import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import ColorPicker from 'material-ui-color-picker'

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

export default function CSSGenerator() {
  const classes = useStyles();

  const [color, setColor] = useState('#05A6FC');
  const [blur, setBlur] = useState(0);
  const [transparency, setTransparency] = useState(0);

  const handleBlur = (event, newValue) => {
    setBlur(newValue);
  };

  const handleTransparency = (event, newValue) => {
    setTransparency(newValue);
  };

  return (
    <div className="css-generator" style={{backgroundColor: color}} >
      <div className="background-color-changer" >
        <p>Background Color:</p>
        <ColorPicker
          name="color"
          value={color}
          onChange={(color) => {
            setColor(color);
          }}
        />
      </div>
      <div className={classes.root}>
        <p>Blur {blur}</p>
        <Slider
          value={blur}
          onChange={handleBlur}
          aria-labelledby="continuous-slider"
        />
        <p>Transparency {transparency}</p>
        <Slider
          value={transparency}
          onChange={handleTransparency}
          aria-labelledby="continuous-slider"
        />
      </div>
    </div>
  );
}
