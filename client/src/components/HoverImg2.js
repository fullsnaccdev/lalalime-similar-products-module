import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const HoverImg2 = ({pic2, swatch2, img2Index, onMouseOver, i2, onMouseMain2, onMouseMainLeave2, mouseClick, cBox}) => {

  return (
    <div className="hoverImg" >
      <div className="nest" >
        {i2 ? <img
          className="hoverMainImg hovPic2"
          src={pic2[img2Index].slice(2,3)}
          alt="Hover Image"
          id="i2"
          onMouseOver={onMouseMain2}
          onMouseOut={onMouseMainLeave2}
        /> : <img
        className="hoverMainImg hovPic2"
        src={pic2[img2Index].slice(3, 4)}
        alt="Hover Image"
        id="i2"
        onMouseOver={onMouseMain2}
        onMouseOut={onMouseMainLeave2}
        />}
        <div className="swatch-bg">
          <button className="svgButton" onClick={mouseClick}><FaAngleLeft className="svgIcon" size={30} color="#7f7f7f" /></button>
          <div className="shield">
          <div  className={cBox ? "slide-left colorBox" : "slide-right colorBox "}>
          {swatch2.map((img, index) => (
              <img
              className={`swatchImg hoverbox${index + 1} img2`}
              src={swatch2[index].slice(1, 2)}
              alt="swatch Image"
              name={index}
              id="img2"
              onMouseOver={(e) => onMouseOver(e)}
              key={index}
            />
            ))}
          </div>
          </div>
          <button className="svgButton rbttn" onClick={mouseClick}><FaAngleRight className="svgIcon" size={30} color="#7f7f7f" /></button>
        </div>
      </div>
    </div>
  )
}



export default HoverImg2;