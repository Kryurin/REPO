import Image from "next/image";

export default function Contact() {
  return (
    <>
      <Image
        src="/images/pikachu.jpg"
        alt="Si Pikachu"
        width={150}
        height={150}
        className="rounded-md object-contain"
      />
      <p>about</p>
    </>
  );
}
