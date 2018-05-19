import React, { Fragment} from 'react'
import { Helmet } from 'react-helmet'
import HeroImage from 'Client/components/HeroImage'
import CaseTitle from 'Client/components/CaseTitle'
import ImageSet from 'Client/components/ImageSet'
import TwoColumns from 'Client/components/TwoColumns'

// Images
import heroImage from 'Client/assets/case3-hero.png'
import image1 from 'Client/assets/case3-1.png'
import image2 from 'Client/assets/case3-2.png'
import image3 from 'Client/assets/case3-3.png'
import image4 from 'Client/assets/case3-4.png'
import image5 from 'Client/assets/case3-5.png'
import image6 from 'Client/assets/case3-6.png'
import image7 from 'Client/assets/case3-7.png'


const CaseKisapahkina = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Kisapahkina | wunderdog</title>
      </Helmet>

      <HeroImage src={ heroImage } />
      <CaseTitle text="Online Healthcare Comparison Tool" />
      <p>
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness.
      </p>

      <ImageSet>
        <img src={ image1 } alt="Laptop"/>
        <img src={ image2 } alt="Duds"/>
      </ImageSet>

      <TwoColumns title="Expound the actual teachings of the great">
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>
      </TwoColumns>

      <ImageSet>
        <img src={ image3 } alt="Bag"/>
        <img src={ image4 } alt="Phones"/>
      </ImageSet>
      <ImageSet>
        <img src={ image5 } alt="Layout"/>
      </ImageSet>

      <TwoColumns title="Expound the actual teachings of the great">
        <p>
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>
      </TwoColumns>

      <ImageSet full>
        <img src={ image6 } alt="Layout"/>
      </ImageSet>
      <ImageSet full>
        <img src={ image7 } alt="Layout"/>
      </ImageSet>



    </Fragment>
  )
}



export default CaseKisapahkina
