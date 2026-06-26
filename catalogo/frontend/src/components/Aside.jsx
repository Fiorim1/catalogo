import {
    FaHome,
    FaFileInvoice,
    FaUsers,
    FaBox,
    FaUserTie,
    FaChartBar,
    FaCog
} from "react-icons/fa";

// Imprtando Estilo
import "../styles/Aside.css"

export default function Aside() {
    return (
        <aside className="aside">

            <h4>NAVEGAÇÃO</h4>

            <ul>

                <li className="active">
                    <FaHome />
                    <span>Dashboard</span>
                </li>

                <li>
                    <FaFileInvoice />
                    <span>Orçamentos</span>
                </li>

                <li>
                    <FaUsers />
                    <span>Clientes</span>
                </li>

                <li>
                    <FaBox />
                    <span>Produtos</span>
                </li>

            </ul>

            <h4>ADMINISTRAÇÃO</h4>

            <ul>

                <li>
                    <FaUserTie />
                    <span>Representantes</span>
                </li>

                <li>
                    <FaChartBar />
                    <span>Relatórios</span>
                </li>

                <li>
                    <FaCog />
                    <span>Configurações</span>
                </li>

            </ul>

        </aside>
    );
}