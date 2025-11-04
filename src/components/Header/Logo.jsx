"use client";

import Image from "../../../public/logo";

export default function Logo() {
  return (
    <div className="logo">
      <Image
        src="logo.png" // coloque o arquivo logo.png dentro da pasta /public
        alt="Trajetto Express"
        width={160}
        height={60}
        priority
      />
    </div>
  );
}
