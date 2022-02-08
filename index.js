import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor = new Diretor("Juliana", 10000, 12345678900);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Lua", 5000, 12378945601);
gerente.cadastrarSenha("123");

const cliente = new Cliente("Julya", 78945612379, "456");
const gerenteLogado = SistemaAutenticacao.login(gerente, "123");
const diretorLogado = SistemaAutenticacao.login(diretor, "123456");

const clienteLogado = SistemaAutenticacao.login(cliente, "456");

console.log(gerenteLogado, diretorLogado, clienteLogado);