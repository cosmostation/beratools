const BANK_ABI = [
    {
      "type": "function",
      "name": "getAllBalances",
      "inputs": [
        {
          "name": "accountAddress",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
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
      "name": "getAllSpendableBalances",
      "inputs": [
        {
          "name": "accountAddress",
          "type": "address",
          "internalType": "address"
        }
      ],
      "outputs": [
        {
          "name": "",
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
      "name": "getAllSupply",
      "inputs": [],
      "outputs": [
        {
          "name": "",
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
      "name": "getBalance",
      "inputs": [
        {
          "name": "accountAddress",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "denom",
          "type": "string",
          "internalType": "string"
        }
      ],
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
      "name": "getSpendableBalance",
      "inputs": [
        {
          "name": "accountAddress",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "denom",
          "type": "string",
          "internalType": "string"
        }
      ],
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
      "name": "getSupply",
      "inputs": [
        {
          "name": "denom",
          "type": "string",
          "internalType": "string"
        }
      ],
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
      "name": "send",
      "inputs": [
        {
          "name": "toAddress",
          "type": "address",
          "internalType": "address"
        },
        {
          "name": "amount",
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
      "type": "event",
      "name": "Burn",
      "inputs": [
        {
          "name": "burner",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
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
    },
    {
      "type": "event",
      "name": "CoinReceived",
      "inputs": [
        {
          "name": "receiver",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
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
    },
    {
      "type": "event",
      "name": "CoinSpent",
      "inputs": [
        {
          "name": "spender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
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
    },
    {
      "type": "event",
      "name": "Coinbase",
      "inputs": [
        {
          "name": "minter",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
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
    },
    {
      "type": "event",
      "name": "Message",
      "inputs": [
        {
          "name": "sender",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "Transfer",
      "inputs": [
        {
          "name": "recipient",
          "type": "address",
          "indexed": true,
          "internalType": "address"
        },
        {
          "name": "amount",
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
  export default BANK_ABI;