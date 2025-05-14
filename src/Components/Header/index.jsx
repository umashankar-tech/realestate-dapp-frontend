'use client';
import React, { useEffect, useState } from 'react';
import { useWeb3 } from '../../context/Web3Provider';
import { ethers } from "ethers";

const defaultProfileImg =
    'https://avatars.githubusercontent.com/u/583231?v=4'; // Example default profile image

const Header = () => {
    const [platformBlce, setPlatformBlace] = useState();
    const [isPltfOwner, setIsPltfOwner] = useState(false)
    const { account, connectWallet, disconnectWallet, contract, contractUpdated } = useWeb3();


    useEffect(() => {
        const fetchBalance = async () => {
            if (!contract) return;
            try {
                const balance = await contract.getPlatformBalance();
                setPlatformBlace(balance)
                const owner = await contract.isPlatformOwner();
                setIsPltfOwner(owner);

            } catch (err) {
                console.error("Withdraw failed", err);
            }
        };

        fetchBalance()
    }, [contract, contractUpdated])


    const withdrawBlce = async() => {

        // withdrawBalanceFromPlatform
        if (!contract) return;
        try {
            const balance = await contract.withdrawBalanceFromPlatform();
         alert("Amount Withdraw to your Account")

        } catch (err) {
            console.error("Withdraw failed", err);
        }
    }

    return (
        <div className=' py-4 bg-[#303802] text-white flex justify-center flex-col  items-center  '>
            <div className=' flex px-10  w-[95%] justify-between items-center'>
                <h1 className='text-[22px] font-[600]  text-[#fafbf9]'> REAL_STATE_DAPP</h1>
                {account ? (
                    <div className="flex items-center gap-3">
                        {isPltfOwner && <div className=' flex text-xl mr-8 text-[#fbfcf5]'>

                            <button
                                className="flex mr-5 items-center mb-0 px-4 py-2 bg-white rounded-full text-[#3c4508]  shadow-2xl"
                                disabled
                            >
                                <img
                                    src="http://127.0.0.1:8080/ipfs/QmchDJu4FTFsxrMVcJwDC8v3jsSugJawDj4UZoBCgPtwcA"
                                    alt="ETH"
                                    className="w-9 h-6"
                                />
                                {`  PTF - BL : ${platformBlce ? `${ethers.formatEther(platformBlce)} ETH` : '0 ETH'} `}
                            </button>

                            <button
                                className="flex items-center mb-0 px-4 py-2 bg-white rounded-full text-[#3c4508] shadow-2xl"
                               onClick={withdrawBlce}
                            >
                                Withdraw
                                <img
                                    src="http://127.0.0.1:8080/ipfs/QmchDJu4FTFsxrMVcJwDC8v3jsSugJawDj4UZoBCgPtwcA"
                                    alt="ETH"
                                    className="w-9 h-6"
                                />
                              
                            </button>
                            

                    
                        </div>}
                        <img
                            src={defaultProfileImg}
                            alt="profile"
                            className="w-9 h-9 rounded-full border border-[#b8d12a]"
                        />
                        <p className="text-[#faf8f8] bg- text-lg">
                            {account.slice(0, 6)}...{account.slice(-4)}
                        </p>

                        <button
                            className='bg-[#161a02] px-6 py-2 rounded-full text-white text-lg ml-2'
                            onClick={disconnectWallet}
                        >
                            Disconnect
                        </button>
                    </div>
                ) : (
                    <button
                        className='bg-[#f3f4ec] px-12 py-2 rounded-full text-[#080808] text-lg '
                        onClick={connectWallet}
                    >
                        Connect Wallet
                    </button>
                )}
            </div>
        </div>
    );
}

export default Header;
