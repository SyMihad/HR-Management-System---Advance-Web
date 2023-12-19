import Link from "next/link";

export default function HomePage(){
  return(
    <>
    <Link href={`/jobPostProcessing`}>Job Post Processing</Link>
    <br/>
    <Link href={`/jobProcessing`}>Job Processing</Link>
    </>
  );
}