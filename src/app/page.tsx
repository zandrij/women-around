import Image from "next/image";

export default function Home() {
  return (
    <>
      hola puto 
      <br />
      <br />

      <Image src="/logo.svg" alt="Logo" width={255} height={255} /> <br />
      <h2 className="font-normal text-3xl">nunito 400</h2>
      <h2 className="font-medium text-3xl">nunito 500</h2>
      <h2 className="font-semibold text-3xl">nunito 600</h2>
      <h2 className="font-bold text-3xl">nunito 700</h2>
      <h2 className="font-extrabold text-3xl">nunito 800</h2>
      <h2 className="font-black text-3xl">nunito 900</h2>


      <div className="w-full flex flex-row gap-4 mt-5">
        <div className="w-16 h-16 bg-primary"></div>
        <div className="w-16 h-16 bg-secondary"></div>
        <div className="w-16 h-16 bg-grayPink"></div>
        <div className="w-16 h-16 bg-graySutil"></div>
        <div className="w-16 h-16 bg-grayRosaDenso"></div>
      </div>
    </>
  );
}
