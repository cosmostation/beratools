const BRIBE_ABI = [
    {
      "type": "function",
      "name": "createBribe",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "startEpoch",
          "type": "uint64",
          "internalType": "uint64"
        },
        {
          "name": "numBlockProposals",
          "type": "uint64",
          "internalType": "uint64"
        },
        {
          "name": "bribePerProposal",
          "type": "tuple[]",
          "internalType": "struct Cosmos.Coin[]",
          "components": [
            {
              "name": "amount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "denom",
              "type": "string",
              "internalType": "string"
            }
          ]
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
      "name": "getActiveValidatorBribes",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "bribes",
          "type": "tuple[]",
          "internalType": "struct IBribeModule.Bribe[]",
          "components": [
            {
              "name": "consensusAddress",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "startEpoch",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "numBlockProposals",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "numBlockProposalsBribed",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "bribePerProposal",
              "type": "tuple[]",
              "internalType": "struct Cosmos.Coin[]",
              "components": [
                {
                  "name": "amount",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "denom",
                  "type": "string",
                  "internalType": "string"
                }
              ]
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getAllValidatorBribes",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "bribes",
          "type": "tuple[]",
          "internalType": "struct IBribeModule.Bribe[]",
          "components": [
            {
              "name": "consensusAddress",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "startEpoch",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "numBlockProposals",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "numBlockProposalsBribed",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "bribePerProposal",
              "type": "tuple[]",
              "internalType": "struct Cosmos.Coin[]",
              "components": [
                {
                  "name": "amount",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "denom",
                  "type": "string",
                  "internalType": "string"
                }
              ]
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getBribeFees",
      "inputs": [],
      "outputs": [
        {
          "name": "fee",
          "type": "tuple[]",
          "internalType": "struct Cosmos.Coin[]",
          "components": [
            {
              "name": "amount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "denom",
              "type": "string",
              "internalType": "string"
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "getBribes",
      "inputs": [
        {
          "name": "operator",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "startEpoch",
          "type": "uint64",
          "internalType": "uint64"
        }
      ],
      "outputs": [
        {
          "name": "bribes",
          "type": "tuple[]",
          "internalType": "struct IBribeModule.Bribe[]",
          "components": [
            {
              "name": "consensusAddress",
              "type": "address",
              "internalType": "address"
            },
            {
              "name": "startEpoch",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "numBlockProposals",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "numBlockProposalsBribed",
              "type": "uint64",
              "internalType": "uint64"
            },
            {
              "name": "bribePerProposal",
              "type": "tuple[]",
              "internalType": "struct Cosmos.Coin[]",
              "components": [
                {
                  "name": "amount",
                  "type": "uint256",
                  "internalType": "uint256"
                },
                {
                  "name": "denom",
                  "type": "string",
                  "internalType": "string"
                }
              ]
            }
          ]
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "function",
      "name": "updateParams",
      "inputs": [
        {
          "name": "fee",
          "type": "tuple[]",
          "internalType": "struct Cosmos.Coin[]",
          "components": [
            {
              "name": "amount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "denom",
              "type": "string",
              "internalType": "string"
            }
          ]
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
      "name": "BribeCreated",
      "inputs": [
        {
          "name": "bribeCreator",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "consensusAddr",
          "type": "address",
          "indexed": false,
          "internalType": "address"
        },
        {
          "name": "startEpoch",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        },
        {
          "name": "numBlockProposals",
          "type": "uint64",
          "indexed": false,
          "internalType": "uint64"
        },
        {
          "name": "bribePerProposal",
          "type": "tuple[]",
          "indexed": false,
          "internalType": "struct Cosmos.Coin[]",
          "components": [
            {
              "name": "amount",
              "type": "uint256",
              "internalType": "uint256"
            },
            {
              "name": "denom",
              "type": "string",
              "internalType": "string"
            }
          ]
        }
      ],
      "anonymous": false
    }
  ]
  export default BRIBE_ABI;