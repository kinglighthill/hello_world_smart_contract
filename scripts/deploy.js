async function main() {
    const helloWorldContract = await ethers.getContractFactory("HelloWorld")

    const helloWorld = await helloWorldContract.deploy("KingHolyhill")
    console.log("Contract deployed to address: ", helloWorld.address)
}

const runMain = async () => {
    try {
      await main()
      process.exit(0)
    } catch (error) {
      console.error(error)
      process.exit(1)
    }
}
  
runMain()