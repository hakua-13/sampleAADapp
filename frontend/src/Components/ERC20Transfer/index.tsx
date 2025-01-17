import React, { useState } from 'react';
import './../../App.css';
import erc20Transfer from '../../scripts/simpleAccount/erc20Transfer';
import { CLIOpts } from "../../utils/types";

/**
 * ER20Transfer Component
 */
const ERC20Transfer = (props:any) => { 
    const [tokenAddress, setTokenAddress] = useState('0x326C977E6efc84E512bB9C30f76E30c160eD06FB');
    const [address, setAddress] = useState('');
    const [amount, setAmount] = useState('');

    const {
        setIsLoading,
        factoryAddress,
        contractAddress,
    } = props;

    const handleErc20Transfer = async () => {
        const opts: CLIOpts = {
            dryRun: false, // Set to true if you want to perform a dry run
            withPM: false, // Set to true if you want to use a paymaster
        };
    
        try {
            setIsLoading(true);
            await erc20Transfer(tokenAddress, address, amount, opts, factoryAddress);
            alert('Transfer successful');
            console.log('Transfer successful');
            setIsLoading(false);
        } catch (err) {
            console.error('Transfer failed', err);
            alert('Transfer failed');
            setIsLoading(false);
        }
    };

    return (
        <div className='px-6 py-6 bg-white rounded-md border-b border-gray-200'>
            <h1 className='text-lg mb-4'>Let's ERC20 Token transfer!!</h1>
            <input
                className='block'
                type="text"
                value={tokenAddress}
                onChange={(e) => setTokenAddress(e.target.value)}
                placeholder="Enter ERC20 Token address"
            />
            <input
                className='block'
                type="text"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter to address"
            />
            <input
                className='block'
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter amount"
            />
            <button
                onClick={handleErc20Transfer}
            >
                Transfer
            </button>
        </div>
    );
}

export default ERC20Transfer;
