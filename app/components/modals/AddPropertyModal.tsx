'use client';

import Image from 'next/image';
import { useState } from 'react';
import Modal from './Modal';
import CustomButton from '../forms/CustomButton';
import Categories from '../addproperty/Categories';

import useAddPropertyModal from '@/app/hooks/useAddPropertyModal';

const AddPropertyModal = () => {
  //
  // States
  const [CurrentStep, setCurrentStep] = useState(1);
  const [dataCategory, setDataCategory] = useState('');

  //
  //
  
  const addPropertyModal = useAddPropertyModal();

  //
  //Set datas

  const setCategory = (category: string) => {
    setDataCategory(category)
  } 

  //
  //

  const content = (
    <>
      {CurrentStep == 1 ? (
        <>
            <h2 className="mb-6 text-2xl">Choose category</h2>

            <Categories
                dataCategory={dataCategory}
                setCategory={(category) => setCategory(category)}
            />

            <CustomButton 
                    label='Next'
                    onClick={() => setCurrentStep(2)}
                />
            </>
      ) : (
        <p>step 2</p>
      )}
    </>
  )

  return (
    <>
        <Modal
            isOpen={addPropertyModal.isOpen}
            close={addPropertyModal.close}
            label="Add property"
            content={content}
        />
    </>
  )
}

export default AddPropertyModal;