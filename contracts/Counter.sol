// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Counter {
    uint256 counter;

    function count() public returns (uint256) {
        counter++;
        console.log("Counter is now", counter);
        return counter;
    }

    function readCount() public view returns (uint256) {
        return counter;
    }
}
