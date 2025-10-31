import { Metadata } from "next";
import Hero from "@modules/home/components/hero";
import { listCollections } from "@lib/data/collections";
import { getRegion } from "@lib/data/regions";
import { SortOptions } from "@modules/store/components/refinement-list/sort-products";
import { Suspense } from "react";
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid";
import PaginatedProducts from "@modules/store/templates/paginated-products";

interface HomeProps {
  params: Promise<{ countryCode: string }>;
  searchParams?: {
    sort?: SortOptions;
    page?: string;
  };
}

export const metadata: Metadata = {
  title: "Medusa Next.js Starter Template",
  description:
    "A performant frontend ecommerce starter template with Next.js 15 and Medusa.",
};

export default async function Home({ params, searchParams }: HomeProps) {
  const { countryCode } = await params;
  const sort = searchParams?.sort || "created_at";
  const pageNumber = searchParams?.page ? parseInt(searchParams.page) : 1;

  let region, collections;
  try {
    region = await getRegion(countryCode);
    const { collections: collectionsData } = await listCollections({
      fields: "id, handle, title",
    });
    collections = collectionsData;
  } catch (error) {
    console.error("Failed to fetch region or collections:", error);
    return <div>Failed to load data. Please try again later.</div>;
  }

  if (!collections || !region) {
    return <div>No data available.</div>;
  }

  return (
    <div className="w-full min-h-screen">
      <Hero />
      
      <div className="flex flex-col small:flex-row small:items-start px-10 w-full my-5">
        <h2 className="mt-12 px-12 text-left font-clash text-[6vw] leading-tight tracking-tight font-semibold">
          Featured <br /> Products
        </h2>
        <div className="w-full">
          <Suspense fallback={<SkeletonProductGrid />}>
            <PaginatedProducts
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
