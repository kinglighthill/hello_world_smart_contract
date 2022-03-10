// SPDX-License-Identifier: MIT

pragma solidity >=0.7.3;

contract HelloWorld {
    string private greeting = "Hello World! ";
    string private name;

    constructor(string memory _name) {
        name = _name;
    }

    function setName(string memory _name) public {
        name = _name;
    }

    function sayHello () public view returns (string memory) {
        return string(abi.encode(greeting, name));
    }
}