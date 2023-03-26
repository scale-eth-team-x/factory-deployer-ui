import { useContract, useSigner } from "wagmi";
import { getAddress } from "@ethersproject/address";
import factoryAggregatorABI from './abi/FactoryAggregator.json';
import { FactoryAggregatorParams } from "./useContractFactoryAggregator.types";

const useContractFactoryAggregator = () => {

  const { data: signer } = useSigner()


  const factoryAggregatorContract = useContract({
    address: import.meta.env.VITE_FACTORY_AGGREGATOR_CONTRACT_ADDRESS,
    abi: factoryAggregatorABI,
    signerOrProvider: signer,
  })

  const addFactory = async (params: FactoryAggregatorParams) => {

    console.log({
      address: import.meta.env.VITE_FACTORY_AGGREGATOR_CONTRACT_ADDRESS,
      abi: factoryAggregatorABI,
      signerOrProvider: signer,
    })

    console.log(factoryAggregatorContract);

    const { _factoryAddress, _factoryName, _factoryDescription, _audited } = params;
  
    return await factoryAggregatorContract?.addFactory(
      getAddress(_factoryAddress), _factoryName, _factoryDescription, _audited
    );
  
  }

  return { addFactory }
}

export default useContractFactoryAggregator;