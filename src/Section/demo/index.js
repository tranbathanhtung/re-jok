//@flow
import * as React from 'react';
import Section from '../Section';



class SectionDemo extends React.Component<{}>{
  render(){

    return (
      <React.Fragment>
        <Section>
          Demo
        </Section>

        <Section type="background" backgroundUrl="https://www.wallpaperup.com/uploads/wallpapers/2013/04/09/73143/d2c0f4c5943c94fccdad2866782ded2f-700.jpg">
           Demo
        </Section>
      </React.Fragment>

    )
  }
}

export default SectionDemo
