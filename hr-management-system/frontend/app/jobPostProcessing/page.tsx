import Link from "next/link";

export default function HomePage(){
  return(
    <>
    <Link href={`/jobPostProcessing/apply`}>Apply For Job</Link>
    <br/>
    <Link href={`/jobPostProcessing/createPost`}>Post Job Requirments</Link>
    <br/>
    <Link href={`/jobPostProcessing/showAllJobPost`}>Show All Job Post</Link>
    </>
  );
}