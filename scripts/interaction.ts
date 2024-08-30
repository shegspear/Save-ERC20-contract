import { ethers } from "hardhat";

async function main() {
    const web3CXITokenAddress = "0x1d166a426b9d4666679daaF090c970a3d50656C5";
    const web3CXI = await ethers.getContractAt("IERC20", web3CXITokenAddress);

    const saveERC20ContractAddress = "0x077Ad36997553307F39D74dbd9dAe2dacD7170D9";
    const saveERC20 = await ethers.getContractAt("ISaveERC20", saveERC20ContractAddress);

    // Approve savings contract to spend token
    const approvalAmount = ethers.parseUnits("1000", 18);

    const approveTx = await web3CXI.approve(saveERC20, approvalAmount);
    approveTx.wait();

    const contractBalanceBeforeDeposit = await saveERC20.getContractBalance();
    console.log("Contract balance before :::", contractBalanceBeforeDeposit);

    const depositAmount = ethers.parseUnits("150", 18);
    const depositTx = await saveERC20.deposit(depositAmount);

    console.log(depositTx);

    depositTx.wait();

    const contractBalanceAfterDeposit = await saveERC20.getContractBalance();

    console.log("Contract balance after :::", contractBalanceAfterDeposit);



    // Withdrawal Interaction
    const withdrawalAmount = ethers.parseUnits("10", 18);
    const withdrawalTx = await saveERC20.withdraw(withdrawalAmount);
    withdrawalTx.wait();

    console.log("Withdrawal reciept ::: ", withdrawalTx);

    
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
