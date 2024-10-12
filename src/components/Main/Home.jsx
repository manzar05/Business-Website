import React from 'react'
import styles from './home.module.css'
import Button from '../ui/Button'
import Image from '../../assets/images/main_image.png'
import ISOImage from '../../assets/images/iso.png'
import LockImage from '../../assets/images/lock.png'
import SSLImage from '../../assets/images/ssl.png'
import SecurityImage from '../../assets/images/securitylogo.png'
import ServiceImage1 from '../../assets/images/service1.png'
import ServiceImage2 from '../../assets/images/service2.png'
import ServiceImage3 from '../../assets/images/service3.png'
import Cards from '../ui/Cards'
import ServiceCard from '../ui/ServiceCard'
import FeedbackCard from '../ui/FeedbackCard'

const serviceCardData = [
    {
        id:1,
        title: 'Service 1',
        image: ServiceImage1,
        paragraph: "Lorem5"
    },
    {
        id:2,
        title: 'Service 2',
        image: ServiceImage2,
        paragraph: "Lorem5"
    },
    {
        id:3,
        title: 'Service 3',
        image: ServiceImage3,
        paragraph: "Lorem5"
    },
    {
        id:4,
        title: 'Service 4',
        image: ServiceImage1,
        paragraph: "Lorem5"
    },
    {
        id:5,
        title: 'Service 5',
        image: ServiceImage2,
        paragraph: "Lorem5"
    },
]
const Home = () => {
  return (
    <div className={styles.home}>
        <div className={`${styles.box} ${styles.box1}`}>
            <div className="flex flex-col items-start justify-center h-full ps-[1rem]">
                <h1 className="text-3xl sm:text-5xl font-black text-[#ff963c] sm:max-w-[90%] :text-left leading-tight">
                Accelerate <span className='text-[#072e5ff0]'>B2B</span> sales & grow your business.
                </h1>
                <p className="text-md sm:text-2xl my-4 text-[#6a6b6df0]">Digitise & automate sales process, get real time business visibility with our Integrated SaaS platform</p>
                <div className="flex items-center justify-between mt-4">
                    <Button props={{title:"Book a Demo",color:"#ff963c"}}/>
                    <Button props={{title:"Start free Trial",color:"#ff963c"}}/>
                </div>
            </div>
        </div>
        <div className={`${styles.box} ${styles.box2}`}>
            <div className="hidden items-center justify-center sm:flex">
                <img src={Image} alt="" style={{width:'auto'}}/>
            </div>
        </div>
        <div className={`${styles.box} ${styles.box3}`}>
            <h1 className="text-3xl sm:text-5xl font-black sm:w-[60%] text-[#072e5ff0] text-center pb-10">
            Join the ranks of Esteemed Brands that Trust Us
            </h1>
        </div>
        <div className={`${styles.box} ${styles.box4}`}>
            {
                serviceCardData.map((item,index) => (<ServiceCard props={item}/>))
            }
        </div>
        <div className={`${styles.box} ${styles.box6}`}>
            <div class="flex flex-col items-center">
                <h3 class="text-3xl sm:text-5xl font-black mb-2 sm:mb-5 text-[#072e5ff0]">Testimonials</h3>
                <h3 class="text-2xl font-bold mb-10">Rated by <em className='text-[#072e5ff0] font-bold'>800+</em> genuine users</h3>
                <div class="flex items-center justify-evenly flex-wrap gap-4 sm:gap-10">
                    <FeedbackCard />
                    <FeedbackCard />
                    <FeedbackCard />
                </div>
            </div>
        </div>
        <div className={`${styles.box} ${styles.box7}`}>
            <div className="hidden items-center justify-center sm:flex h-full">
                <img src={SecurityImage} alt="" style={{width:'auto'}}/>
            </div>
        </div>
        <div className={`${styles.box} ${styles.box8}`}>
            <div className="flex flex-col sm:items-start items-center justify-center h-full ps-[1rem]">
                <h1 className="text-5xl font-black text-[#ff963c] sm:max-w-[90%] text-center sm:text-left leading-tight ">
                Data Security & <span className='text-[#072e5ff0]'>privacy first</span> & forever
                </h1>
                <p className="text-2xl my-4 text-[#6a6b6df0] text-center sm:text-left">Your data is for your eye only. We do not access your data or
                trade it for any benifit.</p>
                <div className="flex items-center justify-start mt-4">
                    <ul className="p-0 m-0 text-center sm:text-left w-full">
                        <li className="flex items-center justify-start gap-3 w-full py-2">
                            <img src={ISOImage} alt="" className="w-8 rounded-full"/>
                            <p className="text-md font-medium text-[#072e5ff0]">ISO 270001 certified</p>
                        </li>
                        <li className="flex items-center justify-start gap-3 w-full py-2">
                            <img src={LockImage} alt="" className="w-8 rounded-full"/>
                            <p className="text-md font-medium text-[#072e5ff0]">100% data encryption</p>
                        </li>
                        <li className="flex items-center justify-start gap-3 w-full py-2">
                            <img src={SSLImage} alt="" className="w-8 rounded-full"/>
                            <p className="text-md font-medium text-[#072e5ff0]">SSL</p>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className={`${styles.box} ${styles.box9}`}>
            <div className="w-full flex flex-col items-center justify-start py-[3rem]">
            <h1 className="text-3xl font-bold w-full text-[#ff963c] text-center">The new age digital economy.</h1>
            <h1 className="text-5xl font-black w-full text-[#072e5ff0] text-center py-3">Accelerate. Boost. Grow.</h1>
            <div className="text-center w-[200px] mt-10">
                <Button props={{title:"Get Sarted"}}/>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Home