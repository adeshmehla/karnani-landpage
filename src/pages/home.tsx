import React from 'react';
import Image from 'next/image';
import ProgramBenefits from './programBenefits';
import Footer from '@/component/footer';
const keyFeatures = [
    {
        image: '/Dollar-Increase--Streamline-Flex.png',
        title: 'Feature One',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis.'
    },
    {
        image: '/Union.png',
        title: 'Feature Two',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis.'
    },
    {
        image: '/programbenefitVector.png',
        title: 'Feature Three',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis.'
    }
];
const steps = [
    {
        title: 'Register',
        description: 'Phasellus nec nunc molestie, aliquam sapien nec, venenatis lacus. Donec efficitur dolor purus, eget congue dolor pretium in. '
    },
    {
        title: 'Orientation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis.'
    },
    {
        title: 'Implementation',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis.'
    },
    {
        title: 'Testing and QA',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis.'
    },
    {
        title: 'Launch and Support',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis.'
    }
]
const Home = () => {
    return (
        <div>
            <div className="relative w-full h-[700px]">
                <Image
                    src="/banner.png"
                    alt="Banner Image"
                    layout="fill"
                    objectFit="cover"
                    quality={100}
                />
            </div>
            {/* Key Features Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
                    <div className="flex flex-wrap justify-center space-x-4">
                        {keyFeatures.map((feature, index) => (
                            <div key={index} className="bg-white rounded-lg shadow-lg p-6 m-4 w-80">
                                <div style={{backgroundColor:"#25CFC6"}} className="bg-red-500 rounded-full overflow-hidden w-16 h-16 flex justify-center items-center">
                                    <Image
                                        src={feature.image}
                                        alt={feature.title}
                                        width={26}
                                        height={26}
                                    />
                                </div>
                                <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                                <p className="text-gray-600 text-center">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* About the programm Section */}
            <section className="relative h-[350px] md:h-[450px] lg:h-[600px]">
                <div className="absolute inset-0">
                    <Image
                        src="/about.png"  // replace with your background image path
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-l from-black/80 to-transparent"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-end">
                    <div className="text-white max-w-lg text-right p-6">
                        <h2 className="text-4xl font-bold mb-4">About the program</h2>
                        <p className="mb-6">Phasellus nec nunc molestie, aliquam sapien nec, venenatis lacus. Donec efficitur dolor purus, eget congue dolor pretium in.
                            Quisque tincidunt pulvinar quam vitae tincidunt. Nullam dignissim, ligula et accumsan faucibus, nibh dolor sodales velit, quis maximus augue est at lorem.
                            Quisque efficitur molestie tellus et sollicitudin. Donec id ligula ultrices, pulvinar arcu in, maximus enim. Phasellus et egestas risus, non tempor est.
                            Nam eu eros eu neque maximus mollis eget eget nunc. Quisque ornare, odio vitae vulputate tempus, felis massa pulvinar arcu, nec lobortis nisl ligula in libero.
                            Nulla malesuada lorem et nunc rutrum tincidunt. Suspendisse semper tincidunt magna non aliquam. Donec rutrum hendrerit tellus ac vehicula. Nulla ac posuere mauris.
                            Aliquam euismod velit sed metus feugiat, vel porta nisi placerat. Nullam vel efficitur risus. Donec vitae lobortis elit.</p>
                        <button style={{backgroundColor: "#25CFC6"}} className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                            View More
                        </button>
                    </div>
                </div>
            </section>
            {/* How It Works Section */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4" style={{ width: '70%' }}>
                    <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
                    <div className="relative">
                        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gray-300 h-full"></div>
                        {steps.map((step, index) => (
                            <div key={index} className={`flex items-center my-8 ${index % 2 === 0 ? 'flex-row-reverse' : 'flex-row'}`}>
                                <div className={`w-1/2 ${index % 2 === 0 ? 'pl-8' : 'pr-8'}`}>
                                    <div className="bg-white rounded-lg shadow-lg p-6">
                                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                                        <p className="text-gray-600">{step.description}</p>
                                    </div>
                                </div>
                                <div className="w-1 flex justify-center relative">
                                    <div style={{backgroundColor: "#25CFC6"}} className="absolute top-[-30px] left-1/2 transform -translate-x-1/2 bg-blue-500 text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg">{index + 1}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            {/* Ready to be an influancer */}

            <section className="relative h-[350px] md:h-[450px] lg:h-[600px]">
                <div className="absolute inset-0">
                    <Image
                        src="/influance.png"  // replace with your background image path
                        alt="Background Image"
                        layout="fill"
                        objectFit="cover"
                        quality={100}
                        className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                </div>
                <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-start">
                    <div className="text-white max-w-lg text-left p-6">
                        <h2 className="text-4xl font-bold mb-4">Ready to be an influencer</h2>
                        <p className="mb-6">Phasellus nec nunc molestie, aliquam sapien nec, venenatis lacus.
                            Donec efficitur dolor purus, eget congue dolor pretium in.Quisque tincidunt pulvinar quam vitae tincidunt.
                            Nullam dignissim, ligula et accumsan faucibus, nibh dolor sodales velit, quis maximus augue est at lorem.
                            Quisque efficitur molestie tellus et sollicitudin. Donec id ligula ultrices, pulvinar arcu in, maximus enim. </p>
                        <button style={{backgroundColor: "#25CFC6"}} className="bg-customTeal-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none">
                            Apply Now
                        </button>
                    </div>
                </div>
            </section>
            {/* program benefit */}
            <ProgramBenefits />
            {/* footer */}
        <Footer/>
        </div>
    );
};

export default Home;