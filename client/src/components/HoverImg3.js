import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const HoverImg3 = ({pic3, swatch3, img3Index, onMouseOver, i3, onMouseMain3, onMouseMainLeave3, mouseClick, cBox}) => {

  return (
    <div className="hoverImg" >
      <div className="nest" >
        {i3 ? <img
          className="hoverMainImg hovPic3"
          src={pic3[img3Index].slice(2,3)}
          alt="Hover Image"
          id="i3"
          onMouseOver={onMouseMain3}
          onMouseOut={onMouseMainLeave3}
        /> : <img
        className="hoverMainImg hovPic3"
        src={pic3[img3Index].slice(3,4)}
        alt="Hover Image"
        id="i3"
        onMouseOver={onMouseMain3}
        onMouseOut={onMouseMainLeave3}
        />}
        <div className="swatch-bg">
          <button className="svgButton" onClick={mouseClick}><FaAngleLeft className="svgIcon" size={30} color="#7f7f7f" /></button>
          <div className="shield">
          <div  className={cBox ? "slide-left colorBox" : "slide-right colorBox "}>
          {swatch3.map((img, index) => (
              <img
              className={`swatchImg hoverbox${index + 1} img3`}
              src={swatch3[index].slice(1, 2)}
              alt="swatch Image"
              name={index}
              id="img3"
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



export default HoverImg3;