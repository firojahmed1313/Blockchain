import React, { useEffect, useState } from 'react'

const DisplaySender = ({state}) => {
    const [sender,setSender]=useState([]);
    const { contract } = state;
    useEffect(() => {
      const getAllData=async()=>{

          
          const data=await contract.getData();
          //console.log(data);
          setSender(data)
      }
      contract &&getAllData();
    }, [contract])
    
    console.log(sender);

  return (
    <>

    <div>DisplaySender</div>
    {sender.map((data) => {
        return data.name 
        })
    }
    </>
  )
}

export default DisplaySender