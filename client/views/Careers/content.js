import React, { Fragment} from 'react'
import { Helmet } from 'react-helmet'
import { formatPageTitle } from 'Client/utils'

import FullImage from 'Client/components/FullImage'
import Title from 'Client/components/Title'
import Description from 'Client/components/Description'
import ImageSet from 'Client/components/ImageSet'
import TwoColumns from 'Client/components/TwoColumns'
import CtaBox from 'Client/components/CtaBox'
import Button from 'Client/components/Button'


// Images
import heroImage from 'Client/assets/careers-hero.png'
import image1 from 'Client/assets/careers-1.png'
import image2 from 'Client/assets/careers-2.png'


const CareersContent = () => (
  <Fragment>
    <Helmet>
      <title>{ formatPageTitle('Join the Pack') }</title>
    </Helmet>

    <FullImage src={ heroImage } animate />
    <Title>Join the Pack</Title>
    <Description>
      At Wunderdog our developers and designers are the centre of everything.
      The most important task for our management is to act as facilitators
      to make sure that our developers and designers can focus on the
      essential task of delivering beautiful, quality software solutions;
      free from bureaucracy and disturbances.
    </Description>

    <ImageSet>
      <img src={ image1 } alt="Careers" />
      <img src={ image2 } alt="So much career" />
    </ImageSet>

    <TwoColumns title="Interaction designer">
      <p>
        Everybody loves great UI. The art of designing an effortless experience
        that just works still takes people by surprise. Also the impact of
        beauty is, well, beautiful.
      </p>
      <p>
        In case making some UX magic with software craftsmen is something you
        enjoy, let’s talk.
      </p>
    </TwoColumns>

    <TwoColumns title="Front-end Developer">
      <p>
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness.
      </p>
    </TwoColumns>

    <TwoColumns title="Web Developer">
      <p>
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness.
      </p>
    </TwoColumns>

    <TwoColumns title="Full Stack developer">
      <p>
        Do you actively follow the evolution of software development? Are you
        enthusiastic about your work and eager to learn more?
      </p>
      <p>
        At Wunderdog you’ll get to work with other skilled developers in an
        inspiring environment. Most importantly you can genuinely impact the way
        we work.
      </p>
    </TwoColumns>

    <CtaBox>
      <h1>See Our Open Positions</h1>
      <p>
        Do you actively follow the evolution of software development? Are you
        enthusiastic about your work and eager to learn more?
      </p>
      <p>
        At Wunderdog you’ll get to work with other skilled developers in an
        inspiring environment. Most importantly you can genuinely impact the
        way we work.
      </p>
      <Button to="https://google.com" target="_blank">Apply via RecRight</Button>
    </CtaBox>


  </Fragment>
)



export default CareersContent
