import Rodape from "@/components/Rodape";
import Topo from "@/components/Topo";
import style from "./style.module.css"
const Sabores = () => {
    return (
        <div>
            <Topo />
            <main className={style.main}>
                <section className={style.secao_banner_sabores}>
                    <div className={style.titulo_banner_sabores}>
                        <h1>NOSSOS SABORES</h1>
                    </div>
                </section>

                <section className={`${style.limitar_secao} ${style.secao_sabores}`}>
                    <h2>SABORES DE SORVETE</h2>
                    <div className={style.container_sorvetes}>
                        <div className={style.box_sorvete}>
                            <img src="assets/sabor-oreo.png" alt="sorvete sabor oreo" />
                            <h3>Sorvete de Oreo</h3>
                            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
                        </div>
                        <div className={style.box_sorvete}>
                            <img src="assets/sabor-pistache.png" alt="sorvete sabor pistache" />
                            <h3>Sorvete Pistache</h3>
                            <p>Cremoso sorvete sabor pistache com pedacinhos de semente.</p>
                        </div>
                        <div className={style.box_sorvete}>
                            <img src="assets/sabor-cookies-avela.png" alt="sorvete sabor cookie com avelã" />
                            <h3>Sorvete Cookies & Avelã</h3>
                            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
                        </div>
                        <div className={style.box_sorvete}>
                            <img src="assets/sorbet-kiwi.png" alt="sorbet sabor kiwi" />
                            <h3>Sorvete de Kiwi</h3>
                            <p>Delicioso e refrescante sorvete sabor kiwi. Rico em vitamina C.</p>
                        </div>
                        <div className={style.box_sorvete}>
                            <img src="assets/sorbet-morango.png" alt="sorbet sabor morango" />
                            <h3>Sorvete de Morango</h3>
                            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
                        </div>
                        <div className={style.box_sorvete}>
                            <img src="assets/sorbet-limao.png" alt="sorbet limão siciliano" />
                            <h3>Sorvete de Limão Siciliano</h3>
                            <p>O incrivel sorvete gourmet de limão siciliano vai te encantar.</p>
                        </div>
                    </div>
                </section>
            </main>
            <Rodape />
        </div>
    )
}

export default Sabores;