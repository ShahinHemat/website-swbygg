import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

import { styles } from '../styles';
import { services, ansatte } from '../constants';
import { fadeIn, fadeInTwo, textVariant, textVariantTwo } from '../utils/motion';
import { SectionWrapper } from '../hoc';
/* import { martin, ragnar } from '../assets'; */

import useMediaQuery from '@mui/material/useMediaQuery';

const ServiceCard = ({ index, title, icon }) => {

  const isMobile = useMediaQuery('(max-width:680px)');

  return (
    <Tilt className='xs:w-[250px] w-full'>
      <motion.div
        variants={isMobile? fadeInTwo('right', 'spring', 0.5 * index, 0.75) : fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className='w-full p-[1px] rounded-[20px] shadow-card'>
        <div
          options={{
            max: 45,
            scale: 1,
            speed: 450
          }}
          className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
        >
          <img src={icon} alt={title} className='w-50 h-50 object-contain' style={{ borderRadius: '10px' }} />
          <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>

    </Tilt>
  )
}

const About = () => {

  const isMobile = useMediaQuery('(max-width:680px)');

  return (
    <>
    
      <motion.div 
      variants={isMobile ? textVariantTwo() : textVariant()}
      >
        {/* <p className={styles.sectionSubText}>Om Oss</p> */}
        <h2 className={styles.sectionHeadText}>Om Oss</h2>
      </motion.div>

      <motion.p
        variants={ isMobile ? fadeInTwo('', '', 0.1, 1) : fadeIn('', '', 0.1, 1)}
        className='mt-4 text-swBygg-dark text-[17px] max-w-3xl leading-[30px]'
      >

        &nbsp;&nbsp; <b>SW Bygg er en mesterbedrift</b> som arbeider i Oslo og omegn. Vi har Sentral Godkjenning som er
        en godkjenningsordning for entreprenører og håndverkere som ønsker å utføre bygg- og anleggsarbeid i Norge,
        og som krever at virksomheten oppfyller kravene til faglig kompetanse.
        <br />
        &nbsp;&nbsp; <b>Som totalentreprenør kan vi hjelpe med de fleste bygge og oppussing prosjekter, store som små.</b> Vårt hovedfokus
        er nybygg og rehabilitering, og sammen med våre samarbeidspartnere kan vi tilby det meste av hva du skulle ønske.
        Som totalentreprenør kan vi hjelpe med de fleste bygge og oppussing prosjekter, store som små.
        <br />
        <br />
        <div className='cursor-pointer' /* onClick={scrollToPosition} */ style={{ textAlign: 'center', textDecoration: 'underline' }}> <a href='#contact' title='Klikk for å gå til kontaktskjema'>Har du et prosjekt er vi alltid interessert i å høre om dette!</a></div>
      </motion.p>

      <motion.div variants={ isMobile ? textVariantTwo() : textVariant()} style={{ marginTop: '40px', }}>
        {/* <p className={styles.sectionSubText}>Om Oss</p> */}
        <h2 className={styles.sectionHeadText}>Vårt Team</h2>
      </motion.div>

      <motion.div className='mt-10 flex flex-wrap gap-10'>
        {ansatte.map((ansatt, index) => (
          <div>
            <img key={index} src={ansatt.bilde} alt={ansatt.alt} style={{ borderRadius: '5px' }} />
            <p style={{ fontSize: '30px', color: '#5a4a41' }}>{ansatt.navn}</p>
            <p style={{ fontSize: '20px', color: '#958c87' }}>{ansatt.tittel}</p>
            <p style={{ fontSize: '15px', color: '#958c87', marginTop: '5px' }}>{ansatt.tlf}</p>
            {/* HUSK Å LEGGE INN EN LINJE OM "AT VI SØKER MEDARBEIDERE" */}
          </div>
        ))}
      </motion.div>

      <motion.p
        variants={ isMobile ? fadeInTwo('', '', 0.1, 6) : fadeIn('', '', 0.1, 6)}
        className='mt-8 text-swBygg-dark text-[17px] max-w-3xl leading-[30px]'
      >

        *Vi søker stadig flere medarbeidere. Se våre<b><a href='#stillinger' title='Klikk for å se våre ledige stillinger' style={{textDecoration: 'underline'}}> ledige stillinger!</a></b>
        
      </motion.p>

      <motion.div variants={ isMobile ? textVariantTwo() : textVariant()} style={{ marginTop: '40px' }}>
        <h2 className={styles.sectionHeadText}>Vårt Fokus</h2>
        {/* <p className={styles.sectionSWLowText} style={{color: "#5a4a41"}}>#Pålitelighet</p> */}
      </motion.div>

      <motion.p
        variants={isMobile ? fadeInTwo('', '', 0.1, 1) : fadeIn('', '', 0.1, 1)}
        className='mt-4 text-swBygg-dark text-[17px] max-w-3xl leading-[30px]'
      >

        &nbsp;&nbsp; Fokuset i vårt arbeid er, og vil alltid være <b>kvalitet i alle ledd.</b> Med dette mener vi at vi skal være behjelpelige
        med finne gode løsninger til store og små oppgaver, samt besørge en stabil og god informasjonsflyt i alle prosjektets faser.
        Som kunde av SW Bygg <b>skal du kunne senke skuldrene og stole på at vi utfører avtalt arbeid til avtalt tid og pris.</b>
        <br />

        &nbsp;&nbsp; Har du noe du skulle ha fått utført, er det bare å ta <div className='cursor-pointer' style={{ textDecoration: 'underline', display: 'inline' }}>
        <a href='#contact' title='Klikk for å gå til kontaktskjema'>kontakt med oss.</a></div> Vi er alltid interessert i å høre om ditt prosjekt!
      </motion.p>

      <motion.div variants={ isMobile ? textVariantTwo() : textVariant()} style={{ marginTop: '40px', }}>
        <p className={styles.sectionSWText}> <b>*Noen av våre samarbeidspartnere</b></p>
        {/* <h2 className={styles.sectionHeadText}>Noen av våre</h2> */}
      </motion.div>

      <div className='mt-10 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>


    </>
  )
}

export default SectionWrapper(About, 'about')