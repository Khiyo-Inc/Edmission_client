"use client"

import Sidebar from "@/components/Sidebar/Sidebar";
// import StillCantFind from "@/components/StillCantFind";
import UniSearchCard from "@/components/Universities/UniSearchCard";
import { University } from "@/types/UniversityTypes";
import Link from "next/link";
import { useEffect, useState } from "react";
import { GoChevronDown } from "react-icons/go";

// const customUni: University[] = [
//   {
//     name: "Name",
//     image: "../ezname.jpg",
//     logo: "../logo.svg",
//     location: "Dhaka, Bangladesh",
//     description:
//       "Bangladesh University of Engineering and Technology, commonly known by the acronym BUET, is a public technological research university in Dhaka, Bangladesh. Founded in 1876 as the Dacca Survey School and gained university status in 1962, it is the oldest institution for the study of engineering, architecture, and urban planning.",
//     genre: "Engineering",
//     stars: 4.7,
//     totalReviews: 52,
//     sponsored: true,
//     identifier: "buta",
//   },
//   {
//     name: "Name",
//     image: "./ezname.jpg",
//     logo: "./logo.svg",
//     location: "Dhaka, Bangladesh",
//     description:
//       "Bangladesh University of Engineering and Technology, commonly known by the acronym BUET, is a public technological research university in Dhaka, Bangladesh. Founded in 1876 as the Dacca Survey School and gained university status in 1962, it is the oldest institution for the study of engineering, architecture, and urban planning.",
//     genre: "Engineering",
//     stars: 4.7,
//     totalReviews: 52,
//     sponsored: true,
//     identifier: "buta",
//   },
//   {
//     name: "Name",
//     image: "./ezname.jpg",
//     logo: "./logo.svg",
//     location: "Dhaka, Bangladesh",
//     description:
//       "Bangladesh University of Engineering and Technology, commonly known by the acronym BUET, is a public technological research university in Dhaka, Bangladesh. Founded in 1876 as the Dacca Survey School and gained university status in 1962, it is the oldest institution for the study of engineering, architecture, and urban planning.",
//     genre: "Engineering",
//     stars: 4.7,
//     totalReviews: 52,
//     sponsored: true,
//     identifier: "buta",
//   },
// ];

export default function page() {

  const [data, setData] = useState<University[]>([] as University[]);
  const [filters, setFilters] = useState({})

  useEffect(() => {
    async function fetchData() {
      try {
        const url = process.env.NEXT_PUBLIC_API
        console.log("Dafaks going on")
        console.log(url)
        const response = await fetch(url + "api/unis/");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="">
      <div className="py-8">
        <h1 className="text-3xl font-bold">Explore Universities</h1>
        <p className="text-md py-4">
          Search Through over 1,250 universities all around the world. Or take
          the Edmission Quiz to find the perfect college suited for you.
        </p>
      </div>

      <div className="flex flex-col gap-4 lg:flex-row pb-8">
        <div className="hidden lg:block lg:flex-1">
          <Sidebar setter={setData}/>
        </div>
        <div className="lg:hidden w-full p-4 text-md flex justify-between items-center bg-ed-white rounded-md">
          <span>Show filters</span>
          <span className="text-2xl">
            <GoChevronDown />
          </span>
        </div>
        <div className="md:flex-[3] flex flex-col gap-4 lg:p-0">
          {/* <p>sort relevance bar</p> */}
          {data.map((uni, i) => {
            return (
              <Link key={i} href={`university/${uni.identifier}`}>
                <UniSearchCard {...uni} />
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
