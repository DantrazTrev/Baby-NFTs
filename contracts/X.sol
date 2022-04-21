// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract X {
    uint256 x;

    function setX(uint256 _x) public {
        x = _x;
    }

    function getX() public view returns (uint256) {
        return x;
    }
}

contract Y {
    uint256 x;
    address ContractX;

    constructor(address a) {
        ContractX = a;
    }

    function setX(uint256 _x) public {
        x = _x;
        X(ContractX).setX(_x + 1);
    }

    function getX() public view returns (uint256) {
        return x;
    }
}
