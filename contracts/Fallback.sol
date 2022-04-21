// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

interface IFallback {
    function count() external;
}

contract Fallback {
    function foo() internal view {
        console.log("HEi");
    }

    fallback() external payable {
        foo();
        console.log("Nope, not OG");

        revert("You're in the wrong street brother");
    }
}
