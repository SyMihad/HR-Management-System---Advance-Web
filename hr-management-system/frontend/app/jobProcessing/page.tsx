import Link from "next/link";

export default function HomePage(){
  return(
    <>
    <Link href={`/jobProcessing/showAllJobApplication`}>All Job Application</Link>
    <br/>
    <Link href={`/jobProcessing/showAllShortListed`}>Show All ShortListed</Link>
    <br/>
    <Link href={`/jobProcessing/showAllSelected`}>Show All Selected</Link>
    </>
  );
}