const BERACHEF_ABI = [
    {
      "type": "function",
      "name": "getActiveCuttingBoard",
      "inputs": [
        {
          "name": "operatorAddr",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct IBerachefModule.CuttingBoard",
          "components": [
            {
              "name": "consAddr",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "weights",
              "type": "tuple[]",
              "internalType": "struct IBerachefModule.Weight[]",
              "components": [
                {
                  "name": "receiverAddress",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "percentageNumerator",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ]
            },
            {
              "name": "startEpoch",
              "type": "int64",
              "internalType": "int64"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getDelegation",
      "inputs": [
        {
          "name": "operatorAddr",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "address",
          "internalType": "address"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getQueuedCuttingBoard",
      "inputs": [
        {
          "name": "operatorAddr",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "tuple",
          "internalType": "struct IBerachefModule.CuttingBoard",
          "components": [
            {
              "name": "consAddr",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "weights",
              "type": "tuple[]",
              "internalType": "struct IBerachefModule.Weight[]",
              "components": [
                {
                  "name": "receiverAddress",
                  "type": "address",
                  "internalType": "address"
                },
                {
                  "name": "percentageNumerator",
                  "type": "uint256",
                  "internalType": "uint256"
                }
              ]
            },
            {
              "name": "startEpoch",
              "type": "int64",
              "internalType": "int64"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "queueNewCuttingBoard",
      "inputs": [
        {
          "name": "operatorAddr",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "weights",
          "type": "tuple[]",
          "internalType": "struct IBerachefModule.Weight[]",
          "components": [
            {
              "name": "receiverAddress",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "percentageNumerator",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "name": "startEpoch",
          "type": "int64",
          "internalType": "int64"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "payable"
    },
    {
      "type": "function",
      "name": "setDelegation",
      "inputs": [
        {
          "name": "delegationAddress",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "function",
      "name": "updateFriendsOfTheChef",
      "inputs": [
        {
          "name": "receiverAddress",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "friendOfTheChef",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "outputs": [
        {
          "name": "",
          "type": "bool",
          "internalType": "bool"
        }
      ],
      "stateMutability": "nonpayable"
    },
    {
      "type": "event",
      "name": "QueueCuttingBoard",
      "inputs": [
        {
          "name": "consensusAddr",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "cuttingBoardWeights",
          "type": "tuple[]",
          "indexed": false,
          "internalType": "struct IBerachefModule.Weight[]",
          "components": [
            {
              "name": "receiverAddress",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "percentageNumerator",
              "type": "uint256",
              "internalType": "uint256"
            }
          ]
        },
        {
          "name": "cuttingBoardStartEpoch",
          "type": "int64",
          "indexed": false,
          "internalType": "int64"
        }
      ],
      "anonymous": false
    }
  ]
  
  export default BERACHEF_ABI;