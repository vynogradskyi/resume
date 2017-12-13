import React, {Component} from 'react';
import Point from "./Point";
import ChildFoot from "./ChildFoot";
import LeftSymbol from "./symbols/left"
import RightSymbol from "./symbols/right"
import PointSymbol from "./symbols/point"
import _ from 'lodash';


const stepsToShow = [
    {tag: "Point", w: 174, h: 174, t: "translate(48 67)", preventDefault: true, show: false},
    {
        tag: "ChildFoot",
        w: 85.17,
        h: 86.62,
        t: "translate(195 301) scale(1 0.99)",
        type: "#right",
        preventDefault: true,
        show: false
    },
    {tag: "ChildFoot", w: 83.87, h: 88.94, t: "translate(311 294)", type: "#left", preventDefault: true, show: false},
    {
        tag: "ChildFoot",
        w: 85.1,
        h: 86.62,
        t: "translate(287.69 429.73) rotate(-10.81) scale(1 0.99)",
        type: "#right",
        preventDefault: true, show: false
    },
    {tag: "ChildFoot", w: 83.87, h: 88.94, t: "translate(432 404)", type: "#left", preventDefault: true, show: false},
    {
        tag: "ChildFoot",
        w: 85.17,
        h: 86.62,
        t: "translate(424.75 531.99) rotate(-12.23)",
        type: "#right",
        preventDefault: true, show: false
    },
    {
        tag: "ChildFoot",
        w: 83.87,
        h: 88.94,
        t: "translate(575.16 515.49) rotate(-6.55)",
        type: "#left",
        preventDefault: true, show: false
    },
    {
        tag: "ChildFoot",
        w: 85.1,
        h: 86.62,
        t: "translate(585.09 635.62) rotate(-11.82) scale(1 0.99)",
        type: "#right",
        preventDefault: true, show: false
    },
    {
        tag: "ChildFoot",
        w: 83.87,
        h: 88.94,
        t: "translate(725.82 623.79) rotate(-12.39)",
        type: "#left",
        preventDefault: false, show: false
    },
    {
        tag: "ChildFoot",
        w: 85.1,
        h: 86.62,
        t: "translate(734.33 731.79) rotate(-13.15) scale(1 0.99)",
        type: "#right",
        preventDefault: false, show: false
    },
    {
        tag: "ChildFoot",
        w: 83.87,
        h: 88.94,
        t: "translate(847.73 709.84) rotate(-16.21)",
        type: "#left",
        preventDefault: false, show: false
    },
    {
        tag: "ChildFoot",
        w: 85.17,
        h: 86.62,
        t: "translate(908.09 825.56) rotate(-29.49)",
        type: "#right",
        preventDefault: false, show: false
    },
    {
        tag: "ChildFoot",
        w: 83.87,
        h: 88.94,
        t: "matrix(0.82, -0.57, 0.57, 0.82, 1004.91, 781.42)",
        type: "#left",
        preventDefault: false, show: false
    },
    {
        tag: "ChildFoot",
        w: 85.17,
        h: 86.62,
        t: "matrix(0.9, -0.44, 0.44, 0.89, 1065.4, 866.14)",
        type: "#right",
        preventDefault: false, show: false
    },
    {
        tag: "ChildFoot",
        w: 83.87,
        h: 88.94,
        t: "translate(1167.74 809.2) rotate(-39.65)",
        type: "#left",
        preventDefault: false, show: false
    },
    {
        tag: "ChildFoot",
        w: 85.1,
        h: 86.62,
        t: "translate(1202.09 907.38) rotate(-47.59) scale(1 0.99)",
        type: "#right",
        preventDefault: false, show: false
    },
    {tag: "Point", w: 174, h: 174, t: "translate(1308 725)", preventDefault: true, show: false},
];

class SvgRenderer extends Component {
    components = {
        "Point": Point,
        "ChildFoot": ChildFoot,
    };
    state = {
        items: stepsToShow,
        currentPoint: 0,
    };

    componentDidMount = () => {
        window.addEventListener('mousewheel', this.handleScroll);
        window.addEventListener("DOMMouseScroll", this.handleScroll);
    };

    componentWillUnmount = () => {
        window.removeEventListener('mousewheel', this.handleScroll);
        window.removeEventListener("DOMMouseScroll", this.handleScroll);
    };

    makeStep = (direction, event) => {
        let currentPoint = this.state.currentPoint,
            item, items;

        currentPoint = currentPoint - direction;
        currentPoint = currentPoint < -1 ? -1 : currentPoint > stepsToShow.length ? stepsToShow.length : currentPoint;
        console.log(currentPoint);
        items = _.each(this.state.items, (item, i) => item.show = i <= currentPoint);
        item = _.findLastIndex(items, {show: true});

        if (!(item > 0) || items[item].preventDefault) {
            event.preventDefault();
        }

        this.setState({items, currentPoint});
    };

    handleScroll = event => {

        // cross-browser wheel delta
        let e = window.event || e; // old IE support
        let delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));

        this.makeStep(delta, event);

        return false;
    };

    render() {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" id="Layer_1"
                 data-name="Layer 1"
                 width="100%"
                 height="100%"
                 viewBox="0 0 1920 1200">
                <defs>
                    <LeftSymbol/>
                    <RightSymbol/>
                    <PointSymbol/>
                </defs>

                {this.state.items.map(({tag, ...options}, index) => {
                    let TagComponent = this.components[tag];
                    return <TagComponent {...options} key={index}/>
                })}
            </svg>
        );
    }
}

export default SvgRenderer;