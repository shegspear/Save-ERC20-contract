import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const tokenAddress = "0x1d166a426b9d4666679daaF090c970a3d50656C5";

const SaveERC20Module = buildModule("SaveERC20Module", (m) => {

    const save = m.contract("SaveERC20", [tokenAddress]);

    return { save };
});

export default SaveERC20Module;

// Deployed SaveERC20: 0xD410219f5C87247d3F109695275A70Da7805f1b1
