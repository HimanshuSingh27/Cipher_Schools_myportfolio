import React from 'react';
import Hero from '../components/Hero';
import Content from '../components/Content';

function AboutPage(props) {

    return(
        <div>
            <Hero title={props.title} />

            <Content>
            <p>Hello, My name is Himanshu Singh. I am B.Tech 4th year student in Lovely Professional University. </p>
             
             <p>My major in college is Android app development but I love to learn new technologies so I am learning React as a part of training from Cipher Schools.</p>

            <p>I am loving learning React and I am optimistic about using React more and more in future.</p>            
             <p>This is my second website using React and I am looking forwrd to improve as a Web Developer in future.</p>
             <br></br>
             <br></br>
             <br></br>
             </Content>
        </div>
    );

}

export default AboutPage;