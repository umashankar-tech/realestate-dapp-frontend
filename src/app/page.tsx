'use client';
import Image from "next/image";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import { useWeb3 } from "../context/Web3Provider";
import PropertyListCard from "@/Components/PropertyListCard";


export default function Home() {
  const { signer, contract, account, setContractUpdated }: any = useWeb3();

  const [open, setOpen] = useState(false);
  const [properties, setProperties] = useState<any>();
  const [form, setForm] = useState({
    propertyName: "",
    location: "",
    costOfProperty: "",
    propertyDescription: "",
    propertyImages: ""
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const toggleAddProperty = () => {
    if (!signer) {
      alert("Connect Wallet")
      return;
    }
    setError('')
    setOpen((prev) => !prev)
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };


  const listProperty = async () => {
    try {
      const properties = await contract.getPropertyList();
      setProperties(properties); // Since it's already an array of PropertyDetails
    } catch (error) {
      console.error("Failed to fetch property list:", error);
    }
  };

  useEffect(() => {
    listProperty();
  },[contract,signer])

  console.log(properties)

  const handleAddProperty = async () => {

    console.log(form, "property details")

    try {
      
      const MIN_LISTING_FEE = ethers.parseEther("1") 
      const tx = await contract.listProperty(
        form.propertyName,
        form.location,
        ethers.parseEther(form.costOfProperty),
        form.propertyDescription,
        form.propertyImages,
        { value: MIN_LISTING_FEE }
      );
      await tx.wait();
      listProperty();
      setOpen(false);
      setForm({ propertyName: "", location: "", costOfProperty: "", propertyDescription: "", propertyImages: "" });
    } catch (err: any) {
      setError(err.message || "Transaction failed");
      console.log(err, "ERROR")
    }
    setLoading(false);
  };

  return (
    <div className=" p-5">
      <div className="flex justify-between items-center mr-10">
        <button onClick={toggleAddProperty} className='bg-[#c3d49a] font-[500] px-5 py-2 weig rounded-lg text-xl  text-[#202602]  '>
          List Property
        </button>
        <button onClick={listProperty} className='rounded-lg cursor-pointer text-xl underline text-[#202602]  '>
          Refresh
        </button>
      </div>

      <div>

        {Array.isArray(properties) && properties.length > 0 ? (
          <>
            <PropertyListCard properties={properties} listProperty={()=>listProperty()} />
          </>
        ) : (
          <p className="mt-8 text-gray-600">No properties listed yet.</p>
        )}

      </div>
      {open && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-0 z-50">
          <div className="bg-[#e4e8ca] rounded-lg shadow-lg p-8 w-full max-w-md">
            <h2 className="text-2xl mb-4 text-[#3c4508] font-bold">Add Property</h2>
          
            <div className="space-y-3">
              <input
                className="w-full px-3 py-2 rounded border border-[#b8d12a] text-[#3c4508] focus:outline-none"
                placeholder="Property Name"
                name="propertyName"
                value={form.propertyName}
                onChange={handleChange}
              />
              <input
                className="w-full px-3 py-2 rounded border border-[#b8d12a] text-[#3c4508] focus:outline-none"
                placeholder="Location"
                name="location"
                value={form.location}
                onChange={handleChange}
              />
              <input
                className="w-full px-3 py-2 rounded border border-[#b8d12a] text-[#3c4508] focus:outline-none"
                placeholder="Cost of Property (in ETH)"
                name="costOfProperty"
                type="number"
                value={form.costOfProperty}
                onChange={handleChange}
              />
              <textarea
                className="w-full px-3 py-2 rounded border border-[#b8d12a] text-[#3c4508] focus:outline-none"
                placeholder="Property Description"
                name="propertyDescription"
                value={form.propertyDescription}
                onChange={handleChange}
              />
              <input
                className="w-full px-3 py-2 rounded border border-[#b8d12a] text-[#3c4508] focus:outline-none"
                placeholder="Property Images (comma separated URLs)"
                name="propertyImages"
                value={form.propertyImages}
                onChange={handleChange}
              />
              {error && <div className="text-red-600 text-sm">{error}</div>}
              <div className="flex justify-end gap-2 mt-4">
                <button
                  className="bg-[#3c4508] text-[#e4e8ca] px-4 py-2 rounded hover:bg-[#b8d12a] hover:text-[#3c4508]"
                  onClick={toggleAddProperty}
                  disabled={loading}
                >
                  Cancel
                </button>
                <button
                  className="bg-[#b8d12a] text-[#3c4508] px-4 py-2 rounded hover:bg-[#3c4508] hover:text-[#e4e8ca]"
                  onClick={handleAddProperty}
                  disabled={loading}
                >
                  {loading ? "Adding..." : "Add Property"}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
