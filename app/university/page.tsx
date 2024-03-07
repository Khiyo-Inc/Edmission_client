"use client"

import Sidebar from "@/components/Sidebar/Sidebar";
import AlumniCards from "@/components/Universities/AlumniCards";
import UniCatCards from "@/components/Universities/Categories/UniCatCards";
import UniReviews from "@/components/Universities/Categories/UniReviews";
import UniHero from "@/components/Universities/UniHero";
import UniNav from "@/components/Universities/UniNav";
import UniSearchCard from "@/components/Universities/UniSearchCard";
import { Reviews } from "@/types/CategoryTypes";
import { University } from "@/types/UniversityTypes";
import { useEffect, useState } from "react";

// const uni: University = {
//   name: "Name",
//   image: "../ezname.jpg",
//   logo: "logo.svg",
//   location: "Dhaka, Bangladesh",
//   description:
//     "Bangladesh University of Engineering and Technology, commonly known by the acronym BUET, is a public technological research university in Dhaka, Bangladesh. Founded in 1876 as the Dacca Survey School and gained university status in 1962, it is the oldest institution for the study of engineering, architecture, and urban planning.",
//   genre: "Engineering",
//   stars: 4.7,
//   totalReviews: 52,
//   sponsored: true,
//   identifier: "buta"
// }


export default function page({params}:{params: any}) {
  const [data, setData] = useState<University[]>([] as University[]);
  
  useEffect(() => {
    console.log("Bruh")
    console.log(params)
    async function fetchData() {
      try {
        const response = await fetch(`http://localhost:5050/api/unis/${params.uni}`);
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

  const reviews: Reviews[] = [
    {
      recommended: true,
      from: "Alumni (CSE)",
      date: "July 20, 2024",
      stars: 4,
      review: "If you do have to complete your undergrad from Bangladesh, this is the best option you have. It's the country's best engineering school. But the standards are still not up to the mark unfortunately."
    },
    {
      recommended: false,
      from: "Senior (EEE)",
      date: "July 20, 2024",
      stars: 3,
      review: "BUET is still the top university of Bangladesh only because of the admission exam. If there were no exams, I wouldn’t even consider BUET a top 10 university in Bangladesh."
    }
  ]


  return (
    <div className="space-y-8">
      <div className="">
        {data ? <UniHero uni={data[0]}/> : <p>Loading...</p>}
        {/* <UniNav /> */}
        <UniCatCards />
        <UniReviews reviews={reviews}/>
        <AlumniCards />
        <div className="h-4"></div>
      </div>
    </div>
  );
}
