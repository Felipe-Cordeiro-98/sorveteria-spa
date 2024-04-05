import Image from "next/image";
import Link from "next/link";
import logo from "../../../public/assets/logo.png";
import style from "./Topo.module.css";

const Topo = () => {
    return (
        <header className={style.header}>
            <div className={style.limitar_secao}>
                <Image className={style.img} src={logo} alt="logomarca" />
                <nav>
                    <Link className={style.link_topo} href="/">Home</Link>
                    <Link className={style.link_topo} href="/sabores">Sabores</Link>
                    <Link className={style.link_topo} href="/sobre">Sobre</Link>
                </nav>
            </div>
        </header>
    )
};

export default Topo;