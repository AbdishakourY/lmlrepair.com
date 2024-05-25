import CustomContainer from "@/components/CustomContainer";
import BrandsTable from "../../../components/BrandsTable";
import { getBrands } from "@/lib/db/brandCrud";

async function Brands() {
  let brands: any = [];
  let error = "";

  try {
    brands = await getBrands();
  } catch (err) {
    console.error("Error fetching brands:", err);
    error = "Check your internet connection.";
  }
  return (
    <CustomContainer>
      <div className="flex flex-col justify-center gap-8">
        {error ? (
          <p className="text-red-500 text-center">{error}</p>
        ) : (
          <BrandsTable brands={brands} />
        )}
      </div>
    </CustomContainer>
  );
}

export default Brands;
