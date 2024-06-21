"use client"; 
import React, { useEffect, useState } from 'react';
import Image from 'next/image';

async function fetchBenefits() {
    console.log("API Token:", process.env.STRAPI_API_TOKEN);
    try {
        const res = await fetch("http://127.0.0.1:1337/api/benefits?populate=*", {
            headers: {
                Authorization: `Bearer cb44467845e70ed2a016182df2cfbc20cea79333d4b4241fa4a50fca309f01807d31c5b49ff55be2aa726ee371d54abe303d716867ec6e3bbf9fea62ef2004e8c07d25dd6d9616978b2877a33f48d7ceebebd2eb2b43cb5e0387492eb63de601e524dd83485996d0b701877ad5df8b4a640d3b9cdb00ef1e044892a83d115a60`,
            },
        });
        if (!res.ok) {
            throw new Error('Failed to fetch benefits');
        }
        const data = await res.json();
        return data.data; 
    } catch (error) {
        console.error('Error fetching benefits:', error);
        return []; 
    }
}

const ProgramBenefits = () => {
    const [benefitsData, setBenefitsData] =  useState<any[]>([])
    useEffect(() => {
        async function fetchData() {
            const data = await fetchBenefits();
            console.log(data,'dataa');
            setBenefitsData(data);
        }
        fetchData();
    }, []);

    return (
        <section className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Program Benefits</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefitsData.map((benefit: any) => (
                        <div key={benefit.id} className="bg-white rounded-lg shadow-lg p-6">
                            <div className="flex justify-center mb-4">
                                <div style={{ backgroundColor: "#25CFC6" }} className="bg-red-500 rounded-full overflow-hidden w-16 h-16 flex justify-center items-center">
                                    <Image
                                        src={"http://127.0.0.1:1337" + benefit.attributes.image.data.attributes.url} 
                                        alt={benefit.attributes.Title || 'Default Title'}
                                        width={benefit.attributes.image.data.attributes.width || 26}
                                        height={benefit.attributes.image.data.attributes.height || 26}
                                    />
                                </div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{benefit.attributes.Title}</h3>
                            <p className="text-gray-600">{benefit.attributes.description}</p>
                        </div>
                    ))}                </div>
            </div>
        </section>
    );
};

export default ProgramBenefits;
