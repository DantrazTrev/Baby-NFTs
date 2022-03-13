// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract BabyNFT {
    enum Class {
        materialgwrol,
        fuckboi,
        golddigger
    }

    mapping(address => uint256[]) addresstoChar;

    function generateRandom() public view virtual returns (uint256) {
        return
            uint256(
                keccak256(abi.encodePacked(block.difficulty, block.timestamp))
            );
    }

    function getChars() public view returns (uint256[] memory) {
        return addresstoChar[msg.sender];
    }

    function getStrength(uint256 char) public pure returns (uint256) {
        return (char >> 2) & 0x1F;
    }

    function getGreed(uint256 char) public pure returns (uint256) {
        return (char >> 7) & 0x1F;
    }

    function getSexAppeal(uint256 char) public pure returns (uint256) {
        return (char >> 12) & 0x1F;
    }

    function getWeirdness(uint256 char) public pure returns (uint256) {
        return (char >> 17) & 0x1F;
    }

    function getUmfh(uint256 char) public pure returns (uint256) {
        return (char >> 22) & 0x1F;
    }

    function createChar(Class class) public payable {
        require(msg.value >= 0.05 ether, "Send more money , bitch");
        uint256[] memory stats = new uint256[](5);
        stats[0] = 2;
        stats[1] = 7;
        stats[2] = 12;
        stats[3] = 17;
        stats[4] = 22;

        uint256 len = 5;

        uint256 char = uint256(class);

        do {
            uint256 pos = generateRandom() % len;
            uint256 value = (generateRandom() % (13 + len)) + 1;
            char |= value << stats[pos];
            len--;
            stats[pos] = stats[len];
        } while (len >= 0);

        addresstoChar[msg.sender].push(char);
    }
}
