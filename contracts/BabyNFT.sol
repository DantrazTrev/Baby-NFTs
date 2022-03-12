// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract BabyNFT {
    enum Class {
        materialgwrol,
        fuckboi,
        golddigger
    }

    mapping(address => uint256[]) addresstoChar;

    function getChars() public view returns (uint256[] memory) {
        return addresstoChar[msg.sender];
    }

    function createChar(Class class) public payable {
        require(msg.value >= 0.05 ether, "Send more money , bitch");
    }
}
