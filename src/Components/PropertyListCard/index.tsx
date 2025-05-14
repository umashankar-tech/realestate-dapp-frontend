import React from 'react';
import { ethers } from "ethers";
import { useWeb3 } from '@/context/Web3Provider';
import { useRouter } from 'next/navigation';

const PropertyListCard = ({ properties, listProperty }: any) => {

    console.log(properties);
    const { signer, contract, account, setContractUpdated }: any = useWeb3();
    const router = useRouter();

    const purchaseProperty = (property: any) => {
        if (!signer) {
            alert("Connect Wallet Please")
            return;
        }

        const purchase = async () => {
            try {
                const properties = await contract.purchaseProperty(property?.id, { value: property?.costOfProperty });
                listProperty();
                console.log(properties, "PRUCHASE DONE")

                contract.on("PropertyPurchased", (buyer: any, propertyId: any) => {
                    console.log("Property Purchased Event:");
                    console.log("Buyer:", buyer);
                    console.log("Property ID:", propertyId.toString());

                    // You can update your UI here
                });
            }
            catch (err: any) {
                console.error("Failed to fetch property list:", err);
            }
            console.log((property?.id), "PURCHASE TRIGERRED")
        }

        purchase();

        return;

    }

    return (
        <div className="mt-8 space-y-4">
            <div className='grid grid-cols-4 gap-4'>

                {properties.map((property: any, index: number) => (
                    <>
                        {
                            property.location && <div
                                key={index}
                                className="border border-[#e7e9dd] bg-gray-50 shadow-2xl rounded-xl  flex flex-col" // <-- add flex flex-col here
                            >
                                {property.propertyImages && (
                                    <div className="flex flex-wrap rounded-xl gap-2 ">
                                        <img
                                            src={property.propertyImages}
                                            alt={`Property Image`}
                                            className="w-full h-[100%] rounded-xl object-cover "
                                        />
                                    </div>
                                )}
                                <div className='p-4 overflow-hidden flex-1'> {/* <-- add flex-1 here */}
                                    <h3 className="text-xl mt-3 font-semibold text-[#3c4508]">
                                        {property.propertyName}
                                    </h3>
                                    <p><strong>Location:</strong> {property.location}</p>
                                    <p><strong>Cost:</strong> {ethers.formatEther(property.costOfProperty)} ETH</p>
                                    <p><strong>Description:</strong> {property.propertyDescription.slice(0, 100)}...</p>
                                    <p className=''><strong>Owner:</strong> {property.propertyOwnerAddress.slice(0, 8)}...</p>
                                    <p
                                        className='underline mt-2 text-amber-500 cursor-pointer'
                                        onClick={() => router.push(`/detail/${property.id}`)}
                                    >
                                        View Details
                                    </p>
                                </div>
                                <div className="flex justify-between gap-3 px-2 mt-4 mb-4"> {/* optional: add mb-4 for spacing */}
                                    <button
                                        className="flex items-center mb-0 px-4 py-2 bg-white rounded-lg text-[#3c4508] font-semibold shadow-2xl"
                                        disabled
                                    >
                                        <img
                                            src="http://127.0.0.1:8080/ipfs/QmchDJu4FTFsxrMVcJwDC8v3jsSugJawDj4UZoBCgPtwcA"
                                            alt="ETH"
                                            className="w-9 h-6"
                                        />
                                        {ethers.formatEther(property.costOfProperty)} ETH
                                    </button>
                                    <button
                                        className="px-4 py-2 bg-gray-50 shadow-[#e0e0da] shadow-lg text-[#0d9455] rounded-lg font-semibold hover:bg-[#55660f] hover:text-white hover:shadow-[#55660f] transition"
                                        onClick={() => { purchaseProperty(property); }}
                                    >
                                        Buy Now
                                    </button>
                                </div>
                            </div>
                        }



                    </>

                ))}

            </div>

        </div>
    );
}

export default PropertyListCard;
