import React from 'react';

import {CSSTransitionGroup} from 'react-transition-group';

import Wrapper from './Wrapper';
import Image1 from './images/marshall-taplits.jpg';
import Image2 from './images/diasporatv-logo.png';
import Image3 from './images/marshall-taplits.jpg';
import Image4 from './images/spaxtel-logo.png';
import Image5 from './images/james-r.jpg';
import Image6 from './images/factfour-logo.png';
import Image7 from './images/roel-van-kempen.jpg';
import Image8 from './images/sqoony-logo.png';
import message from './messages';

const testimonials= [
  {
      content: 'Working with MobyteLab has been a distinct pleasure and honor for me and my company. MobyteLab delivers quality work on time and on budget. As with all projects, you need to have a good plan going in but I have always had help when I needed to make modifications to our technical specs in order to achieve desired functions. ',
      authorName: 'Ilir Pruthi - CEO / Founder',
      authorCompany: 'DiasporaTV',
      authorImage: Image1,
      companyImage: Image2
  },
  {
      content: 'Mobytelabs is probably the best mobile development firm in Vietnam and I\'d say their passion for technology and software development is world className. I highly recommend Binh and his team for any mobile development needs. They will always go above and beyond to ensure the project is delivered successfully and on time.',
      authorName: 'Marshall Taplits - CEO / Founder',
      authorCompany: 'Spaxtel',
      authorImage: Image3,
      companyImage: Image4
  },
  {
      content: 'The team at MobyteLab are always great to work with and we trust them to deliver a quality product every time. They are professional, thorough and very easy to deal with. We would recommend MobyteLab to anyone looking for quality app developers at a good rate.',
      authorName: 'James R , Co-founder',
      authorCompany: 'Factfour - Melbourne, Australia',
      authorImage: Image5,
      companyImage: Image6
  },
  {
      content: 'As an IT company ourselves, we were skeptical to outsource our mobile development to optimize our apps, but MobyteLab was highly recommended by many other companies we know. MobyteLab helped us with high quality of coding, on time and on budget, the result being better than expected! I would recommend MobyteLab to any company that is in need of experienced mobile developers.',
      authorName: 'Roel van Kempen',
      authorCompany: 'Sqoony',
      authorImage: Image7,
      companyImage: Image8
  }
];

class Carousel extends React.Component { // eslint-disable-line react/prefer-stateless-function

  constructor(props) {
    super(props)
    this.state = {
      key: 0
    }

    this.handleClick = this.handleClick.bind(this);
    this.loopEndless = this.loopEndless.bind(this);
  }

  handleClick(index) {
    clearInterval(this.interval);
    this.setState({key: index})
    this.loopEndless();
  }

  loopEndless() {
    this.interval = setInterval(() => {
      let num = testimonials.length;
      let key = this.state.key;
      if (key === 3) {
        key = -1;
      }

      this.setState({
        key: key + 1
      })
    }, 5000);
  }

  componentDidMount() {
    this.loopEndless();
  }

  handleRemove(i) {
    let newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({items: newItems});
  }

  render() {
    const style = {
      selected: {
        opacity: 1,
        filter: 'grayscale(0%)'
      },
      unselected: {
        opacity: .5,
        filter: 'grayscale(100%)'
      }

    }
    return (
      <Wrapper>
        <div className='row header-carousel'>
          <img className="company-logo" src={testimonials[0].companyImage} onClick={() => this.handleClick(0)} style={this.state.key === 0
            ? style.selected
            : style.unselected}/>
          <img className="company-logo" src={testimonials[1].companyImage} onClick={() => this.handleClick(1)} style={this.state.key === 1
            ? style.selected
            : style.unselected}/>
          <img className="company-logo" src={testimonials[2].companyImage} onClick={() => this.handleClick(2)} style={this.state.key === 2
            ? style.selected
            : style.unselected}/>
          <img className="company-logo" src={testimonials[3].companyImage} onClick={() => this.handleClick(3)} style={this.state.key === 3
            ? style.selected
            : style.unselected}/>
        </div>

        <div className='carousel'>
          <CSSTransitionGroup transitionName="animation" transitionEnterTimeout={1100} transitionLeaveTimeout={900}>
            <div className='content' key={this.state.key}>
              <div className='testimonial'>
                <p>
                  <i>{testimonials[this.state.key].content}</i>
                </p>
              </div>
              <div className='author'>
                <img alt='author' src={testimonials[this.state.key].authorImage}/>
                <h2 className="author-company">{testimonials[this.state.key].authorCompany}</h2>
                <p className="author-name">{testimonials[this.state.key].authorName}</p>
              </div>
            </div>
          </CSSTransitionGroup>
        </div>
      </Wrapper>
    );
  }
}

export default Carousel;
