import React,{useState} from 'react';
import {DivBoxDrawSC} from "../../styles/draw.styles";
import {Tools} from "../../tools/tools";



function MainDraw(props) {
    const [statusPress, setStatusPress] = useState(false);
    const [points, setPoints] = useState([]);
    const [polylines, setPolylines] = useState([]);

    const onMouseDownSvg = (e) => {
        setStatusPress(true)
        let _polylines = polylines;
        _polylines.push([])
        setPolylines([..._polylines])
    }

    const onMouseUpSvg = (e) => {
        setStatusPress(false)
    }

    const onMouseMoveSvg = (e) => {
        if (statusPress) {
            let _polylines = polylines;
            _polylines[_polylines.length - 1].push(Tools.processCoords(e.pageX, e.pageY))
            setPolylines([..._polylines])

        }

    }

    return (
        <DivBoxDrawSC>
            <svg version="1.1"
                 baseProfile="full"
                 width="100%" height="500"
                 xmlns="http://www.w3.org/2000/svg"
                 onMouseDown={onMouseDownSvg}
                 onMouseUp={onMouseUpSvg}
                 onMouseMove={onMouseMoveSvg}
            >
                {
                    polylines.map((item, i) => {
                        return(
                            <polyline
                                points={
                                    item.join(' ')
                                }
                                key={`frqweqwe${i}`}
                                style={{
                                    stroke: 'black',
                                    strokeWidth: '1px',
                                    fill: 'none'
                                }}
                            />
                        )
                    })
                }

                {/*<polygon*/}
                {/*    points={*/}
                {/*        '200, 20 300, 20 300, 300'*/}
                {/*    }*/}
                {/*    style={{*/}
                {/*        stroke: 'black',*/}
                {/*        strokeWidth: '1px',*/}
                {/*        fill: 'none'*/}
                {/*    }}*/}
                {/*/>*/}


            </svg>
        </DivBoxDrawSC>
    );
}

export default MainDraw;