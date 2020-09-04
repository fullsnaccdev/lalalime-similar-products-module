import React from 'react';
import {FaAngleLeft, FaAngleRight} from 'react-icons/fa'


const HoverImg1 = ({pic1, swatch1, img1Index, onMouseOver, i1, onMouseMain, onMouseMainLeave, mouseClick, cBox}) => {
console.log('hoverimg1comp',swatch1);
console.log('pic1 from hoverimg1', pic1);
console.log('img1Index from hoverimg1', img1Index);
console.log('src link true', pic1[img1Index].slice(2,3))
console.log('src link false', pic1[img1Index].slice(3,4))
console.log('pic1ingIndex', pic1[img1Index])
  return (
    <div className="hoverImg" >
      <div className="nest" >
        {i1 ? <img
          className="hoverMainImg hovPic1"
          src={pic1[img1Index].slice(2,3)}
          alt="Hover Image"
          id="i1"
          onMouseOver={onMouseMain}
          onMouseOut={onMouseMainLeave}
        /> : <img
        className="hoverMainImg hovPic1"
        src={pic1[img1Index].slice(3,4)}
        alt="Hover Image"
        id="i1"
        onMouseOver={onMouseMain}
        onMouseOut={onMouseMainLeave}
        />}
        <div className="swatch-bg">
          <button className="svgButton" onClick={mouseClick}><FaAngleLeft className="svgIcon" size={30} color="#7f7f7f" /></button>
          <div className="shield">
          <div  className={cBox ? "slide-left colorBox" : "slide-right colorBox "}>
            {swatch1.map((img, index) => (
              <img
              className={`swatchImg hoverbox${index + 1} img1`}
              src={swatch1[index].slice(1, 2)}
              alt="swatch Image"
              name={index}
              id="img1"
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



export default HoverImg1;