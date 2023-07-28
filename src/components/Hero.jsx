import styles from '../style'
import { discount, robot } from '../assets'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2'>
          <img src={discount} alt="discount" className='w-[32px] h-[32px]' />
          <p className={`${styles.paragraph} ml-2 uppercase`}>
            <span className='text-white'>20%</span> Discount for{" "}
            <span className='text-white'>1 Month</span> Account
          </p>
        </div>
        
        <div className='flex flex-row justify-between items-center w-full'>
          <h1 className={`flex-1 ${styles.heading1} ss:text-[72px]`}>
            The Next <br className='sm:block hidden' />{" "}
            <span className='text-gradient'>Generations</span>{" "}
          </h1>
          <div className='ss:flex hidden md:mx-4 mr-0'>
            <GetStarted />
          </div>
        </div>
        
        <h1 className={`${styles.heading1} ss:text-[68px] w-full`}>
          Payment Method.
        </h1>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>  

      <div className={`flex-1 ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={robot} alt="billing" className='w-[100%] sm:h-[90vh] h-[100%] relative z-[5] object-contain object-right' />

        {/* gradient start */}
        <div className='absolute opacity-[0.6] z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute opacity-[0.6] z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40'/>
        <div className='absolute opacity-[0.6] z-[2] w-[50%] h-[50%] right-20 bottom-20 blue__gradient'/>
        {/* gradient end */}
      </div>

      <div className={`ss:hidden ${styles.flexCenter}`}>
        <GetStarted />
      </div>
    </section>
  )
}

export default Hero