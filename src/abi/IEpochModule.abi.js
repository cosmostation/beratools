const EPOCH_ABI = [
    {
      "type": "function",
      "name": "getCurrentEpoch",
      "inputs": [
        {
          "name": "identifier",
          "type": "string",
          "internalType": "string"
        }
      ],
      "outputs": [
        {
          "name": "epochNumber",
          "type": "int64",
          "internalType": "int64"
        },
        {
          "name": "startTimestamp",
          "type": "int64",
          "internalType": "int64"
        },
        {
          "name": "endTimestamp",
          "type": "int64",
          "internalType": "int64"
        }
      ],
      "stateMutability": "view"
    },
    {
      "type": "event",
      "name": "EpochEnd",
      "inputs": [
        {
          "name": "epochNumber",
          "type": "int64",
          "indexed": true,
          "internalType": "int64"
        },
        {
          "name": "endTime",
          "type": "int64",
          "indexed": false,
          "internalType": "int64"
        }
      ],
      "anonymous": false
    },
    {
      "type": "event",
      "name": "EpochStart",
      "inputs": [
        {
          "name": "epochNumber",
          "type": "int64",
          "indexed": true,
          "internalType": "int64"
        },
        {
          "name": "startTime",
          "type": "int64",
          "indexed": false,
          "internalType": "int64"
        }
      ],
      "anonymous": false
    }
  ]
  export default EPOCH_ABI;