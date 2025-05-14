export const CONTRACT_ADDRESS:any = '0x5FbDB2315678afecb367f032d93F642f64180aa3';
export const  ABI= [
    {
        "type": "constructor",
        "inputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "function",
        "name": "MIN_LISTING_FEE",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "counter",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPlatformBalance",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPropertyById",
        "inputs": [
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "",
                "type": "tuple",
                "internalType": "struct RealEstatePlatform.PropertyDetails",
                "components": [
                    {
                        "name": "propertyName",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "location",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "costOfProperty",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "propertyDescription",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "propertyImages",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "timeStamp",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "propertyOwnerAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "getPropertyList",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "tuple[]",
                "internalType": "struct RealEstatePlatform.PropertyDetails[]",
                "components": [
                    {
                        "name": "propertyName",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "location",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "costOfProperty",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "propertyDescription",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "propertyImages",
                        "type": "string",
                        "internalType": "string"
                    },
                    {
                        "name": "timeStamp",
                        "type": "uint256",
                        "internalType": "uint256"
                    },
                    {
                        "name": "propertyOwnerAddress",
                        "type": "address",
                        "internalType": "address"
                    },
                    {
                        "name": "id",
                        "type": "uint256",
                        "internalType": "uint256"
                    }
                ]
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "isPlatformOwner",
        "inputs": [],
        "outputs": [
            {
                "name": "",
                "type": "bool",
                "internalType": "bool"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "listProperty",
        "inputs": [
            {
                "name": "_propertyName",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_location",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_costOfProperty",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "_propertyDescription",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "_propertyImages",
                "type": "string",
                "internalType": "string"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "purchaseProperty",
        "inputs": [
            {
                "name": "propertyID",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [],
        "stateMutability": "payable"
    },
    {
        "type": "function",
        "name": "s_propertyDetails",
        "inputs": [
            {
                "name": "count",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "outputs": [
            {
                "name": "propertyName",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "location",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "costOfProperty",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "propertyDescription",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "propertyImages",
                "type": "string",
                "internalType": "string"
            },
            {
                "name": "timeStamp",
                "type": "uint256",
                "internalType": "uint256"
            },
            {
                "name": "propertyOwnerAddress",
                "type": "address",
                "internalType": "address"
            },
            {
                "name": "id",
                "type": "uint256",
                "internalType": "uint256"
            }
        ],
        "stateMutability": "view"
    },
    {
        "type": "function",
        "name": "withdrawBalanceFromPlatform",
        "inputs": [],
        "outputs": [],
        "stateMutability": "nonpayable"
    },
    {
        "type": "event",
        "name": "BalanceWithdrawnByPlatformOwner",
        "inputs": [
            {
                "name": "platformOwner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "amount",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "message",
                "type": "string",
                "indexed": false,
                "internalType": "string"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "PropertyAdded",
        "inputs": [
            {
                "name": "owner",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "propertyId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "message",
                "type": "string",
                "indexed": false,
                "internalType": "string"
            }
        ],
        "anonymous": false
    },
    {
        "type": "event",
        "name": "PropertyPurchased",
        "inputs": [
            {
                "name": "buyer",
                "type": "address",
                "indexed": true,
                "internalType": "address"
            },
            {
                "name": "propertyId",
                "type": "uint256",
                "indexed": true,
                "internalType": "uint256"
            },
            {
                "name": "amountPaid",
                "type": "uint256",
                "indexed": false,
                "internalType": "uint256"
            },
            {
                "name": "message",
                "type": "string",
                "indexed": false,
                "internalType": "string"
            }
        ],
        "anonymous": false
    },
    {
        "type": "error",
        "name": "RealEstatePlatform__AsPropertyOwnerCannotPurchase",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RealEstatePlatform__InSufficientAmountToBuyAProperty",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RealEstatePlatform__InValidAddressCannotListProperty",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RealEstatePlatform__ListingFeeLowerThanMinListingFee",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RealEstatePlatform__NoBalanceToWithdraw",
        "inputs": []
    },
    {
        "type": "error",
        "name": "RealEstatePlatform__NotAPlatformOwner",
        "inputs": []
    }
]