import React from 'react'
import Button from '../../ui/Button'
import { ArrowLeft } from 'lucide-react'
import UniversityGrid from './UniversityGrid'

const UniversitiesDetail = () => {
    return (
        <>
            <div className='mt-8'>
                <div className='max-w-[1560px] mx-auto'>
                    <Button text="Back to Programs" icon={<ArrowLeft />} color="text-white" bg="bg-primarycolor" cn="mb-6" />
                </div>
                <div>
                    <UniversityGrid />
                </div>

            </div>

        </>
    )
}

export default UniversitiesDetail