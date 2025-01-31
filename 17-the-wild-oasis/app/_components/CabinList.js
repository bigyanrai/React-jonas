import CabinCard from "./CabinCard";
import { getCabins } from "../_lib/data-service";
import { unstable_noStore as noStore } from "next/cache";

async function CabinList({ filter }) {
  // noStore();

  const cabins = await getCabins();
  // console.log(cabins);

  if (!cabins.length) return null;

  let displaydCabins;
  if (filter == "all") displaydCabins = cabins;

  if (filter === "small")
    displaydCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3);
  if (filter === "medium")
    displaydCabins = cabins.filter(
      (cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7
    );
  if (filter === "large")
    displaydCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8);

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
        {displaydCabins.map((cabin) => (
          <CabinCard cabin={cabin} key={cabin.id} />
        ))}
      </div>
    </>
  );
}

export default CabinList;
