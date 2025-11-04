"use client";

import Link from "next/link";

export default function NavMenu() {
  return (
    <ul className="nav-list">
      <li><Link href="/">Home</Link></li>
      <li><Link href="/servicos">Serviços</Link></li>
      <li><Link href="/quem-somos">Quem somos</Link></li>
      <li><Link href="/sustentabilidade">Sustentabilidade</Link></li>
      <li><Link href="/trabalhe-conosco">Trabalhe conosco</Link></li>
    </ul>
  );
}
