import { motion } from 'framer-motion';
import { styles } from '../styles';
import { swByggHeader } from '../assets';
import ImageSlider from './ImageSlider';
import { sliderImages } from '../constants';

const Hero = () => {
  return (
    <section id='hero' className='relative w-full h-screen mx-auto flex'> {/* added flex */}

      <div className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5 justify-center`}> {/* added justify-center */}

        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#5a4a41]' /> {/* Changed hex code */}
          <div className='w-1 sm:h-80 h-40 swBygg-gradient' /> {/* Changed violet-gradient to swBygg-gradient*/}
        </div>

        <div className="flex flex-col items-center">

          <div>
            <img
              src={swByggHeader}
              alt='SW Bygg AS Header'
            />
            <h1 className={`${styles.heroHeadText} mt-2`} style={{ color: '#5a4a41' }}>
              Rehabilitiering & Nybygg
            </h1>
          </div>

          <div style={{ marginTop: '15px' }}>
            <ImageSlider images={sliderImages} />
          </div>

        </div>

      </div>

      {/* Animation indicating "scroll for more" */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center hero-bottom-div'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-swBygg-light flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0]
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop'
              }}
              className='w-3 h-3 rounded-full bg-swBygg-lighter mb-1'
            />
          </div>
        </a>
      </div>

    </section>
  )
}

export default Hero