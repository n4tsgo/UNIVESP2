// incluir.test.js
const firebase = require('@firebase/testing');
const { incluir } = require('./js/firebase/dadosCliente.js'); // ajuste o caminho para o local correto do arquivo

const PROJECT_ID = "test-project";
const DATABASE_URL = "http://localhost:9000"; // Conectando ao emulador de Realtime Database

let app;
let db;

beforeAll(async () => {
  // Inicializa o app de teste com emulador e usuário autenticado simulado
  app = firebase.initializeTestApp({
    projectId: PROJECT_ID,
    databaseURL: DATABASE_URL,
    auth: { uid: "testUser", email: "test@example.com" }
  });
  
  db = app.database();
});

afterAll(async () => {
  await firebase.clearFirestoreData({ projectId: PROJECT_ID });
  await firebase.apps().map(app => app.delete());
});

describe("Testes da função incluir", () => {
  test("Deve criar um novo usuário", async () => {
    const event = { preventDefault: jest.fn() }; // Simula o evento
    const formElement = document.createElement('form');
    formElement.innerHTML = `
      <input name="nome" value="Usuário Teste" />
      <input name="email" value="teste@example.com" />
      <input name="sexo" value="Masculino" />
      <input name="nascimento" value="1990-01-01" />
      <input name="nivel" value="1" />
      <input name="livro" value="2" />
      <input name="cpf" value="123.456.789-00" />
      <input name="plano" value="Básico" />
      <input name="foto" value="" />
    `;
    document.body.appendChild(formElement);

    await incluir(event, COLLECTION);

    const snapshot = await db.ref(COLLECTION).once('value');
    const data = snapshot.val();
    expect(data).not.toBeNull();
    const userId = Object.keys(data)[0];
    expect(data[userId].nome).toBe("USUÁRIO TESTE");
    expect(data[userId].email).toBe("teste@example.com");
  });
});