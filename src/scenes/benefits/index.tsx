import { BenefitType, SelectedPage } from "@/shared/type"
import { 
    HomeModernIcon, 
    UserGroupIcon, 
    AcademicCapIcon } 
    from "@heroicons/react/24/solid"
import { motion } from "framer-motion"
import HText from "@/shared/HText"
import Benefit from "./Benefit"
import ActionButton from "@/shared/ActionButton"
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6"/>,
        title: 'State Of the Art Facilities',
        description: 
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit harum reiciendis libero nostrum ratione. Temporibus deserunt aliquam provident qui cumque!'
    },
    {
        icon: <UserGroupIcon className="h-6 w-6"/>,
        title: `100's of Diverse Classes`,
        description: 
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit harum reiciendis libero nostrum ratione. Temporibus deserunt aliquam provident qui cumque!'
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6"/>,
        title: `Expert and Pro Trainers`,
        description: 
        'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit harum reiciendis libero nostrum ratione. Temporibus deserunt aliquam provident qui cumque!'
    }
]

const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } }
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            {/* HEADER */}
            <motion.div 
            initial = 'hidden'
            whileInView = 'visible'
            viewport={{once: true, amount: 0.5}}
            transition={{duration: .5}}
            variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
            }}
            className="md:my-5 md:w-3/5">
                <HText>MORE THAN JUST A GYM</HText>
                <p className="my-5 text-sm">We provide world class fitness equipment, trainers and classes to 
                    get you to your ultimate fitness goals with ease. We provide true 
                    care into each and every member</p>
            </motion.div>
            {/* BENEFITS */}
            <motion.div 
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true, amount: 0.5 }}
            variants={container}
            className="md:flex items-center justify-between mt-5 gap-8">
                {benefits.map((benefit :BenefitType) => 
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                )}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 justify-between items-center md:mt-28 md:flex gap-20">
                {/* GRAPHIC */}
                <img className="mx-auto" alt="benefits-page-graphic" src={BenefitsPageGraphic} />
                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className="relative">
                        <div className="before:absolute before:-top-20 before:-left-20 before:-z-[1] before:content-abstractwaves">
                            <motion.div 
                            initial = 'hidden'
                            whileInView = 'visible'
                            viewport={{once: true, amount: 0.5}}
                            transition={{duration: .5}}
                            variants={{
                                hidden: {opacity: 0, x: 50},
                                visible: {opacity: 1, x: 0},
                            }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {' '}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPT */}
                    <motion.div
                    initial = 'hidden'
                    whileInView = 'visible'
                    viewport={{once: true, amount: 0.5}}
                    transition={{delay: 0.2, duration: .5}}
                    variants={{
                        hidden: {opacity: 0, x: 50},
                        visible: {opacity: 1, x: 0},
                    }}
                    >
                        <p className="my-5">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi expedita soluta eaque autem magnam ipsa 
                        iste harum, quibusdam, reiciendis suscipit modi odit voluptatum sed, incidunt accusantium repellendus? 
                        Et eum ab maxime fugiat quam laborum repudiandae, facere ipsa sunt optio mollitia quidem voluptatibus ad 
                        corporis iusto quos dolor voluptas praesentium eligendi!
                        </p>
                        <p className="mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur ipsa aspernatur dicta? Dicta soluta
                            eos temporibus, alias distinctio assumenda delectus explicabo? Architecto cumque quia, voluptas sit soluta 
                            dolorem voluptates vel at harum sint repellat libero.
                        </p>
                    </motion.div>
                    
                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:z-[-1] before:-bottom-20 before:right-40 before:content-sparkles"></div>
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Learn More
                        </ActionButton>
                    </div>
                </div>
            </div>
        </motion.div>
    </section>
  )
}

export default Benefits