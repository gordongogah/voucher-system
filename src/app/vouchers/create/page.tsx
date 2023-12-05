import React from 'react';

const Page = () => {
  return (
    <>
      <span className="font-bold text-4xl">Voucher</span>

      <div className="">
        <h3 className='text-2xl font-bold text-center'>Create Voucher</h3>
      </div>
      <div className="">


<form className="max-w-md mx-auto">
  <div className="py-12">
    <label className='block'>
    <span className='text-gray-700'>Payment Method</span>
    <select  className='block w-full mt-1 rounded-md border-transparent bg-gray-100 focus:border-gray-500 focus:bg-white focus:ring-0'>
        <option> Choose payment method</option>
        <option>KES Account</option>
        <option>Mpesa</option>
        <option>USD Account</option>    
    </select>   
    </label>
    <label className='block p-1 mt-2'>
    <span className='text-gray-700'>Item Description</span>
    <input 
    type="text"
    placeholder='Add item'
    className='w-full rounded-md mt-1 block bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
     />
    </label>

    <label className=""></label>

  </div>
  <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>

      </div>
    </>
  );
};

export default Page;
