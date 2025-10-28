'use client'


import Button from '@/app/(components)/ui/Button'
import React from 'react'

const CountryCard = ({ setSelectedCountry, countries }) => {
    return (
        <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {countries.map((country, index) => (
                    <div
                        key={index}
                        className="bg-white border rounded-[8px] drop-shadow-sm p-3.5 flex flex-col justify-between"
                    >
                        <div className=''>
                            <div className="flex items-center gap-2 mb-2">
                                <img src={country.flag} alt={country.name} className="w-11 h-7.5" />
                                <h3 className="font-semibold text-base text-primarycolor font-inter leading-5 uppercase">{country.name}</h3>
                            </div>

                            <hr className="border-b border-gray-200" />
                            <div className=' space-y-2 mt-2'>
                                <p className="text-sm md:text-base font-inter font-medium  text-primaryheading text-start">
                                    <span>Universities:</span> {country.universities}
                                </p>
                                <p className="text-sm font-inter font-medium text-primarycolor leading-5 text-start">
                                    <span>Known for:</span> {country.knownFor}
                                </p>
                                <p className="text-sm font-inter font-medium text-primarycolor leading-5 text-start">
                                    <span>Top Cities:</span> {country.topCities}
                                </p>
                            </div>
                        </div>
                        <Button text="Explore Universities" onClick={() => setSelectedCountry(country.name)} cn={'mt-4'} />
                    </div>
                ))}
            </div>
            <></>
        </>
    )
}

export default CountryCard