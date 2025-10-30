import { Metadata } from "next";
import { Suspense } from "react";
import SkeletonProductGrid from "@modules/skeletons/templates/skeleton-product-grid";
import RefinementList from "@modules/store/components/refinement-list";
import FeaturedProducts from "@modules/home/components/featured-products";
import Hero from "@modules/home/components/hero";
import { listCollections } from "@lib/data/collections";
import { getRegion } from "@lib/data/regions";
import PaginatedProducts from "@modules/store/templates/paginated-products";
import { SortOptions } from "@modules/store/components/refinement-list/sort-products";

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
      <div className="flex flex-col small:flex-row small:items-start py-6 content-container mt-8">
        <div className="w-full small:w-3/4 pb-6">
          <div className="mb-15 text-2xl-semi text-[8vw] font-clash">
            <h1 data-testid="store-page-title mb-4">Explore</h1>
          </div>
          <Suspense fallback={<SkeletonProductGrid />}>
            <FeaturedProducts region={region} />
            <PaginatedProducts
              sortBy={sort}
              page={pageNumber}
              countryCode={countryCode}
            />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
