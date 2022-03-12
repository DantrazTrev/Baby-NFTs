// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

contract TestGas {
    uint256 a;
    uint256 b;
    uint256 c;

    function test1() public {
        a++;
    }

    function test2() public {
        a++;
        b++;
    }

    function test3() public {
        a++;
        b++;
        c++;
    }

    function test4() public {
        c = a + b;
    }

    function test5() public {
        b = a + c;
        test4();
    }
}
