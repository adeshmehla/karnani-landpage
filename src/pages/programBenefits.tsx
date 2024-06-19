import React from 'react';
import Image from 'next/image';

const ProgramBenefits = () => {
    const benefits = [
        {
            id: 1,
            image: '/Dollar-Increase--Streamline-Flex.png',
            title: 'Benefit 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 2,
            image: '/programbenefitVector.png',
            title: 'Benefit 2',
            description: 'Nulla at arcu nec tortor aliquam malesuada.'
        },
        {
            id: 3,
            image: '/Dollar-Increase--Streamline-Flex.png',
            title: 'Benefit 3',
            description: 'Praesent ac metus ac lorem sagittis pulvinar.'
        },
        {
            id: 4,
            image: '/Union.png',
            title: 'Benefit 1',
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
        },
        {
            id: 5,
            image: '/programbenefitVector.png',  // Replace with your image path
            title: 'Benefit 2',
            description: 'Nulla at arcu nec tortor aliquam malesuada.'
        },
        {
            id: 6,
            image: '/Dollar-Increase--Streamline-Flex.png',  // Replace with your image path
            title: 'Benefit 3',
            description: 'Praesent ac metus ac lorem sagittis pulvinar.'
        },
    ];

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map(benefit => (
                        <div key={benefit.id} className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex justify-center mb-4">
                                <div style={{backgroundColor:"#25CFC6"}} className="bg-red-500 rounded-full overflow-hidden w-16 h-16 flex justify-center items-center">
                                    <Image
                                        src={benefit.image}
                                        alt={benefit.title}
                                        width={26}
                                        height={26}
                                    />
                                </div>

                            </div>
                            <h3 className="text-lg font-semibold mb-2">{benefit.title}</h3>
                            <p className="text-gray-600">{benefit.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
export default ProgramBenefits;