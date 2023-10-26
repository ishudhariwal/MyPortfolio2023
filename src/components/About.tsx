import { Tilt } from 'react-tilt'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/Motion'
import { SectionWrapper } from '../hoc'

const ServiceCard = ({ index, title, icon }: { index: any, title: any, icon: any }) => {

  return (
    <Tilt className="xs:w-[250px] w-full" options={{ max: 45, scale: 1, speed: 450 }}>
      <motion.div variants={fadeIn('right', 'spring', 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
        <div className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} className='w-16 h-16 object-contain' />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}
const About = () => {
  return (
    <>
      <motion.div variants={textVariant("")}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        Energetic graduate software engineer with 11 months of experience as a Data Engineer L1. Skilled in innovative so- lutions, efficient software development, and Agile methodologies. Dedicated to leveraging technology for Information Systems and efficient data solutions. Confident team player with great interpersonal skills, proficient in Python pro- gramming and experienced in designing ETL pipelines. A self-starter who thrives in challenging environments, with a commitment to integrity and continuous growth.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, "about");