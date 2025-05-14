// src/context/Web3Provider.tsx
"use client";
import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { ethers } from "ethers";
import { ABI,CONTRACT_ADDRESS } from "@/constants";


const Web3Context = createContext(undefined);

export const useWeb3 = () => {
    const context = useContext(Web3Context);
    if (!context) throw new Error("useWeb3 must be used within a Web3Provider");
    return context;
};

export const Web3Provider = ({ children }) => {
    const [contract, setContract] = useState(null);
    const [provider, setProvider] = useState(null);
    const [signer, setSigner] = useState(null);
    const [account, setAccount] = useState(null);
    const [contractUpdated, setContractUpdated] = useState(null)
    useEffect(() => {
        if (window.ethereum) {
            const browserProvider = new ethers.BrowserProvider(window.ethereum);
            setProvider(browserProvider);
        }
    }, []);

    const connectWallet = async () => {
        if (!provider) return;
        const accounts = await provider.send("eth_requestAccounts", []);
        setAccount(accounts[0]);
        const signer = await provider.getSigner();
        const contractInstance = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
        setContract(contractInstance);
        setSigner(signer);
    };

    const disconnectWallet = () => {
        setAccount(null);
        setSigner(null);
    };

    return (
        <Web3Context.Provider value={{ provider, signer,contractUpdated,  account,contract,setContractUpdated, connectWallet, disconnectWallet }}>
            {children}
        </Web3Context.Provider>
    );
};
