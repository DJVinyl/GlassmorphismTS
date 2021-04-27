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

type rgbColor = {
  r: number;
  g: number;
  b: number;
}

export default function CSSGenerator() {
  const classes = useStyles();

  // const [color, setColor] = useState<string>('#292929')
  const [colorRGB, setColorRGB] = useState<rgbColor>({
    r: 41,
    g: 41,
    b: 41
  })
  const [blur, setBlur] = useState<number>(20);
  const [transparency, setTransparency] = useState<number>(0.1);

  const handleBlur = (event: any, newValue:number|number[]):void => {
    setBlur(newValue as number);
  };

  const handleTransparency = (event: any, newValue:number|number[]):void => {
    setTransparency(newValue as number);
  };

  function hexToRgb(hex:string): any {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
  }

  // const handleColor = (hexColor:string):void => {
  //   const rgbObj = hexToRgb(hexColor);
  //   setColorRGB(rgbObj);
  // }


  return (
    <div className="css-generator">
      <br></br>
      <h2 className="gen-title">CSS Generator:</h2>
      <div
        className="dynamic-glass"
        style={{
          margin: "50px",
          background: `rgba(${colorRGB.r}, ${colorRGB.g}, ${colorRGB.b}, ${transparency})`,
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: `blur(${blur}px)`,
          WebkitBackdropFilter: `blur(${blur}px)`,
          borderRadius: `10px`,
          border: `1px solid rgba(255, 255, 255, 0.18)`,
        }}
      >
        <TextBox
          text={
            `Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer 
            took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
            but also the leap into electronic typesetting, remaining essentially unchanged. 
            It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`
          }
        />
        <div className="background-color-changer">
            <p>Background Color:</p>
            <ColorPicker
              name="color"
              value={colorRGB}
              onChange={(color) => {
                // console.log(color)
                // console.log(hexToRgb(color))
                // setColor(color);
                const rgbObj = hexToRgb(color);
                setColorRGB((prevState) => {
                  return {
                    ...rgbObj
                  }
                })
              }}
            />
          </div>
        <h3 className="css-code-title"> CSS Code For Glass: </h3>
        <section className="css-code">
          <code>
            background: rgba(186, 169, 169, {transparency}),<br></br>
            boxShadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37),<br></br>
            backdrop-filter: blur({blur}px),<br></br>
            -webkit-backdrop-filter: blur({blur}px),<br></br>
            border-radius: 10px,<br></br>
            border: 1px solid rgba(255, 255, 255, 0.18)
          </code>
        </section>

        <h3 className="slider-title"> GlassBox Modifiers </h3>
        <div className={classes.root}>
          <ul>
            <li>
              <p className="slider-titles">Blur</p>
            </li>
            <li>
              <p className="slider-titles">{blur}</p>
            </li>
          </ul>
          <Slider
            value={blur}
            onChange={handleBlur}
            aria-labelledby="continuous-slider"
            defaultValue={blur}
            min={0}
            max={20}
            step={0.25}
          />
          <ul>
            <li>
              <p className="slider-titles">Transparency</p>
            </li>
            <li>
              <p className="slider-titles">{transparency}</p>
            </li>
          </ul>

          <Slider
            value={transparency}
            onChange={handleTransparency}
            aria-labelledby="continuous-slider"
            defaultValue={0.1}
            min={0}
            max={1}
            step={0.1}
          />
        </div>
      </div>
    </div>
  );
}
