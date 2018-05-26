import './index.css'
import React from 'react'
import CtaBox from 'Client/components/CtaBox'
import ContactInfoCard from 'Client/components/ContactInfoCard'
import Logo from 'Client/components/Logo'


import helsinki from 'Client/assets/contact-helsinki.png'



const Footer = () => (
  <footer className="Footer">
    <CtaBox>
      <h1>Let's Talk</h1>
      <p>hello@wunder.dog</p>
    </CtaBox>
    <div className="Footer__contactInfoCards">
      <ContactInfoCard
        image={ helsinki }
        title="Helsinki"
      >
        <p>
          Salomonkatu 17<br />
          00100 Helsinki - Finland<br />
          +358 40 123 4345
        </p>
      </ContactInfoCard>
      <ContactInfoCard
        image={ helsinki }
        title="Helsinki"
      >
        <p>
          Salomonkatu 17<br />
          00100 Helsinki - Finland<br />
          +358 40 123 4345
        </p>
      </ContactInfoCard>
      <ContactInfoCard
        image={ helsinki }
        title="Helsinki"
      >
        <p>
          Salomonkatu 17<br />
          00100 Helsinki - Finland<br />
          +358 40 123 4345
        </p>
      </ContactInfoCard>
    </div>

    <hr />

    <Logo useDefault />
  </footer>
)




export default Footer
