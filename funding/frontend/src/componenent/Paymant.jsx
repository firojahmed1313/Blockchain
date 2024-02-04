import React from 'react'
import { ethers } from 'ethers';
const Paymant = ({ state }) => {
    const giveMoney = async (e) => {
        e.preventDefault();
        const { contract } = state;
        const name = document.querySelector("#name").value;
        const message = document.querySelector("#message").value;
        console.log(name, message, contract);
        try {
            const amount = { value: ethers.parseEther("0.001") };
            console.log(amount)
            const transaction = await contract.sendMoney(name, message, amount);
            await transaction.wait();
            console.log("Transaction is done");
            console.log(transaction);
        } catch (error) {
            console.warn(error)
        }

        /*try {
            const data = await contract.messagef();
            console.log(data);
        } catch (error) {
            console.warn(error)
        }*/


    }
    return (
        <>

            <div>Paymant</div>
            <div>
                <form onSubmit={giveMoney}>
                    <div>
                        <level>Name : </level>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            placeholder="Enter Your Name"
                        ></input>
                    </div>
                    <div>
                        <level>Message : </level>
                        <input
                            type="text"
                            className="form-control"
                            id="message"
                            placeholder="Enter Your Message"
                        ></input>
                    </div>
                    <button type='submit'>Send</button>
                </form>
            </div>
        </>
    )
}

export default Paymant