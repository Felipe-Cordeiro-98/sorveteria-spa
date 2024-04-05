import logo from "../../../public/assets/logo.png";
import Image from "next/image";
import estilo from "./Rodape.module.css"

const Rodape = () => {
    return (
        <footer className={estilo.footer}>
            <div className= {`${estilo.limitar_secao} ${estilo.container_logo_informacoes}`}>
                <img src='assets/logo.png' alt='logomarca' />
                <div>
                    <h3>ENDEREÇO</h3>
                    <p>Av. Bernardino de Campos, 98</p>
                    <p>São Paulo, SP 12345-678</p>
                </div>
                <div>
                    <h3>CONTATO</h3>
                    <p>info@meusite.com</p>
                    <p>Tel: (11) 3456-7890</p>
                </div>
                <div>
                    <h3>HORÁRIOS</h3>
                    <p>ABERTO TODOS OS DIAS</p>
                    <p>10:00 - 22:00</p>
                </div>
            </div>
            <div className={`${estilo.limitar_secao} ${estilo.direito_autoral}`}>
                <p>Gelateria. Orgulhosamente desenvolvido por "nome do desenvolvedor"</p>
            </div>
        </footer>
    )
}

export default Rodape;